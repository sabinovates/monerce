import React from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import checkCircle from "../../assets/Images/check-circle.svg";
import { Section1, Section2, Section3 } from "./PricingStyles";

function Index() {
  return (
    <BaseLayout>
      <Section1>
        <h1>Pricing</h1>
        <h2>Find the perfect price point for your needs</h2>
      </Section1>
      <Section2>
        <ul>
          <li>
            <h1>For Customers</h1>
            <h2>$2</h2>
            <h3>convenience fee</h3>
          </li>
          <li>
            <h1>For merchants</h1>
            <h2>3%</h2>
            <h3>convenience fee</h3>
          </li>
          <li>
            <h1>Customised</h1>
            <h3>
              Design a package for your business. Available for business with
              daily large volume.
            </h3>
          </li>
        </ul>
      </Section2>
      <Section3>
        <div>
          <main>
            <h1>If customers pays</h1>
            <input placeholder="$100" />
            <p>
              <h2>You’ll get</h2>
              <h2>Monerce Fees (3%)</h2>
            </p>
            <p>
              <h3>$97</h3>
              <h3>$3</h3>
            </p>
          </main>
          <ul>
            <li>
              <h1>Free automatic settlement same day</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Volume discounts available</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>No hidden fees or charges</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Zero integration fee</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Zero maintenance fee</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
          </ul>
        </div>
      </Section3>
    </BaseLayout>
  );
}

export default Index;
