import React from 'react'
import './Leaderboard.css'
function Leaderboard() {
    return (
        <div className="leaderboard-page">
            <header>
                <h1>Leaderboard</h1>

            </header>
            <div class="leaderboard container">
                <h1>

                    BEST EMPLOYEE OF SEPTEMBER 2020

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
