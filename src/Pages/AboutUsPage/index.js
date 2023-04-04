import React from "react";
import BaseLayout from "../../components/button/BaseLayout/BaseLayout";
import FeaturesSection from "../../components/FeaturesSection";
import humanIMG from "../../assets/Images/humanIMG.svg";
import icon from "../../assets/Images/Featured icon (1).svg";
import { Section1, Section2 } from "./AboutUsStyle";

function Index() {
  return (
    <BaseLayout showLearnMore>
      <Section1>
        <img src={humanIMG} alt="humanIMG" />
        <p>
          <h1>About Monerce</h1>
          <div>
            <h2>
              Monerce is a forward-thinking platfomr that is committed to
              revolutionizing the way people transact and do business,
              particularly in areas with limited internet connectivity. We
              understand that the internet can be unreliable and inaccessible in
              some parts of the world, which is why we developed a unique
              online-to-offline (O2O) commerce platform.
            </h2>
            <h2>
              Our platform utilizes text-based messaging and USSD-based banking
              apps, allowing users to complete transactions with ease, even
              without the use of the internet. This makes it convenient for
              people in remote areas to transact and do business without the
              need for a stable internet connection.
            </h2>
            <h2>
              We take pride in making commerce accessible to everyone,
              regardless of their location or internet connectivity. Our
              platform is designed to be user-friendly, secure, and efficient.
              We are constantly working on improving our services and expanding
              our reach to ensure that more people can benefit from our
              platform.
            </h2>
            <h2>
              At Monerce, we believe that technology should serve people, not
              the other way around. We strive to make our platform affordable,
              accessible, and easy to use, so that everyone can enjoy the
              benefits of online commerce.
            </h2>
          </div>
        </p>
      </Section1>
      <Section2>
        <ul>
          <li>
            <img src={icon} alt="icon" />
            <h1>Mission</h1>
            <h2>
              "Our mission is to enable seamless commerce for all, using
              innovative technology to connect businesses and customers via
              messaging services, without requiring mobile apps."
            </h2>
          </li>
          <li>
            <img src={icon} alt="icon" />
            <h1>Mission</h1>
            <h2>
              "Our mission is to enable seamless commerce for all, using
              innovative technology to connect businesses and customers via
              messaging services, without requiring mobile apps."
            </h2>
          </li>
          <li>
            <img src={icon} alt="icon" />
            <h1>Mission</h1>
            <h2>
              "Our mission is to enable seamless commerce for all, using
              innovative technology to connect businesses and customers via
              messaging services, without requiring mobile apps."
            </h2>
          </li>
        </ul>
      </Section2>
      <FeaturesSection />
    </BaseLayout>
  );
}

export default Index;
