import { useState } from "react";
import "./question.css";

const Question = ({ title, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="info-question">
      <h4>
        {title}
        <button className="more" onClick={handleState}>
          +
        </button>
      </h4>
      <div className={isActive ? "toggle" : "initial"}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
