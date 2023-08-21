import React from 'react';
import  './ScrollToTopButton.css';

function ScrollToTopComponent() {
  return (
      <button className="scroll-to-top-button" onClick={scrollToTop}>
          Scroll to Top
      </button>
  );
}

    function scrollToTop() {
        console.log("Scrolling to top"); // Check if this log appears in the console
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


export default ScrollToTopComponent;