window.onload = (event) => {
    let vis1 = "./vg/avg_sal_workyear.vg.json"
    let mapVis = "./vg/avg_salary_country.vg.json"
    let salPerYearPercountry = "./vg/avg_salary_per_year.vg.json"

    vegaEmbed("#vg1", vis1).then((result) => {

    }).catch(console.error)

    vegaEmbed("#vg-map", mapVis).then((result) => {

    }).catch(console.error)

    vegaEmbed("#salary-year-country", salPerYearPercountry).then((result) => {

    }).catch(console.error)
}