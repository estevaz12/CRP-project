google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Result", "Participants"],
    ["Unemployed", 21],
    ["Job Searching", 7],
    ["Interviewing", 2],
    ["Employed TV", 25]
  ]);

  var options = {
    title: "Participants After A Year",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
