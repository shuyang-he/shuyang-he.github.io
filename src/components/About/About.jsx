import React from "react";
import "./About.scss";

const about = () => {
  return (
    <div className={`about`}>
      <div className={`about__title`}>
        <h1 className={`about__name`}>Shuyang He</h1>
        <p className={`about__contact`}>
          maxhe2019@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;206-849-9105
        </p>
      </div>
      <p className={`about__content`}>
        Trained engineer seeking challenging job in front-end engineer.
      </p>
      <div className={`about__links`}></div>
    </div>
  );
};

export default about;
