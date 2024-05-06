import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import TopAiSock from "./components/TopAiSock";
import AiStockWorker from "./components/AiStockWorker";
import StatisticsToday from "./components/StatisticsToday";

function App() {
  return (
    <div className="main-color-body pt-5 ">
      <TopAiSock />
      <AiStockWorker />
      <StatisticsToday />
    </div>
  );
}

export default App;
