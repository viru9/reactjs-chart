
import React from "react";
var LineChart = require("react-chartjs").Line;

const MyLineChart = (props) => {

  var data = {
    labels: ['CMB', 'KND', 'GAL', 'MTR', 'JFN', 'KRG', 'RTP', 'BDL', 'HMB', 'MTL', 'NEL', 'AMP', 'TRI', 'POL', 'ANP'],

  	datasets: [
  		{
  			label: "My First dataset",
  			fillColor: "rgba(220,220,220,0.2)",
  			strokeColor: "rgba(220,220,220,1)",
  			pointColor: "rgba(220,220,220,1)",
  			pointStrokeColor: "#fff",
  			pointHighlightFill: "#fff",
  			pointHighlightStroke: "rgba(220,220,220,1)",
  			data: props.data
  		}
  	]
  };

  var chartOptions = {

  	///Boolean - Whether grid lines are shown across the chart
  	scaleShowGridLines : true,

  	//String - Colour of the grid lines
  	scaleGridLineColor : "rgba(0,0,0,.05)",

  	//Number - Width of the grid lines
  	scaleGridLineWidth : 1,

  	//Boolean - Whether to show horizontal lines (except X axis)
  	scaleShowHorizontalLines: true,

  	//Boolean - Whether to show vertical lines (except Y axis)
  	scaleShowVerticalLines: true,

  	//Boolean - Whether the line is curved between points
  	bezierCurve : true,

  	//Number - Tension of the bezier curve between points
  	bezierCurveTension : 0.4,

  	//Boolean - Whether to show a dot for each point
  	pointDot : true,

  	//Number - Radius of each point dot in pixels
  	pointDotRadius : 4,

  	//Number - Pixel width of point dot stroke
  	pointDotStrokeWidth : 1,

  	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  	pointHitDetectionRadius : 20,

  	//Boolean - Whether to show a stroke for datasets
  	datasetStroke : false,

  	//Number - Pixel width of dataset stroke
  	datasetStrokeWidth : 2,

  	//Boolean - Whether to fill the dataset with a colour
  	datasetFill : false,
  	//String - A legend template
  	//Boolean - Whether to horizontally center the label and point dot inside the grid
  	offsetGridLines : false
  };

  return (

  <LineChart data={data} options={chartOptions} width="600" height="250"/>

  );

}

export default MyLineChart;
