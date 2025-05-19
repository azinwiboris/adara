import React from 'react';
import {
  Accordion,
  AccordionItem,
  unstable_Heading,  // Or use standard h tags styled with Carbon types
  unstable_Section, // Optional for semantic grouping
} from '@carbon/react'; // Or 'carbon-components-react' for v10
import './_faq-section.scss'; // We'll create this SCSS file

// Sample FAQ data - replace with your actual FAQs
const faqData = [
  {
    id: 'faq-1',
    question: 'What is the Carbon Design System?',
    answer:
      'The Carbon Design System is IBM open-source design system for products and digital experiences. It provides guidelines, components, and tools to help teams create consistent and high-quality user interfaces.',
  },
  {
    id: 'faq-2',
    question: 'How can I contribute to Carbon?',
    answer:
      'Carbon is an open-source project, and contributions are welcome! You can contribute by reporting bugs, suggesting new features, submitting pull requests with code improvements, or improving documentation. Check the official GitHub repository for contribution guidelines.',
  },
  {
    id: 'faq-3',
    question: 'Where can I find documentation for Carbon components?',
    answer: (
      <>
        Official documentation for Carbon components, usage guidelines, and design
        principles can be found on the{' '}
        <a
          href="https://carbondesignsystem.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carbon Design System website
        </a>
        . It includes interactive examples and code snippets.
      </>
    ),
  },
  {
    id: 'faq-4',
    question: 'Is Carbon accessible?',
    answer:
      'Yes, accessibility is a core principle of the Carbon Design System. Components are designed and built to meet WCAG (Web Content Accessibility Guidelines) standards, ensuring that products built with Carbon are usable by people with a wide range of abilities.',
  },
];

const FaqSection = () => {
  return (
    <unstable_Section className="faq-section cds--grid">
      <div className="cds--row">
        <div className="cds--col-lg-8 cds--col-md-6 cds--col-sm-4"> {/* Adjust column spans as needed */}
          <unstable_Heading className="faq-section__heading">
            Frequently Asked Questions
          </unstable_Heading>
          <Accordion className="faq-section__accordion">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </unstable_Section>
  );
};

export default FaqSection;