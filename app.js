// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(UFOreport) {
    console.log(UFOreport);
    var row = tbody.append("tr");
    Object.entries(UFOreport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

// remove old table

  d3.select("tbody").selectAll("tr").remove();
  d3.select("tbody").selectAll("td").remove();
  
var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
filteredData.forEach(function(UFOreport_filter) {
    var row = tbody.append("tr");
    Object.entries(UFOreport_filter).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
});
