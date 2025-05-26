
'use client'
import { Theme } from '@carbon/react';
import C4DHorizontalRule from '@carbon/ibmdotcom-web-components/es/components-react/horizontal-rule/horizontal-rule';
import './_apply-now.scss';
import FormContactUs from '@/components/FormContactUs/FormContactUs';
import ContactUsContentBlock from '@/components/ContactUsContentBlock/ContactUSContentBlock'
import FooterLead from '@/components/FooterLead/FooterLead';
import ContactContent from '@/components/ContactContent/ContactContent';
const ContactUsPageContent = () => {
  // 

  return (
  <>
  <ContactContent />
    <ContactUsContentBlock />
    
    <div className="form-container">
    <FormContactUs />
    <FooterLead />
    </div>
  
  </>
  );
};

export default ContactUsPageContent;