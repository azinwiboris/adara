'use client'

import ContactUsLeadSpace from '@/components/ContacusLeadSpace/ContactusLeadSpace';
// Placeholder for Carbon icons if needed for specific sections, e.g., CheckmarkOutline for values
import { CheckmarkOutline } from '@carbon/icons-react';

const AboutUsPageContent = () => {
  return (
    <div className="about-us-page">
      <ContactUsLeadSpace />
      <section className="cds--grid cds--grid--full-width about-us-page__section about-us-page__hero">
        <div className="cds--row">
          <div className="cds--col-lg-10 cds--col-md-6 cds--col-sm-4">
            <h1 className="cds--type-heading-05 about-us-page__main-title">
              About Adara Institute
            </h1>
            <p className="cds--type-body-long-01 about-us-page__intro">
              Adara Institute is a premier institution dedicated to fostering academic excellence, driving innovation,
              and empowering students to become leaders and change-makers in their chosen fields. We are committed
              to providing a transformative educational experience that prepares individuals for success in a dynamic
              global landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Mission and Vision */}
      <section className="cds--grid cds--grid--full-width about-us-page__section">
        <div className="cds--row about-us-page__mission-vision">
          <div className="cds--col-lg-8 cds--col-md-4 cds--col-sm-4 about-us-page__mission">
            <h2 className="cds--type-heading-03">Our Mission</h2>
            <p className="cds--type-body-long-01">
              To deliver high-quality, accessible, and innovative educational programs that equip students
              with the knowledge, skills, and ethical frameworks necessary to thrive professionally and
              contribute meaningfully to society.
            </p>
          </div>
          <div className="cds--col-lg-8 cds--col-md-4 cds--col-sm-4 about-us-page__vision">
            <h2 className="cds--type-heading-03">Our Vision</h2>
            <p className="cds--type-body-long-01">
              To be a leading center of learning and research, recognized for our commitment to academic
              rigor, technological advancement, and the holistic development of our students, shaping a
              brighter future for our communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Core Values */}
      <section className="cds--grid cds--grid--full-width about-us-page__section">
        <div className="cds--row">
          <div className="cds--col-lg-16 cds--col-md-8 cds--col-sm-4">
            <h2 className="cds--type-heading-04 about-us-page__values-title">Our Core Values</h2>
            <ul className="about-us-page__values-list cds--list--unordered">
              <li className="cds--list__item">
                {/* <CheckmarkOutline size={20} className="about-us-page__value-icon" /> */}
                <span className="about-us-page__value-icon cds--type-heading-01">&#x2713;</span> {/* Simple checkmark */}
                <span className="about-us-page__value-text"><strong>Excellence:</strong> Striving for the highest standards in teaching, research, and service.</span>
              </li>
              <li className="cds--list__item">
                <span className="about-us-page__value-icon cds--type-heading-01">&#x2713;</span>
                <span className="about-us-page__value-text"><strong>Integrity:</strong> Upholding the principles of honesty, ethics, and accountability in all our endeavors.</span>
              </li>
              <li className="cds--list__item">
                <span className="about-us-page__value-icon cds--type-heading-01">&#x2713;</span>
                <span className="about-us-page__value-text"><strong>Innovation:</strong> Fostering a culture of creativity, critical thinking, and adaptation to new technologies and ideas.</span>
              </li>
              <li className="cds--list__item">
                <span className="about-us-page__value-icon cds--type-heading-01">&#x2713;</span>
                <span className="about-us-page__value-text"><strong>Student-Centricity:</strong> Placing the needs and success of our students at the forefront of all our decisions and actions.</span>
              </li>
              <li className="cds--list__item">
                <span className="about-us-page__value-icon cds--type-heading-01">&#x2713;</span>
                <span className="about-us-page__value-text"><strong>Community & Collaboration:</strong> Building a supportive and inclusive community, and fostering partnerships that enhance learning and societal impact.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Adara (Optional) */}
      <section className="cds--grid cds--grid--full-width about-us-page__section about-us-page__why-choose">
         <div className="cds--row">
          <div className="cds--col-lg-16 cds--col-md-8 cds--col-sm-4">
            <h2 className="cds--type-heading-04">Why Choose Adara Institute?</h2>
          </div>
        </div>
        <div className="cds--row">
            <div className="cds--col-lg-5 cds--col-md-4 cds--col-sm-4 about-us-page__feature-card">
                <h3 className="cds--type-heading-02">Industry-Relevant Curriculum</h3>
                <p className="cds--type-body-compact-01">Our programs are designed in collaboration with industry experts to ensure graduates are job-ready.</p>
            </div>
            <div className="cds--col-lg-5 cds--col-md-4 cds--col-sm-4 about-us-page__feature-card">
                <h3 className="cds--type-heading-02">Experienced Faculty</h3>
                <p className="cds--type-body-compact-01">Learn from dedicated professionals and academics with real-world experience and a passion for teaching.</p>
            </div>
            <div className="cds--col-lg-5 cds--col-md-4 cds--col-sm-4 about-us-page__feature-card">
                <h3 className="cds--type-heading-02">State-of-the-Art Facilities</h3>
                <p className="cds--type-body-compact-01">Access modern labs, libraries, and learning environments designed to support your academic journey.</p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPageContent;