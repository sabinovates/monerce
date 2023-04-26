import React, { useState } from "react";
import BaseLayout from "../../components/LayoutComponent/BaseLayout/BaseLayout";
import { FooterNavStyles } from "./FooterNavStyle";
import closeIcon from "../../assets/Images/Icon (3).svg";
import openIcon from "../../assets/Images/Icon (4).svg";
import AvatarGroupImg from "../../assets/Images/Avatar group.svg";

function FAQ() {
  const [openAnswer, setOpenAnswer] = useState(0);

  const handleOpenAnswer = (id) => {
    setOpenAnswer(id);
  };
  return (
    <BaseLayout>
      <FooterNavStyles>
        <aside>
          <div>
            <h1>Frequently asked questions</h1>
            <h2>All the Essential Information about Monerce You Should Know</h2>
          </div>
          <ul>
            <li>
              <p>
                <h2>What is Monerce?</h2>
                {openAnswer === 1 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(1)}
                  />
                )}
              </p>
              {openAnswer === 1 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>What is Monerce?</h2>
                {openAnswer === 2 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(2)}
                  />
                )}
              </p>
              {openAnswer === 2 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>What is Monerce?</h2>
                {openAnswer === 3 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(3)}
                  />
                )}
              </p>
              {openAnswer === 3 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>What types of payments does Monerce support?</h2>
                {openAnswer === 4 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(4)}
                  />
                )}
              </p>
              {openAnswer === 4 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>How does Monerce ensure the security of transactions?</h2>
                {openAnswer === 5 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(5)}
                  />
                )}
              </p>
              {openAnswer === 5 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>Can I integrate Monerce with my website or mobile app?</h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>What are the fees associated with using Monerce?</h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>How long does it take to set up a Monerce account?</h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>Does Monerce provide customer support?</h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>

            <li>
              <p>
                <h2>
                  What is Online-To-Offline (O2O) commerce, and how does Monerce
                  enable it?
                </h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>
                  What is a USSD payment option, and how does it work with
                  Monerce?
                </h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>
                  What is an Artificial Intelligence-powered chatbot, and how
                  does it help with payment processing?
                </h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
            <li>
              <p>
                <h2>
                  How does Monerce cater to users who are not comfortable with
                  mobile app technology?
                </h2>
                {openAnswer === 6 ? (
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => handleOpenAnswer(0)}
                  />
                ) : (
                  <img
                    src={openIcon}
                    alt="openIcon"
                    onClick={() => handleOpenAnswer(6)}
                  />
                )}
              </p>
              {openAnswer === 6 ? (
                <h3>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </h3>
              ) : null}
            </li>
          </ul>
        </aside>
        <div>
          <img src={AvatarGroupImg} alt="AvatarGroupImg" />
          <h1>Still have questions?</h1>
          <p>
            In case you're unable to find the answer you're searching for, don't
            hesitate to contact us for additional support.
          </p>
          <a href="#/">Get in touch</a>
        </div>
      </FooterNavStyles>
    </BaseLayout>
  );
}

export default FAQ;
