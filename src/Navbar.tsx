import React, { useState } from "react";
import "./index.css";
import logo from './assets/logo.png';

const Navbar: React.FC = () => {
  const [isLivingOpen, setIsLivingOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="navbar-logo" src={logo} alt="Logo"/>
      </div>
      <ul className="menu">
        <li className="menu-item home">Home</li>
        <li
          className="menu-item dropdown-parent"
          onMouseEnter={() => setIsLivingOpen(true)}
          onMouseLeave={() => setIsLivingOpen(false)}
        >
          Living
          <span className="dropdown-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
          <ul className={`dropdown ${isLivingOpen ? "show" : ""}`}>
            <li className="dropdown-item">TV Units</li>
            <li className="dropdown-item">Box Shelves</li>
            <li className="dropdown-item">Shoe Rack</li>
            <li className="dropdown-item">Dressing Table</li>
            <li className="dropdown-item">Wardrobes</li>
          </ul>
        </li>
        <li className="menu-item dropdown-parent">Storage
        <span className="dropdown-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="menu-item dropdown-parent">Dining
        <span className="dropdown-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="menu-item dropdown-parent">Bedroom
        <span className="dropdown-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span>
        </li>
        <li className="menu-item dropdown-parent">Mattress
        <span className="dropdown-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="menu-item dropdown-parent">Study
        <span className="dropdown-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="menu-item dropdown-parent">Office
        <span className="dropdown-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="menu-item dropdown-parent">Outdoor
        <span className="dropdown-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
        </li>
        <li className="search-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_134)">
          <path d="M23.6719 20.7516L18.9984 16.0781C18.7875 15.8672 18.5016 15.75 18.2016 15.75H17.4375C18.7313 14.0953 19.5 12.0141 19.5 9.75C19.5 4.36406 15.1359 0 9.75 0C4.36406 0 0 4.36406 0 9.75C0 15.1359 4.36406 19.5 9.75 19.5C12.0141 19.5 14.0953 18.7313 15.75 17.4375V18.2016C15.75 18.5016 15.8672 18.7875 16.0781 18.9984L20.7516 23.6719C21.1922 24.1125 21.9047 24.1125 22.3406 23.6719L23.6672 22.3453C24.1078 21.9047 24.1078 21.1922 23.6719 20.7516ZM9.75 15.75C6.43594 15.75 3.75 13.0688 3.75 9.75C3.75 6.43594 6.43125 3.75 9.75 3.75C13.0641 3.75 15.75 6.43125 15.75 9.75C15.75 13.0641 13.0688 15.75 9.75 15.75Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_1_134">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        </li>
        <li className="profile-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 12C15.3141 12 18 9.31359 18 6C18 2.68641 15.3141 0 12 0C8.68594 0 6 2.68641 6 6C6 9.31359 8.68594 12 12 12ZM14.3766 14.25H9.62344C5.13797 14.25 1.5 17.8875 1.5 22.3734C1.5 23.2706 2.2275 23.9986 3.12469 23.9986H20.8762C21.7734 24 22.5 23.2734 22.5 22.3734C22.5 17.8875 18.8625 14.25 14.3766 14.25Z" fill="white"/>
             </svg>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
