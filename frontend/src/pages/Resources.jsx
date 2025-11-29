import Card from '../components/Card';
import resource from '../assets/resource.jpg';
import ResourceModal from '../components/resourceModal';
import { useState } from 'react';

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  const resources = [
    {
      title: "Leetcode (TIP)",
      description: "Access common interview questions, mock interview guides, and CS preparation materials.",
      link: "https://leetcode.com",
    },
    {
      title: "Rewriting The Code(RTC)",
      description: "Join other women in tech to share experiences, resources, and support.",
      link: "https://rewritingthecode.org/",
    },
    {
      title: "Coding Practice Platforms",
      description: "Sharpen your skills with hands-on coding challenges across various platforms.",
      link: "https://www.hackerrank.com",
    },
    {
      title: "Internship Opportunities",
      description: "Browse internship listings, application deadlines, and professional development programs.",
      link: "https://www.linkedin.com/jobs",
    },
    {
      title: "Scholarship Databases",
      description: "Find scholarships for CS majors, minorities in tech, and STEM fields.",
      link: "https://www.scholarships.com",
    },
    {
      title: "Join ColorStack",
      description: "A platform dedicated to helping Black and Latinx students succeed in computer science.",
      link: "https://www.colorstack.org/",
    },
    {
      title: "Last Mile Education Fund",
      description: "Easy application and access to funding for students pursuing degrees in STEM fields.",
      link: "https://www.lastmile-ed.org/apply",
    },
    {
      title: "Open Source Projects",
      description: "Start contributing to real-world software through beginner-friendly open-source projects.",
      link: "https://github.com/explore",
    },
  ];

  return (
    <section className="min-h-screen bg-emerald-50 dark:bg-gray-900 text-emerald-900 dark:text-gray-200 py-16 px-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold text-emerald-800 dark:text-emerald-400 mb-3">
          Explore Resources
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover a curated selection of resources to support your journey in Computer Science — 
          from technical prep materials to career guides and scholarship databases. Click below to learn more!
        </p>
      </div>

      {/* Cards Grid (Correct One) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {resources.map((res, index) => (
          <Card
            key={index}
            img={resource}
            title={res.title}
            buttonLabel="Learn More"
            onClick={() => openModal(res)}
          />
        ))}
      </div>

      {/* Modal */}
      <ResourceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        resource={selectedResource}
      />
    </section>
  );
}
