import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#bbcba9] py-10 px-5 md:px-20 my-10 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in 2020, our company started with a simple mission: to
              provide high-quality, sustainable products that make life better
              for our customers. What began as a small startup has grown into a
              thriving business, thanks to our commitment to innovation,
              excellence, and customer satisfaction. We are proud of our journey
              and excited about the future as we continue to grow and evolve.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to deliver products that not only meet the needs of
              our customers but also contribute positively to the environment
              and society. We believe in the power of sustainable practices, and
              we strive to create solutions that are both innovative and
              responsible. We are committed to making a difference, one product
              at a time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <p className="text-lg leading-relaxed">
              At the core of our company are the values that guide everything we
              do:
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>
                <strong>Integrity:</strong> We believe in doing the right thing,
                even when no one is watching.
              </li>
              <li>
                <strong>Innovation:</strong> We are constantly seeking new ways
                to improve and innovate.
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to practices
                that protect our planet.
              </li>
              <li>
                <strong>Customer-Centricity:</strong> Our customers are at the
                heart of everything we do.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg leading-relaxed">
              Our team is made up of passionate, dedicated individuals who are
              experts in their fields. We believe that our success is a direct
              result of the diverse skills, backgrounds, and perspectives that
              our team members bring to the table. Together, we work towards a
              common goal: to make a positive impact on the world through our
              products and services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
            <p className="text-lg leading-relaxed">
              We are always looking for talented, motivated individuals to join
              our team. If you are passionate about making a difference and want
              to be part of an innovative, forward-thinking company, we would
              love to hear from you. Explore our career opportunities and find
              out how you can contribute to our mission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
