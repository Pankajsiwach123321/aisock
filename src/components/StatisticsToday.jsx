import React from "react";
import Button from "./common/Button";
import roundedBall from "../assets/images/roundedball.png";
import { statisticsCardData } from "./common/helper";

const StatisticsToday = () => {
  return (
    <section className=" mt-lg-5 pt-lg-5 pb-lg-324 pb-100 position-relative z-1">
      <div className="container mt-5 pt-4 ">
        <Button textInput="STATISTICS" classButton="mt-1" />
        <h1 className="col-white mt-2   fw-light  fs-xl lh_xxl text-center mb-0">
          Statistics For Today
        </h1>
        <div className="row mt-lg-5 pt-2">
          {statisticsCardData.map((obj, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mt-4 mt-lg-0">
              <div className="cardstatistics">
                <div className="stroke-text-box overflow-hidden position-relative z-1">
                  <h2 className=" fs-xxl mb-0 lh_3xl fw-bold font-roboto stroke">
                    {obj.number}
                  </h2>
                  <span className="elleipes-gradiant2"></span>
                </div>
                <p className="font-opensans fw-semibold fs-sm lh_md text-center mt-4 mb-0 col-white">
                  {obj.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" position-absolute  z-n1 setroundedball">
        <div className=" position-relative z-1">
          <img src={roundedBall} alt="roundedBall" width={80} height={80} />
          <div className="ellipes-ball"></div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsToday;
