import React, {useState} from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {

  const [currentPage, setCurrentPage] = useState('about-me');

  const renderPage = () => {
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <header className="p-5 text-center text-white bg-primary">
        <h1>Jared Daniel</h1>
        </header>
        <nav>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </nav>
        <main>
          {renderPage()}
        </main>
    </div>
  );
}

export default Header;