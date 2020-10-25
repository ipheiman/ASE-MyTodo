import React, {useState} from 'react'
import Prize1 from '../images/pezzo5.jpg'
import Prize2 from '../images/grab10.png'
import Prize3 from '../images/panda20.jpg'
import Prize4 from '../images/ntuc10.jpg'
import Prize5 from '../images/capitaland10.jpg'
import Prize6 from '../images/burgerking.png'
import {Modal, Button} from 'react-bootstrap'
import EachReward from './EachReward'
function ViewRewards() {
    const [successModal, setSuccessModal] = useState(false) //Modal for a redemption
    const [pointsModal, setPointsModal] = useState(false) //Modal for insufficient points
    const [itemModal, setItemModal] = useState(false) //Modal for insufficient items
    const [pointsRemoved, setPointsRemoved] = useState(0)
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
        else{
            if (userPoints < pointNum){
                setPointsModal(true)
            }
            else{
                setPointsRemoved(pointNum);
                setSuccessModal(true)
            }
        }
    }

    function handleDismiss(){
        setSuccessModal(false)
        setPointsModal(false)
        setItemModal(false)
    }

    function handleConfirm(){
        setUserPoints(userPoints - pointsRemoved)
        setPointsRemoved(0)
        setSuccessModal(false)
    }


    return (
        <div className="rewards-page">
            <h1>Rewards</h1>
            <h5 padding-right="40px">Number of points: {userPoints}</h5>
            <div class="row">
                <div class="item col">
                    <div class="item info">
                        <EachReward 
                        img={Prize1}
                        points={points.point1}
                        itemsAvailable={rewards.reward1}
                        vouchers={voucher.voucher1}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward1, points.point1)} class="btn btn-warning">Redeem</button>
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
                        vouchers={voucher.voucher2}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward2, points.point2)} class="btn btn-warning">Redeem</button>
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
                        vouchers={voucher.voucher3}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward3, points.point3)} class="btn btn-warning">Redeem</button>
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
                        vouchers={voucher.voucher4}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward4, points.point4)} class="btn btn-warning">Redeem</button>
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
                        vouchers={voucher.voucher5}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward5, points.point5)} class="btn btn-warning">Redeem</button>
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
                        vouchers={voucher.voucher6}/>
                    </div>
                    <div class="item col">
                        <div class="item info">
                            <p>
                                <button onClick={() => checkAvailability(rewards.reward6, points.point6)} class="btn btn-warning">Redeem</button>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Modal show={successModal}>
                <Modal.Header closeButton onClick={handleDismiss}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Redeem Rewards
                    </Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <p>Would you like to confirm the redemption?</p>
                <p>Points remaining would be: {userPoints - pointsRemoved}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDismiss} variant="danger">Cancel</Button>
                    <Button onClick={handleConfirm} variant="info">Confirm</Button>
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
                    <Button onClick={handleDismiss} variant="danger">Cancel</Button>
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
                    <Button onClick={handleDismiss} variant="danger">Cancel</Button>
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
