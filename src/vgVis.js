window.onload = (event) => {
    let vis1 = "./vg/daily_cost.vg.json"
    let vis2 = "./vg/avg_salary_country.vg.json"

    vegaEmbed("#vg1", vis1).then((result) => {

    }).catch(console.error)

    vegaEmbed("#vg-map", vis2).then((result) => {

    }).catch(console.error)
}