import { Phone } from "lucide-react";
function Assistance() {
  return (
    <>
      
      <section className="py-12 text-white bg-blue-900">
        <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300">
              Our security experts are available 24/7
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/1234567890",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="flex items-center px-8 py-3 space-x-2 bg-green-600 rounded-full hover:bg-green-700"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Assistance;
