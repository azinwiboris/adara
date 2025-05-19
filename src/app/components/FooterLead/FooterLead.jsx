import React from 'react';
import { Theme } from '@carbon/react';
import { Button } from '@carbon/react'; // Or 'carbon-components-react'
import { ArrowRight, Chat } from '@carbon/icons-react'; // Or '@carbon/icons-react'
import './_footer-lead.scss'; // We'll create this SCSS file

const FooterLead = () => {
  return (
    <Theme theme="g100">
    <div className="cds--grid next-step-container">
      <div className="cds--row">
        <div className="cds--col-lg-8 cds--col-md-6 cds--col-sm-4">
          <h2 className="next-step-heading">Take the next step</h2>
          <p className="next-step-description">
            Pre-Register today or Join our WhatsApp Community to 
            receive Curated updates about the Adara Institute
          </p>
          <div className="next-step-buttons">
            <Button
              className="next-step-button"
              kind="primary"
              renderIcon={ArrowRight}
              iconDescription="Subscribe"
              href="#" // Replace with actual link
              onClick={(e) => { e.preventDefault(); console.log('Subscribe clicked'); }} // Replace with actual handler
            >
              Apply Now
            </Button>
            <Button
              className="next-step-button"
              kind="tertiary" // Or "secondary" depending on exact Carbon theme styling desired
              renderIcon={Chat}
              iconDescription="Contact us"
              href="#" // Replace with actual link
              onClick={(e) => { e.preventDefault(); console.log('Contact us clicked'); }} // Replace with actual handler
            >
              Join Our Whatsapp Community
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Theme>
  );
};

export default FooterLead;