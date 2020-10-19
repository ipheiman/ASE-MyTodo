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
                View Progress
            </h1>
            </header>
            <body>

            <Dropdown size = {1} options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />

            <LineChart />

            <BarChart />

            </body>
        </div>
    )
}

export default ViewProgress
