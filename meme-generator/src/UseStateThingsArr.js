import React from 'react';

export default function UseStateThingsArr() {

    const [thingsArr,setThingsArr] = React.useState(['thing 1','thing 2'])

    function addItem() {
        setThingsArr(prevState => {
            return [...prevState,`thing ${prevState.length+1}`]
        })
    }

    const thingElements = thingsArr.map(item => {
        return <p> {item} </p>
    })
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingElements}
        </div>
    )
}