import React, { useState, useEffect } from 'react'
import Prize1 from '../images/pezzo5.jpg'
import Prize2 from '../images/grab10.png'
import Prize3 from '../images/panda20.jpg'
import Prize4 from '../images/ntuc10.jpg'
import Prize5 from '../images/capitaland10.jpg'
import Prize6 from '../images/burgerking.png'
import { Modal, Button } from 'react-bootstrap'
import EachReward from './EachReward'
import Axios from "axios";
function ViewRewards() {


    // ALL IMAGES FROM GOOGLE AND NOT OWNED BY US //

    // user's rewards
    const [userRewards, setUserRewards] = useState({ //Number of items available
        userReward1: 0,
        userReward2: 0,
        userReward3: 0,
        userReward4: 0,
        userReward5: 0,
        userReward6: 0
    })
    const [myRewardModal, setMyRewardModal] = useState(false) //Modal for view my rewards
    const [successModal, setSuccessModal] = useState(false) //Modal for a redemption
    const [confirmationModal, setConfirmationModal] = useState(false) //Modal for confirmation redeemed message
    const [pointsModal, setPointsModal] = useState(false) //Modal for insufficient points
    const [itemModal, setItemModal] = useState(false) //Modal for insufficient items
    const [pointsRemoved, setPointsRemoved] = useState(0)
    const [reward, setReward] = useState(0) //Actual reward being clicked
    const [username, setUsername] = useState("");
    const [userPoints, setUserPoints] = useState(20) //Number of user points

    const [rewards, setRewards] = useState({ //Number of items available
        reward1: 3,
        reward2: 22,
        reward3: 38,
        reward4: 7,
        reward5: 54,
        reward6: 31
    })
    const [points, setPoints] = useState({ //Number of points for each reward
        point1: 5,
        point2: 10,
        point3: 10,
        point4: 15,
        point5: 15,
        point6: 20
    })

    const [voucher, setVoucher] = useState({ //Voucher description
        voucher1: "$5 Pezzo voucher",
        voucher2: "$10 Grab Food voucher",
        voucher3: "$20 Food Panda voucher",
        voucher4: "$10 Fair Price voucher",
        voucher5: "$10 CapitaLand voucher",
        voucher6: "$9.90 Burger King voucher"
    })

    // RUN ONCE WHEN APP STARTS
    useEffect(() => {
        getLocalUserPoints()
        getLocalRewards()
        getLocalUserRewards()
    }, [])

    useEffect(() => {
        saveLocalUserPoints()
        saveLocalRewards()
        saveLocalUserRewards()
    }, [userPoints, rewards, userRewards])


    

    function getPoints(username){
        console.log('this is the response1.');
        var url = "/backend/user/"+username;
        console.log(url);
        Axios.get(url).then((response) => {
      var points =response.data.point;
      console.log('point', points)
      return points;
    }).catch(error=>{
      console.log("Wrong username/password.")
    });
};
    // function handleRedeem(rewardNum){
    //     if (rewardNum === 0){
    //         console.log ("CANNOT REDEEM")
    //     }
    //     else{
    //         //setReward1(rewardNum - 1)
    //         console.log("NOT IN THE IF LOOP")
    //         setButtonPressed(true);
    //     }
    // }

    function checkAvailability(rewardNum, pointNum){
        if (rewardNum === 0){
            setItemModal(true)
        }
        else {
            if (userPoints < pointNum) {
                setPointsModal(true)
            }
            else {
                setPointsRemoved(pointNum);
                setSuccessModal(true)
                // setConfirmationModal(true)
            }
        }
    }

    function checkMyRewards(userRewards) {
        setMyRewardModal(true)
    }

    function handleDismiss() {
        setSuccessModal(false)
        setConfirmationModal(false)
        setPointsModal(false)
        setItemModal(false)
        setMyRewardModal(false)
    }

    function handleConfirm() {
        setUserPoints(userPoints - pointsRemoved)
        setPointsRemoved(0)
        setSuccessModal(false)
        setConfirmationModal(true)
        switch (reward) { //set number of items avaialable
            case "reward1":
                setRewards({
                    reward1: rewards.reward1 - 1,
                    reward2: rewards.reward2,
                    reward3: rewards.reward3,
                    reward4: rewards.reward4,
                    reward5: rewards.reward5,
                    reward6: rewards.reward6
                })
                setUserRewards({
                    userReward1: userRewards.userReward1 + 1,
                    userReward2: userRewards.userReward2,
                    userReward3: userRewards.userReward3,
                    userReward4: userRewards.userReward4,
                    userReward5: userRewards.userReward5,
                    userReward6: userRewards.userReward6
                })
                return;
            case "reward2":
                setRewards({
                    reward1: rewards.reward1,
                    reward2: rewards.reward2 - 1,
                    reward3: rewards.reward3,
                    reward4: rewards.reward4,
                    reward5: rewards.reward5,
                    reward6: rewards.reward6
                })
                setUserRewards({
                    userReward1: userRewards.userReward1,
                    userReward2: userRewards.userReward2 + 1,
                    userReward3: userRewards.userReward3,
                    userReward4: userRewards.userReward4,
                    userReward5: userRewards.userReward5,
                    userReward6: userRewards.userReward6
                })
                return;
            case "reward3":
                setRewards({
                    reward1: rewards.reward1,
                    reward2: rewards.reward2,
                    reward3: rewards.reward3 - 1,
                    reward4: rewards.reward4,
                    reward5: rewards.reward5,
                    reward6: rewards.reward6
                })
                setUserRewards({
                    userReward1: userRewards.userReward1,
                    userReward2: userRewards.userReward2,
                    userReward3: userRewards.userReward3 + 1,
                    userReward4: userRewards.userReward4,
                    userReward5: userRewards.userReward5,
                    userReward6: userRewards.userReward6
                })
                return;
            case "reward4":
                setRewards({
                    reward1: rewards.reward1,
                    reward2: rewards.reward2,
                    reward3: rewards.reward3,
                    reward4: rewards.reward4 - 1,
                    reward5: rewards.reward5,
                    reward6: rewards.reward6
                })
                setUserRewards({
                    userReward1: userRewards.userReward1,
                    userReward2: userRewards.userReward2,
                    userReward3: userRewards.userReward3,
                    userReward4: userRewards.userReward4 + 1,
                    userReward5: userRewards.userReward5,
                    userReward6: userRewards.userReward6
                })
                return;
            case "reward5":
                setRewards({
                    reward1: rewards.reward1,
                    reward2: rewards.reward2,
                    reward3: rewards.reward3,
                    reward4: rewards.reward4,
                    reward5: rewards.reward5 - 1,
                    reward6: rewards.reward6
                })
                setUserRewards({
                    userReward1: userRewards.userReward1,
                    userReward2: userRewards.userReward2,
                    userReward3: userRewards.userReward3,
                    userReward4: userRewards.userReward4,
                    userReward5: userRewards.userReward5 + 1,
                    userReward6: userRewards.userReward6
                })
                return;
            case "reward6":
                setRewards({
                    reward1: rewards.reward1,
                    reward2: rewards.reward2,
                    reward3: rewards.reward3,
                    reward4: rewards.reward4,
                    reward5: rewards.reward5,
                    reward6: rewards.reward6 - 1
                })
                setUserRewards({
                    userReward1: userRewards.userReward1,
                    userReward2: userRewards.userReward2,
                    userReward3: userRewards.userReward3,
                    userReward4: userRewards.userReward4,
                    userReward5: userRewards.userReward5,
                    userReward6: userRewards.userReward6 + 1
                })
                return;
        }
    }


    // Items to GET and SAVE to local: userpoints, rewards (#available), userRewards
    // Save points to local
    const saveLocalUserPoints = () => {
        localStorage.setItem('userPoints', JSON.stringify(userPoints))
    }

    // Get points from local
    const getLocalUserPoints = () => {
        if (localStorage.getItem('userPoints') == null) {
            localStorage.setItem('userPoints', JSON.stringify([]))
        }
        else {
            let userPointsLocal = JSON.parse(localStorage.getItem("userPoints"))
            setUserPoints(userPointsLocal)
        }
    }

    // Save rewards to local
    const saveLocalRewards = () => {
        localStorage.setItem('rewards', JSON.stringify(rewards))
    }

    // Get rewards from local
    const getLocalRewards = () => {
        if (localStorage.getItem('rewards') == null) {
            localStorage.setItem('rewards', JSON.stringify([]))
        }
        else {
            let rewardsLocal = JSON.parse(localStorage.getItem("rewards"))
            setRewards(rewardsLocal)
        }

    }

    // Save userRewards to local
    const saveLocalUserRewards = () => {
        localStorage.setItem('userRewards', JSON.stringify(userRewards))
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



    return (
        <div className="rewards-page container">
            <h1>Rewards</h1>
            <div className="myReward">
                <button onClick={() => checkMyRewards(userRewards)} style={{ "float": "right" }} className="btn btn-warning">View My Rewards</button>
                <h5 style={{ "padding-right": "80%", "font-weight": "bold" }}>Number of points: {userPoints}</h5>
            </div>


            <div>

            </div>
            <div class="row">
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize1}
                            points={points.point1}
                            itemsAvailable={rewards.reward1}
                            vouchers={voucher.voucher1} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward1, points.point1, "reward1")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>



                </div>
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize2}
                            points={points.point2}
                            itemsAvailable={rewards.reward2}
                            vouchers={voucher.voucher2} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward2, points.point2, "reward2")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize3}
                            points={points.point3}
                            itemsAvailable={rewards.reward3}
                            vouchers={voucher.voucher3} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward3, points.point3, "reward3")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize4}
                            points={points.point4}
                            itemsAvailable={rewards.reward4}
                            vouchers={voucher.voucher4} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward4, points.point4, "reward4")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize5}
                            points={points.point5}
                            itemsAvailable={rewards.reward5}
                            vouchers={voucher.voucher5} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward5, points.point5, "reward5")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="item col">
                    <div class="item info">
                        <EachReward
                            img={Prize6}
                            points={points.point6}
                            itemsAvailable={rewards.reward6}
                            vouchers={voucher.voucher6} />
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward6, points.point6, "reward6")} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Modal show={myRewardModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        My Rewards
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Rewards you have redeemed:</p>
                    <p>{userRewards.userReward1 === 0 ? null : "$5 Pezzo voucher: " + userRewards.userReward1}</p>
                    <p>{userRewards.userReward2 === 0 ? null : "$10 Grab Food voucher: " + userRewards.userReward2}</p>
                    <p>{userRewards.userReward3 === 0 ? null : "$20 Food Panda voucher: " + userRewards.userReward3}</p>
                    <p>{userRewards.userReward4 === 0 ? null : "$10 Fair Price voucher: " + userRewards.userReward4}</p>
                    <p>{userRewards.userReward5 === 0 ? null : "$10 CapitaLand voucher: " + userRewards.userReward5}</p>
                    <p>{userRewards.userReward6 === 0 ? null : "$9.90 Burger King voucher: " + userRewards.userReward6}</p>

                    {/* <p>Points remaining would be: {userPoints - pointsRemoved}</p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={successModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Redeem reward
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Would you like to confirm the redemption?</p>
                    <p>Points remaining would be: {userPoints - pointsRemoved}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="secondary">Close</Button>
                    <Button onClick={handleConfirm} variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={confirmationModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Successfully redeemed
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You have successfully redeemed the voucher!</p>
                    <p>The e-voucher will be sent to your email shortly.</p>
                    <p>You may click on <b>View Rewards</b> to view your redeemed rewards.</p>
                    {/* <p>You have {userPoints - pointsRemoved} points now.</p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={pointsModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Insufficient points
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You have insufficient points currently.</p>
                    <p>Complete more tasks to gain more points.</p>
                    <p>Try again later :)</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={itemModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Insufficient items
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Sorry! </p>
                    <p>This item is unavailable at the moment.</p>
                    <p>How about looking at some other rewards?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>


        </div>
        // <div className="rewards-page">
        //     <h1>Rewards</h1>
        //     <div class="container">
        //     <div style={{ "width": "200px", "margin-left": "80%", "margin-bottom": "50px" }}>
        //             <div className="dropdown select">
        //                 <label>Order by:</label>
        //                 <select className="filter-todo browser-default custom-select">
        //                     <option value="Project 1">Latest</option>
        //                     <option value="Project 2">Food</option>
        //                     <option value="Project 3">Shopping</option>
        //                 </select>
        //             </div>
        //             {/* <Dropdown size = {1} options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" /> */}
        //         </div>
        //         <div class="row">
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize1}></img>
        //                     {/* <p>$5 Pezzo voucher</p> */}
        //                     <p>5 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div> 
        //                         {reward1} items available
        //                     </div>
        //                     <button onClick={() => handleRedeem(reward1)} class="btn btn-warning">Add to cart</button>
        //                 </div>

        //             </div>
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize2}></img>
        //                     {/* <p>$10 Grab Food voucher</p> */}
        //                     <p>10 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div>
        //                         {reward2} items available
        //                     </div>
        //                     <button onClick={() => handleRedeem(reward2)} class="btn btn-warning">Add to cart</button>
        //                 </div>
        //             </div>
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize3}></img>
        //                     {/* <p>$20 Food Panda voucher</p> */}
        //                     <p>20 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div>
        //                         {reward3} items available
        //                     </div>
        //                     <button class="btn btn-warning">Add to cart</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize4}></img>
        //                     {/* <p>$10 Fair Price voucher</p> */}
        //                     <p>10 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div>
        //                         {reward4} items available
        //                     </div>
        //                     <button class="btn btn-warning">Add to cart</button>
        //                 </div>
        //             </div>
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize5}></img>
        //                     {/* <p>$10 CapitaLand voucher</p> */}
        //                     <p>10 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div>
        //                         {reward5} items available
        //                     </div>
        //                     <button class="btn btn-warning">Add to cart</button>
        //                 </div>
        //             </div>
        //             <div class="item col">
        //                 <a>
        //                     <img src={Prize6}></img>
        //                     {/* <p>$9.90 Burger King voucher</p> */}
        //                     <p>15 points</p>
        //                 </a>
        //                 <div class="item-info">
        //                     <div>
        //                         {reward6} items available
        //                     </div>
        //                     <button class="btn btn-warning">Add to cart</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <Reward_form/>

        //         <Modal show={buttonPressed}>
        //             <Modal.Header closeButton>
        //                 <Modal.Title id="contained-modal-title-vcenter">
        //                 Redeem Rewards
        //                 </Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>
        //                 <p>This timer will ring for 1 minute.</p>
        //                 <p>Click on "Snoooze" for another 5 minutes of interval before the timer rings again.</p>
        //                 <p>Click on "Dismiss" to start the next interval.</p>
        //             </Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="info">Snooze</Button>
        //                 <Button variant="info">Dismiss</Button>
        //             </Modal.Footer>
        //         </Modal>
        //     </div>
        // </div>

    )
}

export default ViewRewards
