import sgMail from "@sendgrid/mail";
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendIdeaEmail({ name, email, idea }) {

  const msg = {
    to: process.env.EMAIL_FROM, // <-- your own email
    from: process.env.EMAIL_FROM,
    subject: `💡 New Idea Submitted by ${name}`,
    html: `
      <h3>New Idea Submitted!</h3>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Idea:</strong></p>
      <p>${idea}</p>
    `,
  };

  await sgMail.send(msg);
  console.log("Idea email sent!");
}
