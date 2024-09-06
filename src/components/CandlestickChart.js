'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables, CandlestickController, CandlestickElement);

const CandlestickChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/');
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let chartInstance = null;

        if (chartData && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            chartInstance = new Chart(ctx, {
                type: 'candlestick',
                data: {
                    datasets: [{
                        label: 'Stock Prices',
                        data: chartData.data.map(d => ({
                            x: new Date(d.x),
                            o: d.o,
                            h: d.h,
                            l: d.l,
                            c: d.c
                        }))
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Candlestick Chart'
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            }
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [chartData]);

    if (!chartData) return <p>Loading...</p>;

    return (
        <div className="w-full max-w-full h-64 flex items-center justify-center">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default CandlestickChart;