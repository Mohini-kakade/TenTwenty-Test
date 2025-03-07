import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-3">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left - Nav Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            News
          </a>
          <a href="#" className="hover:text-gray-600">
            Services
          </a>
          <a href="#" className="hover:text-gray-600">
            Our Team
          </a>
          <a href="#" className="hover:text-gray-600">
            Make Enquiry
          </a>
        </div>

        {/* Right - Contact Button */}
        <button className="border border-black px-5 py-1 flex items-center gap-2 hover:bg-gray-100">
          Contact us &nbsp; →
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center z-50"
          onClick={console.log("clicked")}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <a href="#" className="hover:text-gray-600">
            About
          </a>
          <a href="#" className="hover:text-gray-600">
            News
          </a>
          <a href="#" className="hover:text-gray-600">
            Services
          </a>
          <a href="#" className="hover:text-gray-600">
            Our Team
          </a>
          <a href="#" className="hover:text-gray-600">
            Make Enquiry
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
