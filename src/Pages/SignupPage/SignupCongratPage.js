import React from "react";
import { SignUpCongratStyles } from "./SignUpCongratStyles";
import HurrayImg from "../../assets/Images/Hurray icons.png";
import { Link } from "react-router-dom";

function SignupCongratPage() {
  return (
    <SignUpCongratStyles>
      <p>
        <img src={HurrayImg} alt="hurrayIcon" />
        <h2>Account Created Successfully</h2>
        <h6>
          Congratulations! Your account has been successfully created for our
          O2O (Online-to-Offline) commerce . You are now a member of our
          community and can begin exploring all that our platform has to offer.
        </h6>
        <h6>
          With your new account, you can enjoy the convenience of giving your
          customers access to your products and services through our various
          channels (SMS, WhatsApp, Facebook, Twitter, Telegram and Instagram)
          respectively.
        </h6>
        <h6>
          We take the security of your information very seriously, so you can
          rest assured that your account details are safe with us. We use the
          latest encryption technology to protect your personal data and ensure
          that all transactions are secure.
        </h6>
        <h6>
          As a member of our platform, you'll receive exclusive access to
          promotions, discounts, and other special offers from our partners.
          You'll also have access to our customer support team, who are
          available to help you with any questions or concerns you may have.
        </h6>
        <h6>
          Thank you for joining our community. We're excited to have you on
          board and look forward to providing you with a seamless O2O shopping
          experience. If you have any questions or feedback, please don't
          hesitate to <Link to="/contact_us">contact us</Link> or{" "}
          <Link to="/">chat with us</Link>
        </h6>
        <Link to="/login">
          <h3>Go to Login page</h3>
        </Link>
      </p>
    </SignUpCongratStyles>
  );
}

export default SignupCongratPage;
