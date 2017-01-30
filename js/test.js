!function() {
  var svgContainer = d3.select("#vizContainer").append("svg")
                      .attr("width", 800)
                      .attr("height", 450);
 
  var svg = d3.select("svg");

  //var circle = svgContainer.append("circle")
  //                .attr("cx", 30)
  //                .attr("cy", 30)
  //                .attr("r", 20)
  //                .style("fill", "steelblue");

  var circle = svg.selectAll("circle")
    .data([32, 57, 293], function(d) { return d; });

  circle.enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return Math.sqrt(d); })
    .style("fill", "steelblue");

  circle.exit().remove();
}();