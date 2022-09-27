import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navigation from "./Navigation";

function Header() {
  return (
    <div>
        <header className="p-5 text-center text-white bg-primary">
        <h1>Jared Daniel</h1>
        </header>
        <nav>
            <Navigation />
        </nav>
        <main>

        </main>
    </div>
  );
}

export default Header;