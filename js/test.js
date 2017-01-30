!function() {
  var svgContainer = d3.select("vizContainer").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
  var circle = svgContainer.append("circle")
                          .attr("cx", 30)
                          .attr("cy", 30)
                          .attr("r", 20);
}();