'use client'
import Link from 'next/link';
import Image from 'next/image';
import './_footer.scss' // Ensure this SCSS file exists and is correctly styled
import Socials from "@/components/Socials/Socials"; // Ensure this component exists
import { ArrowRight } from "@carbon/icons-react"; // Note: This import is present but ArrowRight is not used in the provided JSX.

// Footer.jsx
import React, { useState, useEffect } from 'react';

// Inline SVGs for Chevron icons as provided
const ChevronDown = ({ size = 20 }) => (
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path>
  </svg>
);

const ChevronUp = ({ size = 20 }) => (
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 10l-10 10 1.4 1.4 8.6-8.6 8.6 8.6L26 20z"></path>
  </svg>
);

const Footer = () => {
  // Initialize isMobile to a default value (e.g., false).
  // It will be correctly set on the client-side by useEffect.
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null); // Stores the index of the open accordion

  // Footer data based on provided images
  const footerSections = [
    {
      title: 'Admission & Programs', // Corrected typo from Amission
      links: [
        { text: 'Higher National Diploma (HND)', url: './Admission/HND' },
        { text: 'Bachelors Programs', url: './Admission/BSc' },
        { text: 'Masters Programs', url: './Admission/MSc' },
        { text: 'Diploma & Certifications', url: './Admission/Certification' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Past HND Papers & Answers', url: '#' },
        { text: 'Gallery', url: '#' },
        { text: 'Students Handbook', url: '#' },
        { text: 'Academic Calender', url: '#' },
        { text: 'Our WhatsApp Communities', url: '#' },
        { text: 'Projects & Research', url: '#' },
      ],
    },
    {
      title: 'About Adara Institute',
      links: [
        { text: 'Institution Overview', url: '#' },
        { text: 'Mission', url: '#' },
        { text: 'Vision', url: '#' },
        { text: 'News & Events', url: '#' },
        { text: 'Career at the Adara Institute', url: '#' },
      ],
    },
    {
      title: 'Connect with Us',
      links: [
        { text: 'Contact Adara Institue', url: '#' }, // Typo: Institue -> Institute
        { text: 'Investor Relations', url: '#' },
        { text: 'Partner with Us', url: '#' },
        { text: 'Location', url: '#' },
      ],
    },
  ];

  // Effect to handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      if (!mobileView) {
        setOpenAccordion(null); // Close accordions on desktop view
      }
    };

    // Set the initial state correctly on the client-side
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close if already open
    } else {
      setOpenAccordion(index); // Open the clicked section
    }
  };

  return (
    <footer className="cds-footer">
      <div className="cds-footer-container">
        {/* Upper section: Brand and Links */}
        <div className="cds-footer-main">
          <div className="cds-footer-brand-section">
            <Link href="/" className="cds-footer-logo-link" aria-label="Adara Institute Home">
              {/* For Next.js Image component, if 'public' is at your project root,
                the src path should typically start with just '/', e.g., "/images/logogrey100.png".
                Verify the path to your image.
              */}
              <Image
                src="/images/logogrey100.png" // Adjusted path assuming 'public/images/...'
                alt="Adara Institute Official Logo"
                width={88}
                height={88}
              />
            </Link>
            <h4>
              Adara Institute
            </h4>
          </div>

          <div className="cds-footer-links-section">
            {footerSections.map((section, index) => (
              <div key={section.title} className="cds-footer-links-group">
                {isMobile ? (
                  <>
                    <button
                      type="button"
                      className="cds-footer-accordion-trigger"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={openAccordion === index}
                      aria-controls={`footer-accordion-content-${index}`}
                    >
                      <h3 className="cds-footer-links-title-mobile">{section.title}</h3>
                      {openAccordion === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <ul
                      id={`footer-accordion-content-${index}`}
                      className={`cds-footer-links-list ${openAccordion === index ? 'open' : ''}`}
                      hidden={!(openAccordion === index)} // Controls visibility for accessibility
                    >
                      {section.links.map((link) => (
                        <li key={link.text} className="cds-footer-link-item">
                          <a href={link.url} className="cds-footer-link">{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="cds-footer-links-title-desktop">{section.title}</h3>
                    <ul className="cds-footer-links-list">
                      {section.links.map((link) => (
                        <li key={link.text} className="cds-footer-link-item">
                          <a href={link.url} className="cds-footer-link">{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lower section: Legal, Locale */}
        <div className="cds-footer-legal-section">
          <div className="cds-footer-legal-primary">
            <p className="cds-footer-copyright">&copy; Copyright <b>Adara Institute</b>. {new Date().getFullYear()} <br /> Developed by Bluezoft.</p>
            <ul className="cds-footer-legal-links">
              <li><a href="#" className="cds-footer-legal-link">Privacy Policy</a></li>
              <li><a href="#" className="cds-footer-legal-link">Terms and Conditions</a></li>
              <li><a href="#" className="cds-footer-legal-link">Cookie Preferences</a></li>
            </ul>
          </div>
          <div className="cds-footer-locale-selector">
            <button type="button" className="cds-footer-locale-button">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true" className="cds-footer-locale-icon">
                <path d="M16,2A13.94,13.94,0,0,0,2,16H2a13.94,13.94,0,0,0,14,14h0a13.94,13.94,0,0,0,14-14h0A13.94,13.94,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><path d="M16,4A11.9993,11.9993,0,0,0,4,16c0,5.1133,3.2139,9.4688,7.6934,11.2559L12.58,25.11A9.9678,9.9678,0,0,1,6,16a9.9632,9.9632,0,0,1,9.3262-9.9668l.6455-1.89A12.0158,12.0158,0,0,0,16,4Zm-.6338.0332L14.72,5.9238A9.9632,9.9632,0,0,1,24.6865,15.5H26A12.0037,12.0037,0,0,0,15.3662,4.0332Z"></path>
              </svg>
              Africa - Cameroon
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
