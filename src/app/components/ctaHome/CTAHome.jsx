// Add this line at the top for Next.js App Router
"use client";
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import C4DCTABlock from '@carbon/ibmdotcom-web-components/es/components-react/cta-block/cta-block';
import C4DCTABlockItemRow from '@carbon/ibmdotcom-web-components/es/components-react/cta-block/cta-block-item-row';
import C4DCTABlockItem from '@carbon/ibmdotcom-web-components/es/components-react/cta-block/cta-block-item';
import C4DContentItemHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading';
import C4DContentItemCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy';
import C4DTextCTA from '@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta';
import C4DButtonGroup from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group';
import C4DButtonGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item';
import C4DContentBlockCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy';
import C4DContentBlockHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading';

function CTAHome() {
  const primaryButtonRef = useRef(null);
  useEffect(() => {
    if (primaryButtonRef.current) {
      console.log('Primary Button Element:', primaryButtonRef.current);
    }
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <C4DCTABlock>
      <C4DContentBlockHeading>Welcome to the Official Website of the Adara Institute</C4DContentBlockHeading>
      <C4DContentBlockCopy>Pre-Registrations are Ongoing</C4DContentBlockCopy>

      <C4DButtonGroup slot="action">
        <Link href = "/applynow">
        <C4DButtonGroupItem  icon-placement="right">
          Apply Now
        </C4DButtonGroupItem>
        </Link>
        {/* 3. Attach the ref and correct prop to 'href' */}
        <C4DButtonGroupItem ref={primaryButtonRef} href="https://example.com">
          Primary button
        </C4DButtonGroupItem>
      </C4DButtonGroup>

      <C4DCTABlockItemRow>
        <C4DCTABlockItem>
          <C4DContentItemHeading>Get connected</C4DContentItemHeading>
          <C4DContentItemCopy>
            IBM DevOps partners have a wide range of expertise. Find one to
            build that right solution for you.
          </C4DContentItemCopy>
          <C4DTextCTA
            slot="footer"
            cta-type="local"
            icon-placement="right"
            href="https://example.com"> {/* Corrected from example.com to https://example.com for consistency */}
            Find a partner
          </C4DTextCTA>
        </C4DCTABlockItem>

        <C4DCTABlockItem>
          <C4DContentItemHeading>Learn how</C4DContentItemHeading>
          <C4DContentItemCopy>
            Dig into more self-directed learning about DevOps methodologies.
          </C4DContentItemCopy>
          <C4DTextCTA
            slot="footer"
            cta-type="local"
            icon-placement="right"
            href="https://example.com"> {/* Corrected from example.com to https://example.com */}
            Browse tutorials
          </C4DTextCTA>
        </C4DCTABlockItem>

        <C4DCTABlockItem>
          <C4DContentItemHeading>Learn how</C4DContentItemHeading>
          <C4DContentItemCopy>
            Dig into more self-directed learning about DevOps methodologies.
          </C4DContentItemCopy>
          <C4DTextCTA
            slot="footer"
            cta-type="local"
            icon-placement="right"
            href="https://example.com"> {/* Corrected from example.com to https://example.com */}
            Browse tutorials
          </C4DTextCTA>
        </C4DCTABlockItem>
      </C4DCTABlockItemRow>
    </C4DCTABlock>
  );
}
export default CTAHome;