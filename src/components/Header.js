import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="p-5 text-center text-white bg-primary">
      <h1>Home</h1>
    </header>
  );
}

export default Header;
