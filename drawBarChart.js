

const drawBarChart = function(data, options, element) {
  var options = {
    height: 0,
    width: 0,
    numberPlacement: 0,
    barColour: 0,
    labelColour: 0,
    barSpacing: 0,
    barChartAxisY: 0,
    barChartAxisX: 0
  }
  var bars = []
  for (i = 0; i < data.length; i++) {
    bars[i] = {
      value: data[i]
    }
  }
  return bars;
}

drawBarChart([1, 2, 3], options, element);
