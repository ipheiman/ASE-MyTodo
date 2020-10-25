import React, {useState, setState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart} from "../components/DataVisualisation/chart"

    import {Line} from 'react-chartjs-2'
    
import {Bar} from 'react-chartjs-2'

import LineChart from "../components/DataVisualisation/LineChart"
import BarChart from "../components/DataVisualisation/BarChart"

function ViewProgress() {

    const [ProjectId, setProjectId] = useState(0);
    const options1 = {
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
            // text: "Bar Chart"
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

    const data1 = { 
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
                data: [3 , 3, 0, 4,5, 6,1] ,
                borderColor : ['#e3f2fd'],
                backgroundColor : ['#222'],
                pointBackgroundColor : ['#e3f2fd'],
                pointBorderColor : ['rgba(54,162,235,0,2)']
            
            }
        ]
        }

        const data2 = { 
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
                    data: [0 , 3, 0, 3,3, 2,6] ,
                    borderColor : ['#e3f2fd'],
                    backgroundColor : ['#222'],
                    pointBackgroundColor : ['#e3f2fd'],
                    pointBorderColor : ['rgba(54,162,235,0,2)']
                
                }
            ]
            }

            const data3 = { 
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
                        data: [4 , 2, 1, 4,5, 6,5] ,
                        borderColor : ['#e3f2fd'],
                        backgroundColor : ['#222'],
                        pointBackgroundColor : ['#e3f2fd'],
                        pointBorderColor : ['rgba(54,162,235,0,2)']
                    
                    }
                ]
                }
    const data = [data1,data2,data3]

    const options = [
        'Project1', 'Project2', 'Project3'
      ];
    
    
    function handleChange(event) {
        console.log(ProjectId)
        console.log(data[ProjectId])
        setProjectId(event.target.value)
    }
      
    return (
        <div className="viewprogress">
            <header>
            <h1>
                Progress
            </h1>
            </header>
            <body>
            <div  style={{"width": "200px", "margin-left":"80%", "margin-bottom":"50px"}}>
            <div className="dropdown select">
                    <select  className="filter-todo browser-default custom-select" onChange = {handleChange}>
                        <option value = {0}>Project 1</option>
                        <option value = {1}>Project 2</option>
                        <option value = {2}>Project 3</option>
                    </select>
                </div>
            </div>

            {/* <LineChart data = {data1} /> */}

            <div style={{"height" : "50%", "width": "50%", "display": "inline-block"}}>
            <Line data = {data[ProjectId]} options = {options1}/>
            </div>

            <div style={{"height" : "50%", "width": "50%","display": "inline-block"}}>
        <Bar data = {data[ProjectId]}  options = {options1}/>
        </div>

            </body>
        </div>
    )
}

export default ViewProgress
