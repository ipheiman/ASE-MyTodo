import React from 'react'
import './Leaderboard.css'
function Leaderboard() {
    document.body.style = 'background:  #ECECEC';
    return (
        <div className="leaderboard-page">
            <header>
                <h1>Welcome to Leaderboard</h1>

            </header>
            <div class="leaderboard container">
                <h1>
                    <strong>
                    BEST EMPLOYEE OF SEPTEMBER 2020
                    </strong>
                </h1>
                <ol>
                    <li>
                        <mark>Heiman</mark>
                        <small>315</small>
                    </li>
                    <li>
                        <mark>Heiman</mark>
                        <small>301</small>
                    </li>
                    <li>
                        <mark>Heiman</mark>
                        <small>292</small>
                    </li>
                    <li>
                        <mark>Heiman</mark>
                        <small>245</small>
                    </li>
                    <li>
                        <mark>Heiman</mark>
                        <small>203</small>
                    </li>
                </ol>
            </div>

        </div >
    )
}

export default Leaderboard
