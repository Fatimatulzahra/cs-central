import { useState } from "react";
import Card from "../components/Card";
import tip from "../assets/tip.png";
import webdev from "../assets/webdev.jpeg";
import google from "../assets/google.png";
import hackathon from "../assets/hackathon.png";
import coding from "../assets/coding.jpg";
import research from "../assets/research.jpeg";
import ai from "../assets/ai.png";
import resume from "../assets/resume.jpg";
import RSVPModal from "../components/rsvpModal";

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  // CONSTANT: ID for the event to RSVP to events(will change later to dynamic)
  const EVENT_ID = "691271ea6104e35dc818416e";
  

  const openModal = (title) => {
    setSelectedEvent(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Called when RSVP modal form submits
  const handleRSVP = async ({ name, email }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/events/${EVENT_ID}/rsvp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );

      const data = await res.json();
      console.log("RSVP Response:", data);

      if (res.ok) {
        alert("RSVP submitted! A confirmation email has been sent:)");
      } else {
        alert("Something went wrong:( " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Could not submit RSVP: check backend connection.");
    }
  };


  return (
    <section className="min-h-screen bg-emerald-50 dark:bg-gray-900 text-emerald-900 dark:text-gray-200 py-16 px-8">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-emerald-800 dark:text-emerald-400 mb-3">
          Explore Upcoming Events
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay engaged with upcoming Computer Science events — from technical prep sessions to workshops,
          meetups, and student projects. Click below to RSVP or learn more!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">

        <Card img={tip} title="Technical Interview Prep" onClick={() => openModal("Technical Interview Prep")} />
        <Card img={coding} title="Coding Bootcamp Series" onClick={() => openModal("Coding Bootcamp Series")} />
        <Card img={hackathon} title="Hackathon Kickoff" onClick={() => openModal("Hackathon Kickoff")} />
        <Card img={ai} title="AI and Ethics Panel" onClick={() => openModal("AI and Ethics Panel")} />
        <Card img={research} title="Research Showcase" onClick={() => openModal("Research Showcase")} />
        <Card img={resume} title="Resume Workshop" onClick={() => openModal("Resume Workshop")} />
        <Card img={google} title="Google Meet & Greet" onClick={() => openModal("Google Meet & Greet")} />
        <Card img={webdev} title="Intro to Web Development" onClick={() => openModal("Intro to Web Development")} />

      </div>

      {/* Modal */}
      <RSVPModal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventTitle={selectedEvent}
        onSubmit={handleRSVP}
      />
    </section>
  );
}
