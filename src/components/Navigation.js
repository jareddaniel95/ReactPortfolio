//About Me, Portfolio, Contact, and Resume,
import React from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="site-nav">
          <li className={currentPage === 'about-me' ? 'active-item' : 'inactive-item'}>
            <a
              href="#about-me"
              onClick={() => handlePageChange('about-me')}
            //   className={currentPage === 'about-me' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className={currentPage === 'portfolio' ? 'active-item' : 'inactive-item'}>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className={currentPage === 'contact' ? 'active-item' : 'inactive-item'}>
            <a
              href="#contact"
              onClick={() => handlePageChange('contact')}
            >
              Contact Me
            </a>
          </li>
          <li className={currentPage === 'resume' ? 'active-item' : 'inactive-item'}>
            <a
              href="#resume"
              onClick={() => handlePageChange('resume')}
            >
              Resume
            </a>
          </li>
        </ul>
      );
}
export default Navigation;