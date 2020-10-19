import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart(){
    const data = {
        labels: [
            "Sunday",
            "Monday",
           "Tuesday",
           "Wednesday",
           "Thursday",
           "Friday",
           "Saturday"
        ],

        datasets: [
            {
                label: "Number of tasks completed",
                data: [3 , 3, 0, 4,5, 7,8] ,
                borderColor : ['rgba(54,162,235,0,2)'],
                backgroundColor : ['rgba(54,162,235,0,2)'],
                pointBackgroundColor : ['rgba(54,162,235,0,2)'],
                pointBorderColor : ['rgba(54,162,235,0,2)']
            
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: "Bar Chart"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return <Bar data = {data} options = {options}/>
}

export default BarChart