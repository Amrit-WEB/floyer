export default function Filter(salaries) {
    let yearWise=[];
    let avgSalaries = [];
    let totalJobs = [];
    let filteredData = [];

    for (let i = 2020; i <= 2024; i++) {
        yearWise.push(salaries.filter(item => Number(item.work_year) === i))
    }

    for (let i = 0; i < yearWise.length; i++) {
        avgSalaries.push(yearWise[i].reduce((r, c) => r + Number(c.salary_in_usd), 0) / yearWise[i].length)
        //totalJobs.push(yearWise[i].map((item) => item.job_title).filter((value, index, current_value) => current_value.indexOf(value) === index))
        totalJobs.push(yearWise[i].map((item) => item.job_title))

        filteredData.push({
            work_year: yearWise[i][0].work_year,
            avg_salary_in_usd: avgSalaries[i].toFixed(2),
            total_jobs_in_thar_year: totalJobs[i].length
        })
    }

    return {
        dataFilter:filteredData,
        yearFilter:yearWise,
        totalJobFilter:totalJobs
    }
    
}