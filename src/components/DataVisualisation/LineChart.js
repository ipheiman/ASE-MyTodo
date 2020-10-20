import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart(){
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
                borderColor : ['#17A2B8'],
                backgroundColor : ['#17A2B8'],
                pointBackgroundColor : ['#e3f2fd'],
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
        title: {
            display: true,
            fontColor: 'black',
            fontSize:15,
            text: "Line Chart",
            
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
        }
    }
    return <div style={{"height" : "50%", "width": "50%", "display": "inline-block"}}>
        <Line data = {data} options = {options}/>
        </div>
}

export default LineChart