import React from 'react';
import csLink from "../assets/csLink.jpg";
import { Lightbulb, CalendarDays, Users } from "lucide-react";
import IdeaModal from '../components/ideaModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const [ideaOpen, setIdeaOpen] = useState(false);

  const submitIdea = async (data) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ideas/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      await res.json();
      alert("Idea submitted! Thank you.");
    } catch (err) {
      console.error(err);
      alert("Error submitting idea. Check backend.");
    }

    setIdeaOpen(false);
  };

  return (
    <div className="font-inter text-gray-800 dark:text-gray-400 dark:bg-gray-900">
      {/* Hero Section */}
        <section className="bg-emerald-50 dark:bg-gray-800 text-emerald-900 dark:text-gray-400 pt-6 pb-16 px-10 flex flex-col md:flex-row items-center justify-between border-b border-emerald-200 dark:border-gray-700">
        {/* Text content */}
            <div className="max-w-lg space-y-6 md:ml-8">
                <h1 className="text-5xl font-playfair font-bold leading-tight">
                Welcome to <span className="text-yellow-400">CS Central</span>
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-400">
                Your one-stop hub for CS events, ideas, and campus opportunities.
                Stay involved, stay informed, and shape the future of tech at Fisk.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setIdeaOpen(true)} className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-emerald-700 transition">
                      Any Ideas?
                  </button>
                  <Link to="/events">
                    <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full border border-emerald-600 shadow hover:bg-emerald-100 transition">
                      Upcoming
                    </button>
                  </Link>
                </div>
            </div>

            {/* Image */}
            <div className="mt-10 md:mt-0 md:mr-8">
                <img
                src={csLink}
                alt="CS Link"
                className="w-60 h-60 rounded-full object-cover border-4 border-emerald-600 shadow-md hover:scale-105 transition-transform duration-300"
                />
            </div>
        </section>
      {/* Idea Modal */}
        <IdeaModal 
        isOpen={ideaOpen}
        onClose={() => setIdeaOpen(false)}
        onSubmit={submitIdea}
      />

      {/* About Section */}
      <section className="py-16 px-10 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-playfair text-emerald-700 dark:text-emerald-400 font-bold">
            About the Platform
          </h2>
          <p className="text-lg leading-relaxed">
            This website serves as a centralized hub for students to discover and
            keep track of upcoming events hosted by the Computer Science
            department at Fisk. It’s your go-to platform to explore daily and
            weekly happenings, find service opportunities, and stay involved in
            campus life. Club e-board members can easily post, manage, and
            promote their events for greater visibility. Students can also share
            their ideas to shape future events!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10 bg-emerald-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-playfair text-emerald-700 dark:text-emerald-400 font-bold mb-10">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <CalendarDays className="mx-auto text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-emerald-700">
                Discover Events Easily
              </h3>
              <p className="text-gray-600 mt-2 dark:text-gray-400">
                Explore all upcoming CS activities and never miss out on
                department events again.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <Lightbulb className="mx-auto text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-emerald-700">
                Share Your Ideas
              </h3>
              <p className="text-gray-600 mt-2 dark:text-gray-400">
                Have an idea for a workshop, competition, or meetup? Suggest it
                directly through the site.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <Users className="mx-auto text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-emerald-700">
                Access Resources
              </h3>
              <p className="text-gray-600 mt-2 dark:text-gray-400">
                Get curated links to coding tools, research resources, and CS
                learning materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
