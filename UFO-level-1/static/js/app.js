// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

//use d3 to select the table body
var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
    data.forEach((table) => {
        var row = tbody.append("tr");
    
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(table).forEach((value) => {
          var cell = row.append("td");
            cell.text(value);
          }
        );
      });
    }

function handleClick() {
        
    // Get the date from the filter input
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Look for date entry into the filter field
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Reload the table using the filtered data
      buildTable(filteredData);
  }
  
  // Add an event to listen to clicks on Filter Table button
  d3.selectAll("#filter-btn").on("click", handleClick);

  // Build the full table when page is reloaded
buildTable(tableData);