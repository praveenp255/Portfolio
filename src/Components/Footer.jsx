import React from "react";
import { FaGithub, FaInstagram, FaLinkedin} 
from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/praveenp255" target="_blank">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/praveen-patel-670ab711b" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailTo:praveenpatel050@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
