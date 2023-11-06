import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add an event listener to detect scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>NTWIST</h1>
      </div>
      <ul className="nav-list">
        <li>
          <a href="/">HOME</a>
        </li>
        <li className="dropdown">
          <a href="/">INDUSTRIES</a>
          <div className="dropdown-content">
            <a href="/">Sustainability</a>
            <a href="/">Mineral Processing</a>
            <a href="/">Mine-To-Mill-To-Mine Optimization</a>
            <a href="/">Oil & Gas</a>
          </div>
        </li>
        <li>
          <a href="/">AI SOFTWARE</a>
        </li>
        <li>
          <a href="/">BLOG</a>
        </li>
        <li>
          <a href="/">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
