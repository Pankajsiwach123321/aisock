import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import TopAiSock from "./components/TopAiSock";
import AiStockWorker from "./components/AiStockWorker";
import StatisticsToday from "./components/StatisticsToday";
import BackToTop from "./components/BackToTop";
import Preloder from "./components/Preloader";
document.body.classList.add("overflow-hidden");
function App() {
  const [load, setload] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setload(false);
    }, 4000);
  });
  return (
    <div className="main-color-body pt-5 ">
      {load && <Preloder />}
      <TopAiSock />
      <AiStockWorker />
      <StatisticsToday />
      <BackToTop />
    </div>
  );
}

export default App;
