import React from "react";
import Button from "./common/Button";
import bubble from "../assets/images/bubble.png";
import {
  CircleOrangeDot,
  CircleSkyDot,
  LineLeftStockWorker,
  LineRightStockWorker,
} from "./common/Icon";

const AiStockWorker = () => {
  return (
    <section className="bg-stockworker position-relative z-1 pb-5  mt-lg-100 pt-5 ">
      <div className="container mt-4 mb-3">
        <Button textInput="HOW IT WORKS" classButton="border-white mt-1" />
        <h1 className="col-white mt-2   fw-light  fs-xl lh_xxl text-center mb-0">
          How AI Stocks Workes
        </h1>
        <p className="mb-0 font-opensans fw-normal fs-xsm text-center lh_md pb-1 max-w-891 mx-auto col-high-gray mt-4 ">
          If you've used ChatGPT, the OpenAl chatbot that has wowed users by
          writing code and instantly answering complex questions, you've gotten
          a glimpse into the next frontier in artificial intelligence, as big
          tech companies are racing to develop the leading Al chatbot.
        </p>
        <p className="mb-0 font-opensans fw-normal fs-xsm text-center lh_md max-w-891 mx-auto col-high-gray mt-4 pt-1 ">
          If you want to get portfolio exposure to Al companies but don't want
          to identify individual Al stocks, you can invest in an Al-focused
          exchange-traded fund (ETF). AI ETFs provide exposure to a broad range
          of the best Al companies, eliminating the need to research and choose
          individual stocks on your own.
        </p>
        <div className=" max-w-927 mx-auto">
          <div className=" row mt-lg-5 pt-5 ">
            <div className="col-md-4 col-sm-6">
              <div className=" d-flex justify-content-center align-items-center flex-column ">
                <div className=" gradiant-line-layer position-relative z-1">
                  <div className="layer-white">
                    <div className="upperlayer">
                      <div className="white-step-card">
                        <h3 className=" mb-0 font-opensans fw-bold fs-xl lh_xxl col-low-black ">
                          01
                        </h3>
                        <p className=" mb-0 font-opensans fw-normal text-center fs-sm lh_2md col-low-black ">
                          STEP
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className=" position-absolute set-leftoncircel">
                    <CircleOrangeDot />
                  </span>
                  <span className=" position-absolute set-rightoncircel">
                    <CircleOrangeDot />
                  </span>
                </div>
                <h2 className="font-opensans fw-bold lh_xl text-center pt-3 mb-0 fs-lg col-white">
                  Sign up
                </h2>
                <p className="font-opensans fw-normal fs-xsm lh_md text-center col-low-gray max-w-240 mx-auto pt-2 mb-0">
                  Fill out the Registration Form to Get Started.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-4 mt-sm-0">
              <div className=" d-flex justify-content-center align-items-center flex-column ">
                <div className=" gradiant-line-layer position-relative z-1">
                  <div className="layer-white">
                    <div className="upperlayerorange">
                      <div className="white-step-card oragne-boxshadow">
                        <h3 className=" mb-0 font-opensans fw-bold fs-xl lh_xxl col-low-black ">
                          02
                        </h3>
                        <p className=" mb-0 font-opensans fw-normal text-center fs-sm lh_2md col-low-black ">
                          STEP
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className=" position-absolute set-leftoncircel">
                    <CircleOrangeDot />
                  </span>
                  <span className=" position-absolute set-rightoncircel">
                    <CircleOrangeDot />
                  </span>
                </div>
                <h2 className="font-opensans fw-bold lh_xl text-center pt-3 mb-0 fs-lg col-white">
                  Verification
                </h2>
                <p className="font-opensans fw-normal fs-xsm lh_md text-center col-low-gray max-w-240 mx-auto pt-2 mb-0">
                  Schedule a Call with Our Verified AI Trading Mentors to Guide
                  You Through Your Investment Journey
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-4 mt-md-0">
              <div className=" d-flex justify-content-center align-items-center flex-column ">
                <div className=" gradiant-line-sky-layer position-relative z-1">
                  <div className="layer-white">
                    <div className="upperlayersky">
                      <div className="white-step-card sky-boxshadow ">
                        <h3 className=" mb-0 font-opensans fw-bold fs-xl lh_xxl col-low-black ">
                          03
                        </h3>
                        <p className=" mb-0 font-opensans fw-normal text-center fs-sm lh_2md col-low-black ">
                          STEP
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className=" position-absolute set-leftoncircel">
                    <CircleSkyDot />
                  </span>
                  <span className=" position-absolute set-rightoncircel">
                    <CircleSkyDot />
                  </span>
                </div>
                <h2 className="font-opensans fw-bold lh_xl text-center pt-3 mb-0 fs-lg col-white">
                  Start Investing
                </h2>
                <p className="font-opensans fw-normal fs-xsm lh_md text-center col-low-gray max-w-240 mx-auto pt-2 mb-0">
                  Begin shaping yournce and ease{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className=" position-absolute z-n1 setlineleft">
        <LineLeftStockWorker />
      </span>
      <span className=" position-absolute z-n1 setlineright">
        <LineRightStockWorker />
      </span>
      <img
        src={bubble}
        alt="bubble"
        className="position-absolute z-n1 setbubble d-md-block d-none"
      />
    </section>
  );
};

export default AiStockWorker;
