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
            <h1>For Customers</h1>
            <h2>$2</h2>
            <h3>convenience fee</h3>
          </li>
          <li>
            <h1>For Customers</h1>
            <h2>$2</h2>
            <h3>convenience fee</h3>
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
              <h1>Free automatic settlement same day</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Free automatic settlement same day</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Free automatic settlement same day</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
            <li>
              <h1>Free automatic settlement same day</h1>
              <img src={checkCircle} alt="arrowIcon" />
            </li>
          </ul>
        </div>
      </Section3>
    </BaseLayout>
  );
}

export default Index;
