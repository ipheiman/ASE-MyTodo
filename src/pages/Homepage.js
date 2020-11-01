import React, { useState, useEffect } from 'react'
import Clock from 'react-clock';
import Calendar from 'react-calendar';
import 'react-clock/dist/Clock.css';
import ClockFunction from '../components/ClockFunction'
import Task_listHome from '../components/TaskTesting/Task_listHome';
import './Homepage.css'
import Task_form from '../components/TaskTesting/Task_form';
function Homepage(props) {
    // UserRewards
    const [userRewards, setUserRewards] = useState({ //Number of items available
        userReward1: 0,
        userReward2: 0,
        userReward3: 0,
        userReward4: 0,
        userReward5: 0,
        userReward6: 0
    })
    const [date, setValue] = useState(new Date());
    const [value, setTimeValue] = useState(new Date());
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskPriority, setTaskPriority] = useState("1")
    // todos is an Array State
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState("All")
    // create a new array to contain todos
    const [filteredTasks, setFilteredTasks] = useState([])
    useEffect(() => {
        getLocalTasks()
        getLocalUserRewards()
    }, [])

    useEffect(() => {
        filterHandler()
        saveLocalTasks()
        saveLocalUserRewards()
    }, [tasks, status, userRewards])
    const filterHandler = () => {
        setFilteredTasks(tasks.filter(task => task.completed === false))

    }
    useEffect(() => {
        const interval = setInterval(
            () => setTimeValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);
    props.setNavBarHidden(false)

    // Save to local
    const saveLocalTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    const getLocalTasks = () => {
        if (localStorage.getItem('tasks') == null) {
            localStorage.setItem('tasks', JSON.stringify([]))
        }
        else {
            let taskLocal = JSON.parse(localStorage.getItem("tasks"))
            setTasks(taskLocal)
        }
    }
    // Get userRewards from local
    const getLocalUserRewards = () => {
        if (localStorage.getItem('userRewards') == null) {
            localStorage.setItem('userRewards', JSON.stringify([]))
        }
        else {
            let userRewardsLocal = JSON.parse(localStorage.getItem("userRewards"))
            setUserRewards(userRewardsLocal)
        }

    }

    // Save userRewards to local
    const saveLocalUserRewards = () => {
        localStorage.setItem('userRewards', JSON.stringify(userRewards))
    }



    return (
        <div className="homepage">
            <header>
                <h1>Welcome to MyTodo!</h1>
            </header>

            <div className="flexbox-container" width="400dp">
                <div className="task list">
                    <h2 className="upcoming-task-text">Upcoming Tasks</h2>
                    <Task_listHome
                        tasks={tasks}
                        setTasks={setTasks}
                        filteredTasks={filteredTasks} />
                </div>
                <div className="rewards-table">
                    <h2 className="upcoming-task-text">My Rewards</h2>
                    <table className="task-tablehome" >
                        <thead className="text-center" width="15%">
                            <tr >
                                <th scope="col">Reward Name</th>
                                <th scope="col" >Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userRewards.userReward1 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$5 Pezzo voucher</td>
                                    <td>{userRewards.userReward1}</td>
                                </tr>}
                            {userRewards.userReward2 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$10 Grab Food voucher</td>
                                    <td>{userRewards.userReward2}</td>
                                </tr>}
                            {userRewards.userReward3 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$20 Food Panda voucher</td>
                                    <td>{userRewards.userReward3}</td>
                                </tr>}
                            {userRewards.userReward4 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$10 Fair Price voucher</td>
                                    <td>{userRewards.userReward4}</td>
                                </tr>}
                            {userRewards.userReward5 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$10 CapitaLand voucher</td>
                                    <td>{userRewards.userReward5}</td>
                                </tr>}
                            {userRewards.userReward6 === 0 ? null :
                                <tr className="text-center" >
                                    <td>$9.90 Burger King voucher</td>
                                    <td>{userRewards.userReward6}</td>
                                </tr>}

                        </tbody>
                    </table>
                </div>
                <div className="clock-calendar">
                    <ClockFunction />
                    <Calendar
                        onChange={setValue}
                        value={date}
                    />
                </div>
            </div>
        </div>
    )
}

export default Homepage
