import React from 'react'
import Prize1 from '../images/pezzo5.jpg'
import Prize2 from '../images/grab10.png'
import Prize3 from '../images/panda20.jpg'
import Prize4 from '../images/ntuc10.jpg'
import Prize5 from '../images/capitaland10.jpg'
import Prize6 from '../images/burgerking.png'
function ViewRewards() {

    return (
        <div className="rewards-page">
            <h1>Rewards</h1>
            <div class="container">

                <div class="row">
                    <div class="item col">
                        <a>
                            <img src={Prize1}></img>
                            <p>$5 Pezzo voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>

                    </div>
                    <div class="item col">
                        <a>
                            <img src={Prize2}></img>
                            <p>$10 Grab Food voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>
                    </div>
                    <div class="item col">
                        <a>
                            <img src={Prize3}></img>
                            <p>$20 Food Panda voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="item col">
                        <a>
                            <img src={Prize4}></img>
                            <p>$10 Fair Price voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>
                    </div>
                    <div class="item col">
                        <a>
                            <img src={Prize5}></img>
                            <p>$10 CapitaLand voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>
                    </div>
                    <div class="item col">
                        <a>
                            <img src={Prize6}></img>
                            <p>$9.90 Burger King voucher</p>
                        </a>
                        <div class="item-info">
                            <div>
                                22 items available
                            </div>
                            <button class="btn btn-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewRewards
