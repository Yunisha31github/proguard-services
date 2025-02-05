import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent page reload
    navigate(path); // Use React Router to navigate
  };
  return (
    <>
      {/* Footer */}
      <div className="py-12 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          
          <div className="grid grid-cols-1 gap-8 mx-10 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full">
                  <Star className="w-6 h-6 text-blue-900" />
                </div>
                <span className="font-bold">ProGuard Services</span>
              </div>
              <p className="text-gray-400">Your Safety, Our Priority</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/services?service=guard"
                    className="hover:text-yellow-400"
                  >
                    Security Guards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services?service=corporate"
                    className="hover:text-yellow-400"
                  >
                    Corporate Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services?service=event"
                    className="hover:text-yellow-400"
                  >
                    Event Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-yellow-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency: 24/7</li>
                <li>Email: infoproguard.com</li>
                <li>Phone: (977) 98-XXXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 ProGuard Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
