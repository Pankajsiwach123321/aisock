import React from "react";
import Button from "./common/Button";

const StatisticsToday = () => {
  return (
    <section>
      <div className="container">
        <Button textInput="STATISTICS" classButton="border-white mt-1" />
        <h1 className="col-white mt-2   fw-light  fs-xl lh_xxl text-center mb-0">
          Statistics For Today
        </h1>
      </div>
    </section>
  );
};

export default StatisticsToday;
