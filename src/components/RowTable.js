import { Table } from "antd";

export default function RowTable(props){
    //Count frequency of all jobs
    let obj ={}
    for(let i=0;i<props.jobData[props.rowIndex].length;i++){
        if(!obj[props.jobData[props.rowIndex][i]]){
            obj[props.jobData[props.rowIndex][i]] = 1
        }else{
            obj[props.jobData[props.rowIndex][i]]++
        }
    }

    //making datasource for table according to column
    const aggregateData = []
    for(let i in obj){
        aggregateData.push({
            job_title:i,
            no_of_jobs:obj[i],
            key:i
        })
    }
   
    const col = [
        {
            title: "Job Title",
            dataIndex: "job_title",
            key: "job_title"
        },
        {
            title: "Number Of Jobs",
            dataIndex: "no_of_jobs",
            key: "no_of_jobs"
        },
    ]

    return <Table dataSource={aggregateData} columns={col}></Table>
}