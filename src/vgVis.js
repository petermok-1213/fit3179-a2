window.onload = (event) => {
    let vis1 = "./vg/avgsal_workyear.vg.json"
    let mapVis = "./vg/mean_salary.vg.json"
    let yearMeanLineChart = "./vg/year_mean_salary.vg.json"

    vegaEmbed("#vg1", vis1).then((result) => {}).catch(console.error)
    vegaEmbed("#vg-map", mapVis).then((result) => {}).catch(console.error)
    vegaEmbed("#salary-year-country", yearMeanLineChart).then((result) => {}).catch(console.error)
}