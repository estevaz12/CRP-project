google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawCh(num) {
  var data = google.visualization.arrayToDataTable([
    ["Result", "Participants"],
    ["Unemployed", 21],
    ["Job Searching", 7],
    ["Interviewing", 2],
    ["Employed", 25],
  ]);
  var options = { title: "Participants After 12 Months" };
  switch (num) {
    case 1:
      data = google.visualization.arrayToDataTable([
        ["Result", "Participants"],
        ["Unemployed", 183],
        ["Job Searching", 19],
        ["Interviewing", 30],
        ["Employed", 28],
      ]);
      options.title = "Participants Initially";
      break;
    case 2:
      data = google.visualization.arrayToDataTable([
        ["Result", "Participants"],
        ["Unemployed", 34],
        ["Job Searching", 7],
        ["Interviewing", 8],
        ["Employed", 46],
      ]);
      options.title = "Participants After 6 Months";
      break;
    case 3:
      data = google.visualization.arrayToDataTable([
        ["Result", "Participants"],
        ["Unemployed", 21],
        ["Job Searching", 7],
        ["Interviewing", 2],
        ["Employed", 25],
      ]);
      options.title = "Participants After 12 Months";
      break;
    case 4:
      data = google.visualization.arrayToDataTable([
        ["Result", "Participants"],
        ["Unemployed", 2],
        ["Job Searching", 2],
        ["Interviewing", 13],
        ["Employed", 0],
      ]);
      options.title = "Participants After Discharge";
      break;
    default:
      break;
  }
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Result", "Participants"],
    ["Unemployed", 21],
    ["Job Searching", 7],
    ["Interviewing", 2],
    ["Employed", 25],
  ]);
  var options = { title: "Participants After 12 Months" };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
