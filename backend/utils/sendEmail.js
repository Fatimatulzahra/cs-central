import sgMail from "@sendgrid/mail";
import { createEvent } from "ics";

export async function sendConfirmationEmail({ name, email }) {
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // Create ICS calendar file
  const { error, value } = createEvent({
    title: "Fisk CS Event",
    description: "Thanks for RSVPing!",
    location: "Fisk University",
    start: [2025, 2, 15, 15, 0], // example date
    duration: { hours: 1 }
  });

  if (error) throw error;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM, // MUST be verified in SendGrid
    subject: "Your RSVP Confirmation:)",
    html: `
      <h2>Hello ${name},</h2>
      <p>Your RSVP has been received. Attached is your event calendar invite.</p>
    `,
    attachments: [
      {
        content: Buffer.from(value).toString("base64"),
        filename: "event.ics",
        type: "text/calendar",
        disposition: "attachment",
      },
    ],
  };

  await sgMail.send(msg);
  console.log("SendGrid email sent to:", email);
}
