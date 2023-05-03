import React from "react";
import cautionIcon from "../../assets/Images/Icon (1).svg";
import closeIcon from "../../assets/Images/Icon (2).svg";

function ErrorCard({ handleShowErrorCard, errorMsg, cardHeader }) {
  return (
    <main>
      <aside>
        <p>
          <img src={cautionIcon} alt="icon" />
          <h4>{cardHeader}</h4>
        </p>
        <img src={closeIcon} alt="icon" onClick={handleShowErrorCard} />
      </aside>
      <h5>{errorMsg}</h5>
    </main>
  );
}

export default ErrorCard;
