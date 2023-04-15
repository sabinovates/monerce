import React from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import { Section1, Section2, Section3 } from "./LandingPageStyle";
import content1 from "../../assets/Images/Contents.svg";
import content2 from "../../assets/Images/Image.svg";
import content3 from "../../assets/Images/Content.svg";
import FeaturesSection from "../../components/FeaturesSection";

function Index() {
  return (
    <BaseLayout>
      <Section1>
        <div>
          <h1>Transforming Online-to-Offline Commerce with Monerce</h1>
          <p>
            Effortless transactions through text-based messaging and USSD-based
            banking apps.
          </p>
          <nav>
            <a href="/#">Get started</a>
          </nav>
        </div>
        <div>
          <img src={content1} alt="section1IMG" />
        </div>
      </Section1>
      <Section2>
        <div>
          <img src={content2} alt="connectIMG" />
        </div>
        <div>
          <h1>About Monerce</h1>
          <p>
            Monerce is an Online-To-Offline (O2O) commerce digital solution that
            enable people to buy and sell goods and services via existing text
            based messaging services using integration with USSD based services.
          </p>
          <p>
            <span>No apps download is needed.</span> Merchant can Accept payment
            orders from customers using existing platforms (SMS,
            Facebook,Telegram, Whatsapp). We are created an Artificial
            Intelligence powered chatbot which leverages USSD to provide
            messaging based order management and payment processing services..
          </p>
          <nav>
            <a href="/#">Read More</a>
          </nav>
        </div>
      </Section2>
      <Section3>
        <div>
          <p>
            <h1>
              Simplify Your Experience: Clear and Concise Usage Instructions.
            </h1>
            <h2>
              Monerce generates unique codes for vendors and their products to
              create order IDs, enabling customers to make purchases quickly and
              easily. Simply enter the codes into the messaging platform and an
              automated response will guide you through the buying process.
            </h2>
            <nav>
              <a href="/#">Get started</a>
            </nav>
          </p>
          <img src={content3} alt="phoneIMG" />
        </div>
      </Section3>
      <FeaturesSection />
    </BaseLayout>
  );
}

export default Index;
