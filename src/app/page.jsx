'use client'
import CTAHome from '../app/components/ctaHome/CTAHome';
import FooterLead from '../app/components/FooterLead/FooterLead';
import FaqSection from '../app/components/FaqSection/FaqSection';
function HomePage(){
  return(
    <>
    <CTAHome />
    <FaqSection />
    <FooterLead />
    </>
  );
}
export default HomePage;