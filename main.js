//faz a leitura dos acertos na determinada questão
var T1 = parseFloat(localStorage.getItem("T1") || "0");
var T2 = parseFloat(localStorage.getItem("T2") || "0");

document.getElementById("T1").innerHTML = T1 + "%";
document.getElementById("T2").innerHTML = T2 + "%";

window.onload = function () {

    var options = {
        animationEnabled: true,
        title: {
            text: "Meu desempenho"
        },
        axisX: {
            title: "Areas da matematica"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "T1", y: T1 },
                    { label: "T2", y: T2 }
                ]
            }
        ]
    };

    $("#chartContainer").CanvasJSChart(options);
}




