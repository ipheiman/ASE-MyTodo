import React from 'react'
import './Leaderboard.css'
import { FaArrowUp, FaArrowDown} from 'react-icons/fa';

function Leaderboard() {
    return (
        <div className="leaderboard-page">
            <header>
                <h1>Leaderboard</h1>

            </header>
            <div class="leaderboard container">
                <h1>

                    {/* BEST EMPLOYEE OF OCTOBER 2020 */}

                </h1>
                <ol>
                    <li>
                        <mark>John</mark>
                        <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>
                        <small style = {{right : "30px"}}>315</small>
                        
                    </li>
                    <li>
                        <mark>Peter</mark>
                        <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>
                        <small style = {{right : "30px"}}>301</small>
                   </li>
                    <li>
                        <mark>Mark</mark>
                        <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>
                         <small style = {{right : "30px"}}>292</small>
                    </li>
                    <li>
                        <mark>Joey</mark>
                        <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>
                        <small style = {{right : "30px"}}>245</small>
                    </li>
                    <li>
                        <mark>Gordon</mark>
                        <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>
                        <small style = {{right : "30px"}}>203</small>
                    </li>
                </ol>
            </div>

        </div >
    )
}

export default Leaderboard
