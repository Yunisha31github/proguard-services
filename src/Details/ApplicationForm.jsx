import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    experience: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};

    
    if (!formData.name) newErrors.name = "Name is required.";

    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contact) {
      newErrors.contact = "Contact details are required.";
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit phone number.";
    }

    
    if (!formData.experience) {
      newErrors.experience = "Experience is required.";
    } else if (formData.experience.length < 20) {
      newErrors.experience =
        "Experience description must be at least 20 characters long.";
    }

    // File validation (ensure a file is selected and it is a valid type)
    const allowedFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!formData.file) {
      newErrors.file = "File upload is required.";
    } else if (!allowedFileTypes.includes(formData.file.type)) {
      newErrors.file =
        "Invalid file type. Please upload a PDF or Word document.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md"
    >
      <h3 className="mb-4 text-2xl font-bold">Apply for this Job</h3>

      
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>


      <div className="mb-4">
        <label className="block mb-1 font-semibold">Contact Details</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.contact && (
          <p className="text-sm text-red-600">{errors.contact}</p>
        )}
      </div>


      <div className="mb-4">
        <label className="block mb-1 font-semibold">Experience</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.experience && (
          <p className="text-sm text-red-600">{errors.experience}</p>
        )}
      </div>


      <div className="mb-4">
        <label className="block mb-1 font-semibold">Upload CV</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.file && <p className="text-sm text-red-600">{errors.file}</p>}
      </div>

      
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
