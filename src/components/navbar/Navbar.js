import React from "react";
import './Navbar.css';

//Navbar
const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar_menu">
                <li className="navbar_item" onClick={() => scrollToSection('about')}>
                    About
                </li>
                <li className="navbar_item" onClick={() => scrollToSection('projects')}>
                    Projects
                </li>
                <li className="navbar_item" onClick={() => scrollToSection('skills')}>
                    Skills
                </li>
                <li className="navbar_item" onClick={() => scrollToSection('contact')}>
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

