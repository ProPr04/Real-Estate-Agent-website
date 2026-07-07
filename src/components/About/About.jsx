import AboutSection from "./AboutSection";

import localArea from "../../assets/images/local-area.webp";
import clientFirst from "../../assets/images/client-first.webp";

const About = () => {
  return (
    <>
      <AboutSection
        tag="Local Expertise"
        title="Deep Knowledge of Every Neighborhood We Serve"
        description="Our years of experience in the local real estate market allow us to provide valuable insights that go beyond property listings. From understanding neighborhood trends and school districts to identifying investment opportunities, we help you make informed decisions with confidence. Whether you're buying your first home or expanding your portfolio, our local expertise gives you a competitive advantage."
        image={localArea}
        buttonText="Explore Areas"
      />

      <AboutSection
        reverse
        tag="Client First"
        title="Your Goals Always Come Before The Transaction"
        description="We believe real estate is built on trust, transparency, and lasting relationships. Every recommendation we make is based on your unique needs, budget, and long-term objectives. From the initial consultation to closing day and beyond, our dedicated team is committed to providing honest guidance, clear communication, and personalized support at every step."
        image={clientFirst}
        buttonText="Why Choose Us"
      />
    </>
  );
};

export default About;