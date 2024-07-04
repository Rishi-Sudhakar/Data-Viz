// src/utils/chartConfigs.js

export const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Finland', 'Norway', 'Canada', 'Sweden', 'Denmark'],
    },
    yaxis: {
      title: {
        text: 'SPI Overall Score',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' points';
        },
      },
    },
    theme: {
      palette: 'palette2',
    },
  };
  
  export const lineChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Data Use vs Services Scores',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Finland', 'Norway', 'Canada', 'Sweden', 'Denmark'],
    },
    theme: {
      palette: 'palette3',
    },
  };
  
  export const pieChartOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Finland', 'Norway', 'Canada'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    theme: {
      palette: 'palette4',
    },
  };