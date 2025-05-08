import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MoveIcon, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <MoveIcon className="w-8 h-8 text-primary-500" />
              <span className="font-bold text-xl text-white">Action Now-Liberia</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Empowering individuals and communities to make a difference through advocacy, education, and outreach.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Advocacy Campaigns
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Education & Workshops
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                  Community Outreach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Ansonysieh@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+231881697769</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Action Now-Liberia. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;