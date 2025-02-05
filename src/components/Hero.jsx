import security from "../assets/security.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      
      <section className="relative overflow-hidden text-white bg-blue-900 py-18">
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#003366] to-[#004080] opacity-90"></div>

        
        <div className="absolute inset-0">
          <div className="absolute inset-0 rounded-full opacity-50 bg-radial-gradient"></div>
        </div>

        <div className="container relative grid items-center gap-8 px-6 mx-auto md:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl sparkling-text">
              Professional Security Solutions
            </h2>
            <p className="mb-8 text-xl text-gray-300 sparkling-text">
              Protecting what matters most with dedication and expertise since
              2079
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-3 font-semibold text-blue-900 transition bg-yellow-400 rounded-full hover:bg-yellow-300"
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>

              <button
                title="Learn more about our services"
                className="px-8 py-3 font-semibold text-yellow-400 transition border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-blue-900"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={security}
              alt="Security Guard"
              className="w-full max-w-2xl mx-auto mb-0 md:mb-0"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        .sparkling-text {
          color: #ffffff;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
            0 0 8px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3);
          background: linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: sparkle 3s infinite;
        }

        @keyframes sparkle {
          0% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
              0 0 8px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
              0 0 15px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
          100% {
            text-shadow: 0 0 4px rgba(255, 255, 255, 0.6),
              0 0 8px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.3);
          }
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            rgba(0, 31, 63, 0.8) 0%,
            rgba(0, 52, 104, 0.6) 60%,
            rgba(0, 66, 128, 0.5) 100%
          );
        }
      `}</style>
    </>
  );
}

export default Hero;
