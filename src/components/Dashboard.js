import React, {useState} from 'react'

import Button from './Button'
import Display from './Display'




export default function Dashboard() {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);

    const addStrike = () => {
        setStrike(() => {
            if (strike < 3) {
                return strike + 1
            } else {
                return 0
            }
        })
    }
    const addBall = () => {
        setBall(() => {
            if (ball < 4) {
                return ball + 1
            } else {
                return 0
            }
        })
    }
    const addFoul = () => {
        setStrike(() => {
            if (strike <= 0 || strike === 1) {
                return strike + 1
            } else if (strike === 2) {
                return strike
            } else {
                return 0
            }
        })
    }
    const addHit = () => {
        setHit(() => {
            if (hit < 1) {
                return hit + 1
            } else {
                resetFn();
            }
        })
    }

    const resetFn = () => {
        setStrike(0);
        setBall(0);
        setFoul(0);
        setHit(0);
    }
    return (
        <>
            <Display strike={strike} ball={ball} foul={foul} hit={hit}/>
            <div className="btn-wrapper">
                <Button number={addStrike} buttonValue={'Strike!'}/> 
                <Button number={addBall} buttonValue={'Ball!'}/> 
                <Button number={addFoul} buttonValue={'Foul!'}/> 
                <Button number={addHit} buttonValue={'HIT!'}/> 
            </div>
        </>
    )
}
