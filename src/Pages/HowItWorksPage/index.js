import React from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import { Section1, Section2 } from "./HowItWorksStyles";
import Content1 from "../../assets/Images/Content1.svg";
import frame1 from "../../assets/Images/Frame1.svg";

function Index() {
  return (
    <BaseLayout>
      <Section1>
        <div>
          <h1>Easy-to-follow instructions on usage.</h1>
          <p>
            <h2>
              Introducing our Online-To-Offline (O2O) commerce solution that
              enables people to buy and sell goods and services via messaging
              services and banking apps. No need to download an app.
            </h2>
            <h2>
              Customers can chat with businesses via SMS and complete
              transactions by texting the payment amount to a smart code number
              assigned to the business, regardless of whether they have a
              smartphone or not.
            </h2>
            <h2>
              Our AI-powered chatbot uses USSD technology to manage orders and
              process payments, integrated into the USSD payment options of all
              Nigerian banks for added security and convenience.
            </h2>
            <h2>
              We are mobile-first but do not require users to download another
              financial services app, making our service accessible to all.
              Start accepting orders and payments within conversations today.
            </h2>
          </p>
          <nav>
            <a href="/#">Get started</a>
          </nav>
        </div>
        <img src={Content1} alt="phoneIMG" />
      </Section1>
      <Section2>
        <div>
          <h1>How monerce Works</h1>
          <h2>This is a pictorial story of how Monerce works</h2>
        </div>
        <ul>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
          <li>
            <img src={frame1} alt="img1" />
            <p>Daniel Baokai saw a product advertised on a bill board</p>
          </li>
        </ul>
      </Section2>
    </BaseLayout>
  );
}

export default Index;
