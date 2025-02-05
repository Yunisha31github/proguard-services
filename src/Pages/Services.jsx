import React, { useState } from "react";
import { Shield, Users, Building, ChevronRight } from "lucide-react";
import serviceDetails from "../Data/ServiceDetails.json";
import ServiceForm from "../Details/ServiceForm";

function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const handleInquiry = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const toggleDetails = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <section className="py-16 bg-blue-100">
      <div className="container px-4 mx-auto">
        <h3 className="mb-12 text-2xl font-bold text-center md:text-3xl">
          Our Security Services
        </h3>

        
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Expanded Service */}
          {expandedService && (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-2/3">
              {Object.entries(serviceDetails)
                .filter(([key]) => key === expandedService)
                .map(([key, details]) => (
                  <div key={key}>
                    {key === "guard" && (
                      <Shield className="w-12 h-12 mb-4 text-blue-900" />
                    )}
                    {key === "corporate" && (
                      <Building className="w-12 h-12 mb-4 text-blue-900" />
                    )}
                    {key === "event" && (
                      <Users className="w-12 h-12 mb-4 text-blue-900" />
                    )}
                    <h4 className="mb-3 text-xl font-semibold">
                      {details.title}
                    </h4>
                    <p className="mb-4 text-gray-600">{details.description}</p>
                    <ul className="mb-4 text-gray-600 list-disc list-inside">
                      {details.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleInquiry(details.title)}
                      className="flex items-center font-semibold text-blue-900 hover:text-yellow-400"
                    >
                      Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button
                      onClick={() => toggleDetails(key)}
                      className="mt-2 text-sm text-blue-900"
                    >
                      Show Less
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* Sidebar for Non-Selected Services */}
          {expandedService && (
            <div
              className={`${
                expandedService ? "md:w-1/3 md:sticky md:top-16" : ""
              } w-full md:max-h-screen overflow-y-auto`}
            >
              <h2 className="mb-4 text-2xl font-bold">Other Services</h2>
              <div
                className={`space-y-4 ${expandedService ? "mt-8 md:mt-0" : ""}`}
              >
                {Object.entries(serviceDetails)
                  .filter(([key]) => key !== expandedService)
                  .map(([key, details]) => (
                    <div
                      key={key}
                      className="p-6 bg-white rounded-md shadow-md"
                    >
                      {key === "guard" && (
                        <Shield className="w-12 h-12 mb-4 text-blue-900" />
                      )}
                      {key === "corporate" && (
                        <Building className="w-12 h-12 mb-4 text-blue-900" />
                      )}
                      {key === "event" && (
                        <Users className="w-12 h-12 mb-4 text-blue-900" />
                      )}
                      <h3 className="mb-2 text-xl font-semibold">
                        {details.title}
                      </h3>
                      <button
                        onClick={() => toggleDetails(key)}
                        className="text-blue-600 hover:underline"
                      >
                        Show More
                      </button>
                      <button
                        onClick={() => handleInquiry(details.title)}
                        className="flex items-center mt-2 font-semibold text-blue-900 hover:text-yellow-400"
                      >
                        Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Main Grid - Only Visible When No Service is Expanded */}
          {!expandedService && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {Object.entries(serviceDetails).map(([key, details]) => (
                <div
                  key={key}
                  className="p-6 transition bg-white rounded-lg shadow-lg hover:shadow-xl"
                >
                  {key === "guard" && (
                    <Shield className="w-12 h-12 mb-4 text-blue-900" />
                  )}
                  {key === "corporate" && (
                    <Building className="w-12 h-12 mb-4 text-blue-900" />
                  )}
                  {key === "event" && (
                    <Users className="w-12 h-12 mb-4 text-blue-900" />
                  )}
                  <h4 className="mb-3 text-xl font-semibold">
                    {details.title}
                  </h4>
                  <p className="mb-4 text-gray-600">
                    {details.description.slice(0, 50)}...
                  </p>
                  <button
                    onClick={() => handleInquiry(details.title)}
                    className="flex items-center font-semibold text-blue-900 hover:text-yellow-400"
                  >
                    Inquire Now <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <button
                    onClick={() => toggleDetails(key)}
                    className="mt-2 text-sm text-blue-900"
                  >
                    Show More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inquiry Form Modal */}
        {showForm && (
          <ServiceForm
            selectedService={selectedService}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </section>
  );
}

export default Services;
