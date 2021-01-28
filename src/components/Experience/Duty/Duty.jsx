import React from "react";

const duty = ({ duty, index }) => {
  return (
    <li key={index}>
      <h4 className={`experience__subtitle`}>{duty.subtitle}</h4>
      <ul className={`experience__subcontent`}>
        {duty.subcontent.map((item, index) => {
          return (
            <li key={index} className={`experience__item`}>
              <h5>{item}</h5>
            </li>
          );
        })}
      </ul>
    </li>
  )
}

export default duty;