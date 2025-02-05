import React, { useState } from "react";
import jobDetails from "../Data/jobDetails.json";
import ApplicationForm from "../Details/ApplicationForm";

const Careers = () => {
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [applyingJobId, setApplyingJobId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false); // Control sticky sidebar visibility
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const toggleDetails = (id) => {
    if (expandedJobId === id) {
      // If the same job is clicked again, collapse it
      setExpandedJobId(null);
      setApplyingJobId(null); // Hide application form when collapsing
      setShowSidebar(false); // Hide sidebar when collapsing
    } else {
      // Expand the clicked job and hide others
      setExpandedJobId(id);
      setShowSidebar(true); // Show sidebar when expanding a job
    }
  };

  const handleApplyNow = (id) => {
    setApplyingJobId(id); // Show application form for the selected job
    setShowModal(true); // Show modal for application form
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    setApplyingJobId(null); // Reset the job ID
  };

  return (
    <div className="py-16 bg-gray-200">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Career Opportunities
        </h2>
        <div
          className={`flex flex-col md:flex-row justify-center items-start ${
            expandedJobId ? "gap-4 lg:gap-2" : "gap-6"
          }`}
        >
          {/* Left Section: Job Details */}
          <div
            className={`w-full ${
              expandedJobId ? "lg:w-[90%]" : "lg:w-[85%]"
            } grid grid-cols-1 md:grid-cols-2 gap-6`}
          >
            {jobDetails.map((job) => (
              <div
                key={job.id}
                className={`bg-white shadow-md rounded-md p-4 mb-4 ${
                  expandedJobId === job.id
                    ? "block"
                    : expandedJobId !== null
                    ? "hidden"
                    : "block"
                } w-full max-w-3xl`}
              >
                <h3 className="mb-2 text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">Level: {job.level}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Apply Before: {job.applyBefore}</p>
                <p className="text-gray-600">Vacancies: {job.vacancy}</p>

                {/* Conditionally render the job details section */}
                {expandedJobId === job.id && (
                  <div className="mt-4">
                    <p className="text-gray-800">{job.description}</p>
                    <h4 className="mt-4 font-semibold">Requirements:</h4>
                    <ul className="mt-2 text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="list-disc list-inside">
                          {req}
                        </li>
                      ))}
                    </ul>
                    <h4 className="mt-4 font-semibold">Benefits:</h4>
                    <ul className="mt-2 text-gray-600">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="list-disc list-inside">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    {applyingJobId === job.id ? (
                      <ApplicationForm />
                    ) : (
                      <button
                        onClick={() => handleApplyNow(job.id)}
                        className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      >
                        Apply Now
                      </button>
                    )}
                    <button
                      onClick={() => toggleDetails(job.id)}
                      className="mt-4 ml-2 text-blue-600 hover:underline"
                    >
                      Show Less
                    </button>
                  </div>
                )}

                {/* View Details Button */}
                {expandedJobId !== job.id && (
                  <button
                    onClick={() => toggleDetails(job.id)}
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    View Details
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Section: Sidebar */}
          {showSidebar && (
            <div className="w-full lg:w-[40%] lg:sticky lg:top-16 lg:max-h-screen lg:overflow-y-auto mr-12">
              <h2 className="mb-4 text-2xl font-bold">Other Vacancies</h2>
              <div className="space-y-4">
                {jobDetails.map(
                  (job) =>
                    expandedJobId !== job.id && (
                      <div
                        key={job.id}
                        className="p-4 mb-4 bg-white rounded-md shadow-md"
                      >
                        <h3 className="mb-2 text-xl font-semibold">
                          {job.title}
                        </h3>
                        <button
                          onClick={() => toggleDetails(job.id)}
                          className="text-blue-600 hover:underline"
                        >
                          View Details
                        </button>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal for Application Form */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="relative w-full max-w-lg p-6 bg-white rounded-md">
              <button
                onClick={closeModal}
                className="absolute text-xl text-gray-600 top-2 right-2 hover:text-gray-800"
              >
                &times;
              </button>
              <ApplicationForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
