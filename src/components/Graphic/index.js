import React from 'react';
import { useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Infected', 'Recovered', 'Deaths', 'Active'];


const Graphic = () => {

    const {data:Idata ,country} = useSelector(state => state.data);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: `Current state in ${country}`,
            },
        },
    };

    const data = {
        labels,
        datasets: [{
            label: country,
            data: [Idata.confirmed.value, Idata.recovered.value, Idata.deaths.value, Idata.confirmed.value - Idata.deaths.value],
            backgroundColor: [
                'rgb(144, 205, 244)',
                'rgb(154, 230, 180)',
                'rgb(251, 182, 206)',
                'rgb(250, 240, 137)',
            ],
            borderColor: [
                'rgb(144, 205, 244)',
                'rgb(154, 230, 180)',
                'rgb(251, 182, 206)',
                'rgb(250, 240, 137)',
            ],
            borderWidth: 1
        }
        ],
    };

    return <Bar options={options} data={data} />;
}

export default Graphic
