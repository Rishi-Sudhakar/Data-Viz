import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import Chart from 'react-apexcharts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Dashboard.css';
import { barChartOptions, lineChartOptions, pieChartOptions } from '../utils/chartConfigs';

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const dashboardRef = useRef(null);

  useEffect(() => {
    Papa.parse('/data.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });

    const charts = dashboardRef.current.querySelectorAll('.chart-container');
    charts.forEach((chart, index) => {
      gsap.from(chart, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: chart,
          start: 'top 80%',
        },
        delay: index * 0.2,
      });
    });
  }, []);

  const barChartSeries = [
    {
      name: 'SPI Overall Score',
      data: data.slice(0, 5).map((item) => parseFloat(item['SPI.INDEX'])),
    },
  ];

  const lineChartSeries = [
    {
      name: 'Data Use Score',
      data: data.slice(0, 5).map((item) => parseFloat(item['SPI.INDEX.PIL1'])),
    },
    {
      name: 'Data Services Score',
      data: data.slice(0, 5).map((item) => parseFloat(item['SPI.INDEX.PIL2'])),
    },
  ];

  const pieChartSeries = data
    .slice(0, 3)
    .map((item) => parseFloat(item['SPI.INDEX.PIL3']));

  return (
    <section className="dashboard" ref={dashboardRef}>
      <h2 className="hover-scale">Data Dashboard</h2>
      <div className="charts-grid">
        <div className="chart-container hover-shadow">
          <h3 className="hover-rotate">SPI Overall Scores</h3>
          <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
        </div>
        <div className="chart-container hover-shadow">
          <h3 className="hover-rotate">Data Use vs Services Scores</h3>
          <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
        </div>
        <div className="chart-container hover-shadow">
          <h3 className="hover-rotate">Data Products Score Distribution</h3>
          <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={350} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;