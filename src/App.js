import {
  AreaChartOutlined,
  WechatWorkOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import MainTable from "./components/MainTable";
import LineChart from "./components/LineChart";
import Chat from "./components/Chat";

import salaries from "./assets/salaries.csv";
import Filter from "./utils/dataFilteration";
import { useState } from "react";

export default function App() {
  const usefulData = Filter(salaries);
  const tableData = usefulData.dataFilter;
  const yearData = usefulData.yearFilter;
  const jobData = usefulData.totalJobFilter;

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <h1 className="header">
        <AreaChartOutlined />
        Floqer's Assignment
      </h1>
      <div className="main">
        <div className="main-table-box">
          <h2>ML Engineer Salaries (2020-2024)</h2>
          <MainTable tableData={tableData} jobData={jobData} />
        </div>
        <div className="line-chart-box">
          <h2>Line Chart</h2>
          <p>(Number of jobs changed from 2020-2024)</p>
          <LineChart yearData={yearData} />
        </div>
      </div>
      <div className="chat-box">
        {isChatOpen && <Chat preData={usefulData} />}
        {isChatOpen && (
          <CloseCircleOutlined
            style={{
              fontSize: "20px",
              margin: "10px",
              borderRadius: "50%",
              background: "blue",
              color: "white",
              padding: "15px",
            }}
            onClick={() => setIsChatOpen(!isChatOpen)}
          />
        )}
        {!isChatOpen && (
          <div className="query-box" onClick={() => setIsChatOpen(!isChatOpen)}>
            {" "}
            <p>Any Query? Ask Me.</p>
            <WechatWorkOutlined
              style={{
                fontSize: "20px",
                margin: "10px",
                borderRadius: "50%",
                background: "blue",
                color: "white",
                padding: "15px",
              }}
            />
          </div>
        )}
      </div>
      <footer className="footer">
        Submit by{" "}
        <a href="https://amritanshu.xyz" target="_blank">
          Amritanshu Prajapati
        </a>
      </footer>
    </>
  );
}
