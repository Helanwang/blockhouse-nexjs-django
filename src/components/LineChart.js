'use client';

import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/line-chart-data/');
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            const config = {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: 'My First Dataset',
                        data: chartData.data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            const myChart = new Chart(ctx, config);

            return () => {
                myChart.destroy();
            };
        }
    }, [chartData]);

    if (!chartData) return <p>Loading...</p>;

    return <canvas ref={chartRef}></canvas>;
};

export default LineChart;