import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

function Navbar() {
    return (
        <div>
            {/* style={{backgroundColor:"#EEEEEE"}} */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}} > 
                <a className="navbar-brand" style={{paddingLeft:"15px"}}>MyToDo</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* mr-auto pulls items to the left of navbar */}
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/homepage"><i><AiIcons.AiFillHome/></i>Home<span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="/project"><i><AiIcons.AiFillFolder/></i>Project<span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="/project"><i><AiIcons.AiFillFolder/></i>Project<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/task"><i><AiIcons.AiFillFolder/></i>Task<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/timer"><i><RiIcons.RiTimer2Fill/></i>Timer<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/viewprogress"><i><BsIcons.BsFillBarChartFill/></i>View Progress<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/leaderboard"><i><FaIcons.FaMedal/></i>Leaderboard<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item active logout-btn">
                                <a className="nav-link" href="/"><i><BiIcons.BiLogOut/></i>Logout<span className="sr-only">(current)</span></a>
                            </li>
                    </ul>


                </div>
                </nav>
        </div>
    )
}

export default Navbar
