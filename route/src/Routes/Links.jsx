import React from "react";
import { Link } from "react-router-dom";

const links = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/login", text: "Login" },
  { path: "/contact", text: "Contact" },
];
const Links = () => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => ( // Added 'index' as parameter for uniqueness
          <li key={index}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;

/*

const Links = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Links;

*/
