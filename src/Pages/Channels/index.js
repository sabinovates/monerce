import React, { useRef } from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import CompLogoBigScreen from "../../assets/Images/CompLogoBigScreen.svg";
import CompLogoSmallScreen from "../../assets/Images/CompLogoSmallScreen.svg";
import MessageIcon from "../../assets/Images/messages.svg";
import ArrowIcon from "../../assets/Images/ArrowIcon.svg";
import { Section1, Section2 } from "./ChannelsStyles";
import { data } from "../../data/channelsData";

function Index() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <BaseLayout>
      <Section1>
        <p>
          <h1>
            Your Trusted and Accessible USSD Payment Solution with No Hidden
            Charges.
          </h1>
          <h2>
            At Monerce, we offers USSD payment options that enable users to make
            and receive payments through our various channels listed below. We
            provide a familiar and trusted payment option using Mobile Money
            Wallet Technology. With a focus on user accessibility and
            convenience, Monerce is committed to providing payment processing
            solutions that work for everyone, regardless of their level of
            technological expertise. Monerce offers competitive pricing with no
            setup fees, monthly fees, or hidden charges.
          </h2>
        </p>
        {windowSize.current[0] > 990 ? (
          <img src={CompLogoBigScreen} alt="companyIMG" />
        ) : (
          <img src={CompLogoSmallScreen} alt="companyIMG" />
        )}
      </Section1>
      <Section2>
        <p>
          <h1>Our marketing outlets</h1>
          <h2>
            You can initiate a conversation by selecting any of these channels.
          </h2>
        </p>
        <ul>
          {data.map((d) => (
            <li key={d.key}>
              <img src={d.icon} alt="icon" />
              <div>
                <h2>{d.title}</h2>
                <h3>{d.content}</h3>
                {d.link ? (
                  <nav>
                    <a href="/#">
                      <h1>Try Now</h1>
                      <img src={ArrowIcon} alt="arrowIcon" />
                    </a>
                  </nav>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Section2>
    </BaseLayout>
  );
}

export default Index;
