//About Me, Portfolio, Contact, and Resume,
import React from "react";

function Navigation(props) {
    const navItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div>
            {navItems.map((item) => (
                <div>
                    {item}
                </div>
            ))}
        </div>
    );
}
export default Navigation;