import C4DLeadspaceBlock from '@carbon/ibmdotcom-web-components/es/components-react/leadspace-block/leadspace-block.js';
import C4DLeadspaceHeading from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-heading.js';
import C4DLeadspaceBlockContent from '@carbon/ibmdotcom-web-components/es/components-react/leadspace-block/leadspace-block-content.js';
import C4DContentBlockCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy.js';
import C4DLeadspaceBlockMedia from '@carbon/ibmdotcom-web-components/es/components-react/leadspace-block/leadspace-block-media.js';
import C4DImage from '@carbon/ibmdotcom-web-components/es/components-react/image/image.js';
import C4DImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item.js';
import C4DLinkList from '@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list.js';
import C4DLinkListHeading from '@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-heading.js';
import C4DLinkListItem from '@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-item.js';
import C4DButton from '@carbon/ibmdotcom-web-components/es/components-react/button/button.js';
import { ArrowRight, Download} from '@carbon/icons-react';

function ContactUsLeadSpace() {
  return (
    <C4DLeadspaceBlock border>
      <C4DLeadspaceHeading highlight="Adara Institute" type-style="fluid-heading-05">About the Adara Institute</C4DLeadspaceHeading>
      <C4DLeadspaceBlockContent>
        <C4DContentBlockCopy>
        <p>
        Adara Institute is committed to delivering high-quality and accessible education through 
        our strategic partnerships with leading institutions around the world. We are Guided by 
        the philosophy of <em>"Education for a Changing World."</em>
        </p>
        <br />
        </C4DContentBlockCopy>
        <C4DContentBlockCopy>
        <h1>Our Mission</h1>
        <p>
        Our Mission is to provide Individuals with the right knowledge and skills needed to solve Cameroon, Africa and the 
        World's Greatest Challenges. Guided by a commitment to excellence, innovation, and global partnerships, 
        we strive to equip 35,000 young Cameroonians with the knowledge and entrepreneurial skills to build and 
        lead over 500 unicorn businesses that address Cameroon and Africa's most pressing challenges before 2035.
        </p>
        <br />
        </C4DContentBlockCopy>
        <C4DContentBlockCopy>
        <h1>Our Vision</h1>
        <p>
        Our vision is to become Africa’s leading hub for transformative education and innovation, shaping a new 
        generation of visionary leaders and entrepreneurs. We envision a future where empowered young Cameroonians drive sustainable development by creating globally 
        competitive businesses that solve the continent’s greatest challenges and redefine its economic landscape.
        </p>
        <br />
        </C4DContentBlockCopy>
        <C4DLeadspaceBlockMedia>
          <C4DImage
            alt="Vibrant upcoming African Leaders"
            default-src="/images/aboutUsImages/aboutImagelg.jpg"
            lightbox={true}
            heading="Our Students Life.">
              
            <C4DImageItem
              media="(min-width: 672px)"
              srcset="/images/aboutUsImages/aboutImagelg.jpg"
              lightbox={true}
            />
            <C4DImageItem
              media="(min-width: 400px)"
              srcset="/images/aboutUsImages/aboutImagelg.jpg"
              lightbox={true}
            />
            <C4DImageItem
              media="(min-width: 320px)"
              srcset="/images/aboutUsImages/aboutImagelg.jpg"
              lightbox={true}
            />
          </C4DImage>
        </C4DLeadspaceBlockMedia>

        <C4DLinkList type="end">
          <C4DLinkListHeading>Learn More About</C4DLinkListHeading>
          <C4DLinkListItem href="https://example.com">
          Our Students Life
             <ArrowRight slot="icon" />
          </C4DLinkListItem>
          <C4DLinkListItem href="https://example.com">
          Our Academic Programs <ArrowRight slot="icon" />
          </C4DLinkListItem>
          <C4DLinkListItem href="https://example.com">
            Download our Students Guide <Download slot="icon" />
          </C4DLinkListItem>
        </C4DLinkList>
        <C4DButton cta-type="local" href="/Contactus">
          Talk to Us
        </C4DButton>
      </C4DLeadspaceBlockContent>
    </C4DLeadspaceBlock>
  );
}

export default ContactUsLeadSpace;