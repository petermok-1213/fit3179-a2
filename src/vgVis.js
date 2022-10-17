window.onload = (event) => {
    let mapVis = "./vg/mean_salary.vg.json"
    let top5 = "./vg/top5_country_year.vg.json"
    let bot5 = "./vg/bot5_country_year.vg.json"
    let barChart = "./vg/remote_size_salary_bar.vg.json"

    vegaEmbed("#vg-map", mapVis, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#top-5", top5, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#bot-5", bot5, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#size-remote-bar", barChart, {"actions": false}).then((result) => {}).catch(console.error)

}