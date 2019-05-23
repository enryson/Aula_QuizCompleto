
window.onload = function () {
var vOneLS = localStorage.getItem("vOneLocalStorage ");
console.log(vOneLS); 
var res  = vOneLS*100;
//Better to construct options first and then pass it as a parameter
var options = {
	title: {
		text: "Column Chart in jQuery CanvasJS"              
	},
	data: [              
	{
		// Change type to "doughnut", "line", "splineArea", etc.
		type: "column",
		dataPoints: [
			{ label: "apple",  y: res  }
		]
	}
	]
};

$("#chartContainer").CanvasJSChart(options);
}
