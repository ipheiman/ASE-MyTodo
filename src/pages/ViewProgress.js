import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart} from "../components/DataVisualisation/chart"

import LineChart from "../components/DataVisualisation/LineChart"
import BarChart from "../components/DataVisualisation/BarChart"

function ViewProgress() {
    const [state, setState] = React.useState({
        ProjectId : ""
    })
    const options = [
        'Project1', 'Project2', 'Project3'
      ];
      const defaultOption = options[0];

      function handleChange(event) {
        console.log("Project changed");
        setState({
            //[name] : event.target.value
        })
      }
      
    return (
        <div className="viewprogress">
            <header>
            <h1>
                Project Progress
            </h1>
            </header>
            <body>
            <div  style={{"width": "200px", "margin-left":"80%", "margin-bottom":"50px"}}>
            <div className="dropdown select">
                    <select  className="filter-todo browser-default custom-select">
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>
                    </select>
                </div>
            {/* <Dropdown size = {1} options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" /> */}
            </div>

            <LineChart />

            <BarChart />

            </body>
        </div>
    )
}

export default ViewProgress
