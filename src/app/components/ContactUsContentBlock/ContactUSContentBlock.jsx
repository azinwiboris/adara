import C4DCardGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item';
import C4DCardHeading from '@carbon/ibmdotcom-web-components/es/components-react/card/card-heading';
import C4DCardCTAFooter from '@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer';
import C4DContentBlockCards from '@carbon/ibmdotcom-web-components/es/components-react/content-block-cards/content-block-cards';
import C4DContentBlockHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading';
import C4DCardGroup from '@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group';
import {ArrowRight,Email,Phone} from '@carbon/icons-react';

function ContactUsContentBlock() {
  return (
    <div>
    <C4DContentBlockHeading>
    Contact Adara Institute
      </C4DContentBlockHeading>
        <p>
           We are here to help and answer any questions you might have. We look forward to hearing from you. 
           
        </p>
        <h4>Get in Touch</h4>
    <C4DContentBlockCards>
      <C4DCardGroup>
      <C4DCardGroupItem>
          <C4DCardHeading>WhatsApp (phone):</C4DCardHeading>
          
            General:+237 682 360 552
            <br />
            Admissions: +237 682 360 552
          
        </C4DCardGroupItem>

        <C4DCardGroupItem>
          <C4DCardHeading>Email:</C4DCardHeading>
          
            General: info@adarainstitute.com
            <br/>
           Admissions:  admissions@adarainstitute.com
          
          
        </C4DCardGroupItem>
      
        <C4DCardGroupItem>
          <C4DCardHeading>Address (location):</C4DCardHeading>
          Rond-point Razel - Etoudi (Tsinga)
          <br />
          Yaounde, Centre Region, Cameroon
          
        </C4DCardGroupItem>
        <C4DCardGroupItem>
          <C4DCardHeading>Operating Hours:</C4DCardHeading>
          Monday - Friday: 8:00 AM - 8:00
          <br /> 
          Saturday: 9:00 AM - 5:00 PM
          <br />
          Sunday: Closed
        </C4DCardGroupItem>
      </C4DCardGroup>
    </C4DContentBlockCards>
    </div>
  );
}

export default ContactUsContentBlock;