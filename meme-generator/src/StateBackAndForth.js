import React from "react"

export default function StateBackAndForth() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut,setIsGoingOut] = React.useState(true)

    function changeAnswer() {
        setIsGoingOut(prevIsGoingOut => prevIsGoingOut ? false : true)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={changeAnswer}>
                <h1>{isGoingOut ? "YES" : "NO"}</h1>
            </div>
        </div>
    )
}