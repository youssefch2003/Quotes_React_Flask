import '../App.css';
import React from "react";

import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-center text-white  bg-emerald-600">
       
      <div >
        <p>Made with passion and love © 2023 by   <Link to="/github" className="footerLink" > Youssef Cheriha </Link></p>
        
     
      </div>
    </footer>
  );
};

export default Footer;
