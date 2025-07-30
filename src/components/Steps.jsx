import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps-container">
      

      <div className="steps">
        <div className={`step ${currentStep >= 0 ? "active active-user" : ""}`}>
          <AiOutlineUser />
          <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active active-star" : ""}`}>
          <AiOutlineStar />
          <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active active-send" : ""}`}>
          <FiSend />
          <p>Envio</p>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(currentStep / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
