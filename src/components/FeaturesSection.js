import React from "react";
import { Section4 } from "../Pages/landingPage/LandingPageStyle";
import { data } from "../data/landingPageFeaturesData";
function FeaturesSection() {
  return (
    <Section4>
      <p>
        <h1>
          We're the best choice for everyone because we prioritize excellent
          service.
        </h1>
        <h2>
          Here are the things you can accomplish with our value-added product:
        </h2>
      </p>
      <ul>
        {data.map((d) => (
          <li key={d.key}>
            <img src={d.icon} alt="icon" />
            <p>
              <h1>{d.title}</h1>
              <h2>{d.content}</h2>
            </p>
          </li>
        ))}
      </ul>
    </Section4>
  );
}

export default FeaturesSection;
