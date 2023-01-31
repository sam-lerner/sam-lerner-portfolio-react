import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are able to extract the key value pairs from props by using the destructuring assignment syntax. We are able to do this because the props object is passed into the NavTabs component as an argument.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // This is a ternary operator. It is checking if the currentPage is equal to 'Home' and if it is, it will return 'nav-link active' and if it is not, it will return 'nav-link'.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          // This is a ternary operator. It is checking if the currentPage is equal to 'About' and if it is, it will return 'nav-link active' and if it is not, it will return 'nav-link'.
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing
          // This is a ternary operator. It is checking if the currentPage is equal to 'Blog' and if it is, it will return 'nav-link active' and if it is not, it will return 'nav-link'.
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // This is a ternary operator. It is checking if the currentPage is equal to 'Contact' and if it is, it will return 'nav-link active' and if it is not, it will return 'nav-link'.
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
