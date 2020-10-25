import React, {useState} from 'react'

function EachReward(props){

    return(
        <div>
        <div class="item col">
            <img src={props.img}></img>
            <p>{props.vouchers}</p>
            <div class="item info">
                <div>
                Points needed: {props.points}
                </div>
                <div>
                Items available: {props.itemsAvailable}
                </div>
                <div>
                {/* <button class="btn btn-warning">Redeem</button> */}
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default EachReward