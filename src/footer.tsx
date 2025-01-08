import logo from './assets/logo.png';
import paymentapps from './assets/paymentapps.png';
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Company Logo"
              className="footer-logo-image"
            />
          </div>
          <p className="footer-description">
            Your dream space deserves the best execution, and that's where
            United Buildcorp Pvt Ltd excels. Our construction services encompass
            everything from foundational work to structural builds, tailored to
            residential, commercial, and industrial needs. We pride ourselves
            on using high-quality materials and advanced techniques to ensure
            durability and efficiency in every project we undertake.
          </p>
          <div className="social-icons">
            <div className='instagram-icon'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0062 8.81245C12.0312 8.81245 8.82499 12.0187 8.82499 15.9937C8.82499 19.9687 12.0312 23.1749 16.0062 23.1749C19.9812 23.1749 23.1875 19.9687 23.1875 15.9937C23.1875 12.0187 19.9812 8.81245 16.0062 8.81245ZM16.0062 20.6625C13.4375 20.6625 11.3375 18.5687 11.3375 15.9937C11.3375 13.4187 13.4312 11.325 16.0062 11.325C18.5812 11.325 20.675 13.4187 20.675 15.9937C20.675 18.5687 18.575 20.6625 16.0062 20.6625ZM25.1562 8.5187C25.1562 9.44995 24.4062 10.1937 23.4812 10.1937C22.55 10.1937 21.8062 9.4437 21.8062 8.5187C21.8062 7.5937 22.5562 6.8437 23.4812 6.8437C24.4062 6.8437 25.1562 7.5937 25.1562 8.5187ZM29.9125 10.2187C29.8062 7.97495 29.2937 5.98745 27.65 4.34995C26.0125 2.71245 24.025 2.19995 21.7812 2.08745C19.4687 1.9562 12.5375 1.9562 10.225 2.08745C7.98749 2.1937 5.99999 2.7062 4.35624 4.3437C2.71249 5.9812 2.20624 7.9687 2.09374 10.2125C1.96249 12.525 1.96249 19.4562 2.09374 21.7687C2.19999 24.0124 2.71249 26 4.35624 27.6375C5.99999 29.275 7.98124 29.7875 10.225 29.9C12.5375 30.0312 19.4687 30.0312 21.7812 29.9C24.025 29.7937 26.0125 29.2812 27.65 27.6375C29.2875 26 29.8 24.0124 29.9125 21.7687C30.0437 19.4562 30.0437 12.5312 29.9125 10.2187ZM26.925 24.25C26.4375 25.475 25.4937 26.4187 24.2625 26.9125C22.4187 27.6437 18.0437 27.475 16.0062 27.475C13.9687 27.475 9.58749 27.6375 7.74999 26.9125C6.52499 26.425 5.58124 25.4812 5.08749 24.25C4.35624 22.4062 4.52499 18.0312 4.52499 15.9937C4.52499 13.9562 4.36249 9.57495 5.08749 7.73745C5.57499 6.51245 6.51874 5.5687 7.74999 5.07495C9.59374 4.3437 13.9687 4.51245 16.0062 4.51245C18.0437 4.51245 22.425 4.34995 24.2625 5.07495C25.4875 5.56245 26.4312 6.5062 26.925 7.73745C27.6562 9.5812 27.4875 13.9562 27.4875 15.9937C27.4875 18.0312 27.6562 22.4125 26.925 24.25Z" fill="white"/>
            </svg>
            </div>
            <div className='LinkedIn-icon'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 2H3.99375C2.89375 2 2 2.90625 2 4.01875V27.9813C2 29.0938 2.89375 30 3.99375 30H28C29.1 30 30 29.0938 30 27.9813V4.01875C30 2.90625 29.1 2 28 2ZM10.4625 26H6.3125V12.6375H10.4688V26H10.4625ZM8.3875 10.8125C7.05625 10.8125 5.98125 9.73125 5.98125 8.40625C5.98125 7.08125 7.05625 6 8.3875 6C9.7125 6 10.7937 7.08125 10.7937 8.40625C10.7937 9.7375 9.71875 10.8125 8.3875 10.8125ZM26.0187 26H21.8687V19.5C21.8687 17.95 21.8375 15.9563 19.7125 15.9563C17.55 15.9563 17.2188 17.6438 17.2188 19.3875V26H13.0688V12.6375H17.05V14.4625H17.1062C17.6625 13.4125 19.0188 12.3062 21.0375 12.3062C25.2375 12.3062 26.0187 15.075 26.0187 18.675V26Z" fill="white"/>
            </svg>
            </div>
          </div>
        </div>

       
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#living">Living</a></li>
            <li><a href="#storage">Storage</a></li>
            <li><a href="#dining">Dining</a></li>
            <li><a href="#bedroom">Bedroom</a></li>
            <li><a href="#mattress">Mattress</a></li>
          </ul>
        </div>

        <div className="footer-categories">
          <ul>
            <li><a href="#residential">Residential</a></li>
            <li><a href="#institutional">Institutional</a></li>
            <li><a href="#commercial">Commercial</a></li>
          </ul>
        </div>
      </div>

      <hr></hr>

      <div className="footer-bottom">
        <p>2024 © All rights reserved – Cozy Comfort</p>
        <div className="payment-icons">
          <img src={paymentapps} alt="paymentapps" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
