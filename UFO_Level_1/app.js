// from data.js
var tableData = data;

function tableDisplay(ufoSighting) {
    var tbody = d3.select("tbody");
    ufoSighting.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };

console.log(tableData);
tableDisplay(tableData);

var button = d3.select("#filter-btn");
var form = d3.select("#date-form");

form.on("submit", runEnter);
button.on("click", runEnter);

function runEnter() {
  d3.event.preventDefault();

  var dateInput = d3.select("#datetime").property("value");

  console.log(dateInput);

  var filteredData = tableData.filter(date => date.datetime === dateInput);

  console.log(filteredData);

  var tbody = d3.select("tbody");

  tbody.selectAll('tr').remove();
  tbody.selectAll('td').remove();

  tableDisplay(filteredData);

  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

}
  
