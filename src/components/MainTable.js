import { Table } from "antd"
import { CloseCircleOutlined } from "@ant-design/icons"
import { useState } from "react";
import RowTable from "./RowTable";


export default function MainTable(props) {
    const [isRowClicked, setIsRowClicked] = useState(false)
    const [rowIndex, setRowIndex] = useState(null)

    const filterData = props.tableData
    const columns = [
        {
            title: "Year",
            dataIndex: "work_year",
            key: "work_year",
            sorter: {
                compare: (a, b) => a.work_year - b.work_year,
                multiple: 1
            }
        },
        {
            title: "Number Of Total Jobs",
            dataIndex: "total_jobs_in_thar_year",
            key: "total_jobs_in_thar_year",
            sorter: {
                compare: (a, b) => a.total_jobs_in_thar_year - b.total_jobs_in_thar_year,
                multiple: 1
            }
        },
        {
            title: "Average Salary (USD)",
            dataIndex: "avg_salary_in_usd",
            key: "avg_salary_in_usd",
            sorter: {
                compare: (a, b) => a.avg_salary_in_usd - b.avg_salary_in_usd,
                multiple: 1
            }
        },
    ]

    const datasource = []
    for (let i = 0; i < filterData.length; i++) {
        filterData[i].key = `${i + 1}`
        datasource.push(filterData[i])
    }

    return <>
        <Table dataSource={datasource} columns={columns} onRow={(record, rowIndex) => {
            return {
                // onClick: event => tableModal(record.work_year,rowIndex),
                onClick: event => { setRowIndex(rowIndex); setIsRowClicked(true) },
            };
        }}></Table>
        {isRowClicked && <div className="row-table-box">
            <div className="row-table-close">
                <h3>Aggregated Jobs Table</h3>
                <CloseCircleOutlined onClick={() => setIsRowClicked(!isRowClicked)} />
            </div>
            <div className="row-table-table">
                <RowTable jobData={props.jobData} rowIndex={rowIndex}></RowTable>
            </div>
        </div>}
    </>
}