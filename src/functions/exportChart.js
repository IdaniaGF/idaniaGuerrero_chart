function exportChart(chartRef){
    console.log(chartRef.current)
    let chartSVG = chartRef.current.current;
    let svgURL = new XMLSerializer().serializeToString(chartSVG);
    let svgBlob = new Blob([svgURL], {type: "image/svg+xml;charset=utf-8"});
    saveAs(svgBlob, "chart.svg");
}

export default exportChart