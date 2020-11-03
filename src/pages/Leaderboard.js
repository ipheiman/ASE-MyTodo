import React, {useState} from 'react'
import './Leaderboard.css'
import Leaderboard1 from 'react-leaderboard';
import { FaArrowUp, FaArrowDown} from 'react-icons/fa';
import Mark from 'react-clock/dist/umd/Mark';

function Leaderboard() {

    const data = [{name: "Denzel", score: 300, inc :  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    {name: "Jashini", score: 300, inc: <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    {name: "Reena", score: 300, inc: <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    {name: "Heiman", score: 300, inc: <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    {name: "Raj", score: 400, inc: <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "jashini", score: 300, inc:  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "denzal", score: 300, inc:  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "mother", score: 320, inc:  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "father", score: 300, inc: <FaArrowUp className="trash-btn text-success" style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "boss", score: 300, inc:  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>},
    // {name: "idonno", score: 300, inc:  <FaArrowDown className="trash-btn text-danger"  style={{ position: "absolute", right: "100px", bottom: "10px"}} size = {30}/>}
]

    const [state, setstate] = useState(data.sort(function(a, b){return a.score-b.score}).reverse())

    function handleChange(event){
        var display = []
        var entry;
        for (entry of data){
            if (entry.name.toLowerCase().includes(event.target.value)){
                display.push(entry)
            }
        }
        display.sort(function(a, b){return a.score-b.score}).reverse()
        setstate(display)
        console.log(display);
    }


    //     return(
    //         <div className="leaderboard-page">
    //             <header>
    //             <h1>Leaderboard</h1>

    //         </header>

    //         <div class class="leaderboard container">
    //         <h1>BEST EMPLOYEE OF OCTOBER 2020</h1>

            

    //         </div>


    //         {/* <Leaderboard1 users={list} paginate={20}/> */}
    //       </div>
    //     )

    return (
        <div className="leaderboard-page">
            <header>
                <h1>Leaderboard</h1>

            </header>
            
            <div class="leaderboard container">
                <h1>

                    {/* BEST EMPLOYEE OF OCTOBER 2020 */}

                </h1>
    <h1>{" "}</h1>

                <ol>{"Filter Name: "}
                <input type="text" className="filterbox" onChange={handleChange} />    
                </ol>

                <ol style = {{visibility: false, backgroundColor: "#9fc1eb" }}>
             </ol>
             <table className="table-header" width = "100px"  >
             <thead className="text-center" width="5%">
                            <tr  >
                                <th scope="col">Ranking</th>
                                <th scope="col" >Name</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" >Score</th>
                            </tr>
                        </thead>
                </table>
                <ol>
                {/* <li style = {{fontSize: 0, backgroundColor: "#9fc1eb" }}><mark style = {{fontSize: 14, color: "#800000"}}>Name</mark><small style = {{fontSize: 14,right : "30px", color: "#800000"}}>{"Score"}</small></li> */}
                    {state.map(entry => <li>
                        <mark style = {{left : "220px", fontWeight : "bold"}}>{entry.name}</mark>
                        {entry.inc}
                        <small style = {{right : "30px"}}>{entry.score}</small>
                    </li>)}
                </ol>
            </div>

        </div >
    )
}

export default Leaderboard
