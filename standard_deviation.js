"use strict";
function getStandardDeviation(array) {
    const n = array.length;
    const mean = getMean(array);
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}
function getStandardDeviationFrom3(array) {
    const n = array.length;
    const newArray = [Math.min(...array), Math.max(...array)];
    const mean = getMean(newArray);
    return Math.sqrt(newArray.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}
function getMean(data) {
    const sum = data.reduce((acc, item) => acc + item, 0);
    return sum / data.length;
}
function getZScore(score, data) {
    const mean = getMean(data);
    const standardDeviation = getStandardDeviation(data);
    return (score - mean) / standardDeviation;
}
const data = [100, 101.25, 102, 99, 98.25, 100, 100.50, 99.75, 97.25];
const data3 = [98, 98.25, 98.75, 99, 99.25, 99.5, 100, 100.5, 100.75, 101, 101.25, 101.5, 102, 103];
const scoreInput = document.querySelector("#score");
const dataInput = document.querySelector("#data");
const submitButton = document.querySelector("#submit");
const formattedData = document.querySelector("#formatted-data");
dataInput.value = data3.toString();
scoreInput.value = Number(104).toString();
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    const score = Number(scoreInput.value);
    const allData = dataInput.value.split(",").map((item) => Number(item));
    const data = allData;
    const zScore = getZScore(score, data);
    const standardDeviation = getStandardDeviationFrom3(data);
    const mean = getMean(data);
    console.log("Last:", score);
    console.log("Z Score:", zScore);
    console.log("Standard Deviation:", standardDeviation);
    console.log("Mean:", mean);
    console.log("Min/Max:", Math.min(...data), "/", Math.max(...data));
    console.log("=========");
    if (formattedData) {
        formattedData.innerHTML = "";
    }
    data.forEach(item => {
        const span = document.createElement("span");
        span.innerHTML = String(item);
        formattedData === null || formattedData === void 0 ? void 0 : formattedData.appendChild(span);
    });
});
