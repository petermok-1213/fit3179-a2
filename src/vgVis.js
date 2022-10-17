window.onload = (event) => {
    let mapVis = "./vg/mean_salary.vg.json"
    let top5 = "./vg/top5_country_year.vg.json"
    let bot5 = "./vg/bot5_country_year.vg.json"
    let remoteBar = "./vg/remote_bar.vg.json"
    let companySizeBar = "./vg/company_size_bar.vg.json"

    vegaEmbed("#vg-map", mapVis, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#top-5", top5, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#bot-5", bot5, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#remote-bar", remoteBar, {"actions": false}).then((result) => {}).catch(console.error)
    vegaEmbed("#size-bar", companySizeBar, {"actions": false}).then((result) => {}).catch(console.error)

}