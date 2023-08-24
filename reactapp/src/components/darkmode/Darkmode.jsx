import React, { useState, useEffect } from 'react';
import './DarkMode.css'; // Import your CSS file

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply dark mode class to the body
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="dark-mode-toggle">
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                Dark Mode
            </label>
        </div>
    );
};

export default DarkMode;
