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
                fontColor: 'black',
                borderColor : ['rgba(54,162,235,0,2)'],
                backgroundColor : ['rgba(54,162,235,0,2)'],
                pointBackgroundColor : ['rgba(54,162,235,0,2)'],
                pointBorderColor : ['rgba(54,162,235,0,2)']
            
            }
        ]
    }

    const options = {
        legend: {
            labels: {
                 fontColor: 'black',
                 fontSize:15,
                }
             },
        labels: {
            // This more specific font property overrides the global property
            fontColor: 'black',
            
        },
        title: {
            display: true,
            fontColor: 'black',
            fontSize:15,
            text: "Bar Chart"
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1,
                        fontSize:15,
                        fontColor: 'black'
                    }
                }
            ],
            xAxes: [{
                ticks:{
                    fontColor: 'black',
                    fontSize:15,
                }
            }]
        },
        maintainAspectRatio: false
    }
    return <div style={{"height" : "50%", "width": "50%","display": "inline-block"}}>
        <Bar data = {data} options = {options}/>
        </div>
}

export default BarChart