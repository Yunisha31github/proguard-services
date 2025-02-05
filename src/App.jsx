
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import Headerbar from "./components/Headerbar";
import Navbar from "./components/Navbar";
import Careers from "./Pages/Careers";
import Services from "./Pages/Services";
import BlogsPage from "./Pages/BlogsPage";
import BlogDetail from "./Pages/BlogDetail";
import AboutUs from "./Pages/AboutUs"; 
import ContactUs from "./Pages/ContactUs";
import Hero from "./components/Hero";
import ApplicationForm from "./Details/ApplicationForm";
import Assistance from "./components/Assistance";
import Footer from "./components/Footer";
import data from "./Data/aboutUsData.json";

function AppContent({ scrollToServices, servicesRef }) {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  // Determine if we are on the Home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Always visible components */}
      <Headerbar />
      <Navbar scrollToServices={scrollToServices} />

      {/* Page-specific content */}
      <div>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Hero />} />
          {/* Blogs Route */}
          <Route path="/blogs" element={<BlogsPage />} />
          {/* Blog Detail Route */}
          <Route path="/blogs/:title" element={<BlogDetail />} />
          {/* Careers Route */}
          <Route path="/careers" element={<Careers />} />
          {/* Application Form Route */}
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/about" element={<AboutUs data={data} />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Services and Assistance always visible on home page */}
      {/* This is outside of Routes so it's always rendered */}
      <div ref={servicesRef}>
        <Services />
      </div>
      {isHomePage && <Assistance />}

      {/* Always visible footer */}
      <Footer />
    </div>
  );
}

function App() {
  const servicesRef = useRef(null);

  // Scroll to Services section when called
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <AppContent
        scrollToServices={scrollToServices}
        servicesRef={servicesRef}
      />
    </Router>
  );
}

export default App;
