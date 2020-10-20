import React from 'react'
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import {dailySalesChart,
//     emailsSubscriptionChart,
//     completedTasksChart} from "../components/DataVisualisation/chart"

// import LineChart from "../components/DataVisualisation/LineChart"
// import BarChart from "../components/DataVisualisation/BarChart"

import {CanvasJSChart} from 'canvasjs-react-charts'
var Component = React.Component;
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// function ViewProgress() {
//     const [state, setState] = React.useState({
//         ProjectId : ""
//     })
//     const options = [
//         'Project1', 'Project2', 'Project3'
//       ];
//       const defaultOption = options[0];

//       function handleChange(event) {
//         console.log("Project changed");
//         setState({
//             //[name] : event.target.value
//         })
//       }
      
//     return (
//         <div className="viewprogress">
//             <header>
//             <h1>
//                 View Progress
//             </h1>
//             </header>
//             <body>

//             <Dropdown size = {1} options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />

//             <LineChart />

//             <BarChart />

//             </body>
//         </div>
//     )
// }

// export default ViewProgress

class ViewProgress extends Component {
    state = {  }
    today = "Tue Oct 20 2020";
      
    completedTask = {
        everyone : [
    {name: "John",
    tasks: [
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071072, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Mon Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071073, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Mon Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071074, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Tue Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071075, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Tue Oct 20 2020"}]}, 
    {name: "Mike",
    tasks: [
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071076, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Wed Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071077, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Tue Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071078, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Tue Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071079, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Tue Oct 20 2020"}]}, 
    {name: "David",
    tasks: [
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071061, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Thu Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071062, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Wed Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071063, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Thu Oct 20 2020"}, 
        {completed: true, date: "Tue Oct 20 2020" , description: undefined, id: 866.0301251071064, priority: 1, reminderDate: "Tue Oct 20 2020",text:"t1", completedDate: "Thu Oct 20 2020"}] }
        ]}



        constructor() {
            super();
            this.toggleDataSeries = this.toggleDataSeries.bind(this);
        }
        toggleDataSeries(e){
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else{
                e.dataSeries.visible = true;
            }
            this.chart.render();
        }
        render() {
            var filterData=[];
            for (var index=0; index < this.completedTask.everyone.length; index++){
                
                var mon = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Mon");
                var monCount = mon.length
                var tue = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Tue");
                var tueCount = tue.length
                var wed = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Wed");
                var wedCount = wed.length
                var thu = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Thu");
                var thuCount = thu.length
                var fri = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Fri");
                var friCount = fri.length
                var sat = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Sat");
                var satCount = sat.length
                var sun = this.completedTask.everyone[index].tasks.filter(task=>task.completedDate.substring(0,3) === "Sun");
                var sunCount = sun.length
                var personData = {type: "stackedColumn",
                name: this.completedTask.everyone[index].name,
                showInLegend: true, dataPoints: [{label: "Mon", y: monCount}, {label: "Tue", y: tueCount}, {label: "Wed", y: wedCount}, {label: "Thu", y: thuCount}, {label: "Fri", y: friCount}, {label: "Sat", y: satCount}, {label: "Sun", y: sunCount}]}
                filterData.push(personData);
            }
            
            const options = {
                animationEnabled: true,
                backgroundColor:'',
                theme: "dark1",
                title: {
                    text: "Task Completed",
                    fontFamily: "verdana"
                },
                axisY: {
                    title: "Tasks",
                    includeZero: true,
                },
                toolTip: {
                    shared: true,
                    reversed: true
                },
                legend: {
                    verticalAlign: "center",
                    horizontalAlign: "right",
                    reversed: true,
                    cursor: "pointer",
                    itemclick: this.toggleDataSeries
                },
                data: filterData
            }
            return (
            <div>
                <CanvasJSChart options = {options}
                     onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
            );
        }
}
 
export default ViewProgress;
