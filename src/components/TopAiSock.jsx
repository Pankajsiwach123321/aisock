import React from "react";
import Button from "./common/Button";
import Rocket from "../assets/images/rocket.webp";
import rightEllipes from "../assets/images/righticonpurple.png";
import leftEllipes from "../assets/images/lefticonpurple.png";
import { companyCardData } from "./common/helper";

const TopAiSock = () => {
  return (
    <section className=" mt-lg-5 pt-md-5 position-relative z-1 pb-5">
      <div className="container pt-sm-4 mb-5">
        <Button textInput="TOP AI" classButton="mt-11" />
        <h1 className="col-white mt-2  fw-light  fs-xl lh_xxl text-center mb-0">
          Top seven AI Sock
        </h1>
        <div className="row mt-4">
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start">
            {companyCardData.slice(0, 4).map((obj, index) => (
              <div
                key={index}
                className="card-Aicompany mt-md-72 mt-40 overflow-hidden position-relative z-1"
              >
                <img
                  src={obj.image}
                  alt="companyone"
                  className=" w-100  company-img-dimension"
                />
                <h2 className=" fw-bold font-opensans fs-md lh_lg col-white pt-33">
                  {obj.title}
                </h2>
                <p className=" fw-normal font-opensans fs-xsm lh_md col-gray mb-0 pt-14">
                  {obj.paragraph}
                </p>
                <span className="elleipes-gradiant"></span>
              </div>
            ))}
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end  mt-md-144">
            {companyCardData.slice(4).map((obj, index) => (
              <div key={index} className="card-Aicompany mt-md-72 mt-40 overflow-hidden position-relative z-1">
                <img
                  src={obj.image}
                  alt="companyone"
                  className=" w-100  company-img-dimension"
                />
                <h2 className=" fw-bold fs-md font-opensans lh_lg col-white pt-33">
                  {obj.title}
                </h2>
                <p className=" fw-normal fs-xsm font-opensans lh_md col-gray mb-0 pt-14">
                  {obj.paragraph}
                </p>
                <span className="elleipes-gradiant"></span>
              </div>
            ))}
            <div className=" text-center mt-md-91 mt-40">
              <img
                src={Rocket}
                alt="Rocket"
                className=" max-dimension-rocket aniamtion-roket w-100 h-100 mx-auto "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="setpurplerighticon d-none d-sm-block">
        <div className=" position-relative z-1">
          <img src={rightEllipes} alt="rightEllipes" width={146} height={146} />
          <span className="imageradaintellipes"></span>
        </div>
      </div>
      <div className="setpurplelefticon d-none d-sm-block">
        <div className=" position-relative z-1">
          <img src={leftEllipes} alt="leftEllipes" width={146} height={146} />
          <span className="imageradaintellipes"></span>
        </div>
      </div>
    </section>
  );
};

export default TopAiSock;
