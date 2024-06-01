import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4" >
      <div className="container-lg d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0 text-muted">&copy; 2023 All rights reserved.</p>
        <div className="d-flex align-items-center">
          <a href="#privacy" className="text-muted mx-2">Privacy Policy</a>
          <a href="#terms" className="text-muted mx-2">Terms of Service</a>
          <a href="https://facebook.com" className="text-muted mx-2">
            <FaFacebookSquare size={24} />
          </a>
          <a href="https://twitter.com" className="text-muted mx-2">
            <FaTwitterSquare size={24} />
          </a>
          <a href="https://instagram.com" className="text-muted mx-2">
            <FaInstagramSquare size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
