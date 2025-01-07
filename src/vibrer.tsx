import React from 'react';
import './vibrer.css';
import whyus2 from './assets/whyus2.png'; 

const Vibrer: React.FC = () => {
  return (
    <section className="why-us">
      <h2>Why Vibrer Stands Out?</h2>
      <div className="grid-container">
        <div className="grid-item">
          <div className="icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_343)">
            <path d="M59.707 21.6328L53.7773 3.84375C53.0156 1.54687 50.8711 0 48.4453 0H31.875V22.5H59.8477C59.8008 22.207 59.8008 21.9141 59.707 21.6328ZM28.125 0H11.5547C9.12891 0 6.98438 1.54687 6.22266 3.84375L0.292969 21.6328C0.199219 21.9141 0.199219 22.207 0.152344 22.5H28.125V0ZM0 26.25V54.375C0 57.4805 2.51953 60 5.625 60H54.375C57.4805 60 60 57.4805 60 54.375V26.25H0Z" fill="#1B1B1B"/>
            </g>
            <defs>
            <clipPath id="clip0_1_343">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
          <h3>500+ Collections</h3>
          <p>
            Our journey begins with a comprehensive understanding of your unique
            style and space requirements.
          </p>
        </div>
        <div className="grid-item">
          <div className="icon2">
               <img src={whyus2} alt="why us 2"/>
          </div>
          <h3>300+ Fabrics</h3>
          <p>
            Our journey begins with a comprehensive understanding of your unique
            style and space requirements.
          </p>
        </div>
        <div className="grid-item">
          <div className="icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_315)">
            <path d="M59.0625 30C59.0625 46.0508 46.0508 59.0625 30 59.0625C13.9492 59.0625 0.9375 46.0508 0.9375 30C0.9375 13.9492 13.9492 0.9375 30 0.9375C46.0508 0.9375 59.0625 13.9492 59.0625 30ZM26.6384 45.3884L48.2009 23.8259C48.933 23.0937 48.933 21.9064 48.2009 21.1743L45.5493 18.5227C44.8171 17.7904 43.6298 17.7904 42.8975 18.5227L25.3125 36.1076L17.1025 27.8975C16.3703 27.1654 15.183 27.1654 14.4507 27.8975L11.7991 30.5491C11.067 31.2813 11.067 32.4686 11.7991 33.2007L23.9866 45.3882C24.7189 46.1205 25.9061 46.1205 26.6384 45.3884Z" fill="#030303"/>
            </g>
            <defs>
            <clipPath id="clip0_1_315">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <h3>Top-notch Quality</h3>
          <p>
            Our journey begins with a comprehensive understanding of your unique
            style and space requirements.
          </p>
        </div>
        <div className="grid-item">
          <div className="icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_335)">
            <path d="M23.9414 0.585894C12.293 2.85933 2.90625 12.2226 0.609379 23.8359C-3.72656 45.75 16.043 62.0859 30.9375 59.7773C35.7656 59.0273 38.1328 53.3789 35.918 49.0312C33.2109 43.7109 37.0781 37.5 43.0547 37.5H52.3945C56.5898 37.5 59.9883 34.0312 60 29.8476C59.9414 11.3789 43.1367 -3.15239 23.9414 0.585894ZM11.25 37.5C9.17579 37.5 7.5 35.8242 7.5 33.75C7.5 31.6757 9.17579 30 11.25 30C13.3242 30 15 31.6757 15 33.75C15 35.8242 13.3242 37.5 11.25 37.5ZM15 22.5C12.9258 22.5 11.25 20.8242 11.25 18.75C11.25 16.6757 12.9258 15 15 15C17.0742 15 18.75 16.6757 18.75 18.75C18.75 20.8242 17.0742 22.5 15 22.5ZM30 15C27.9258 15 26.25 13.3242 26.25 11.25C26.25 9.17574 27.9258 7.49996 30 7.49996C32.0742 7.49996 33.75 9.17574 33.75 11.25C33.75 13.3242 32.0742 15 30 15ZM45 22.5C42.9258 22.5 41.25 20.8242 41.25 18.75C41.25 16.6757 42.9258 15 45 15C47.0742 15 48.75 16.6757 48.75 18.75C48.75 20.8242 47.0742 22.5 45 22.5Z" fill="#030303"/>
            </g>
            <defs>
            <clipPath id="clip0_1_335">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <h3>Colour and Length Customization</h3>
          <p>
            Our journey begins with a comprehensive understanding of your unique
            style and space requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vibrer;
