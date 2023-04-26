import React from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import { ContactUlStyle } from "./contactUsStyles";
import googleMap from "../../assets/Images/_Google maps mockup.png";

function ContactUs() {
  return (
    <BaseLayout>
      <ContactUlStyle>
        <main>
          <p>
            <ul>
              <li>
                <h1>Contact us</h1>
                <h3>Our friendly team would love to hear from you.</h3>
              </li>
              <li>
                <h2>Call us:</h2>
                <h3>+231880538190, +231770538190</h3>
              </li>
              <li>
                <h2>Email us:</h2>
                <h3>support@monerce.com</h3>
              </li>
              <li>
                <h2>Visit us:</h2>
                <h3>10th Street, Coleman Ave, Sinkor, Monrovia, Liberia</h3>
              </li>
            </ul>
          </p>
          <div>
            <img src={googleMap} alt="googleMap" />
          </div>
        </main>
      </ContactUlStyle>
    </BaseLayout>
  );
}

export default ContactUs;
