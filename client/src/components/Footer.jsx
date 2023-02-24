import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/adrian4058" target="_blank">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/adrian4058" target="_blank">
        <FaGithub size={30} /> 
      </a>
    </div>
  );
}
