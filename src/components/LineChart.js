import { Line } from "@ant-design/charts";

export default function LineChart(props){
    const graphData = []
    for(let i=0;i<props.yearData.length;i++){
        graphData.push({
            Year:props.yearData[i][0].work_year,
            No_of_jobs: props.yearData[i].length
        })
    }
    
    var props = {
        data: graphData,
        xField: "Year",
        yField: "No_of_jobs",
      };
      return <Line {...props} />;
}