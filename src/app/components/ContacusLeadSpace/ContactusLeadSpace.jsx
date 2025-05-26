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
        Adara Institute is committed to delivering high-quality, accessible education through 
        our commitment to excellence, innovation, and strategic partnerships with 
        leading institutions around the world. Guided by the philosophy of <em>"Education for a Changing World,"</em> we aim to empower individuals with 
        the knowledge and skills needed to thrive in a rapidly evolving global landscape.
        </p>
        <br />
        </C4DContentBlockCopy>
        <C4DLeadspaceHeading highlight="Mission" type-style="fluid-heading-05">OUr Mission</C4DLeadspaceHeading>
        <C4DContentBlockCopy>
          <p>
          
        </p>
        <br />
        </C4DContentBlockCopy>
        <C4DLeadspaceBlockMedia>
          <C4DImage
            alt="Vibrant upcoming African Leaders"
            default-src="https://fpoimg.com/672x378?text=16:9&amp;bg_color=ee5396&amp;text_color=161616"
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
            <C4DImageItem
              media="(min-width: 672px)"
              srcset="https://fpoimg.com/672x378?text=16:9&amp;bg_color=ee5396&amp;text_color=161616"
            />
            <C4DImageItem
              media="(min-width: 400px)"
              srcset="https://fpoimg.com/400x225?text=16:9&amp;bg_color=ee5396&amp;text_color=161616"
            />
            <C4DImageItem
              media="(min-width: 320px)"
              srcset="https://fpoimg.com/320x180?text=16:9&amp;bg_color=ee5396&amp;text_color=161616"
            />
          </C4DImage>
        </C4DLeadspaceBlockMedia>
        <C4DLinkList type="end">
          <C4DLinkListHeading>Contact Us to Learn More</C4DLinkListHeading>
          <C4DLinkListItem href="https://example.com">
             <ArrowRight slot="icon" />
          </C4DLinkListItem>
          <C4DLinkListItem href="https://example.com">
            UrbanCode <ArrowRight slot="icon" />
          </C4DLinkListItem>
          <C4DLinkListItem href="https://example.com">
            View all products <Download slot="icon" />
          </C4DLinkListItem>
        </C4DLinkList>
        <C4DButton cta-type="local" href="https://example.com">
          Contact sales
        </C4DButton>
      </C4DLeadspaceBlockContent>
    </C4DLeadspaceBlock>
  );
}

export default ContactUsLeadSpace;