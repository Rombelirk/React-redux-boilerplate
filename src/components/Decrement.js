import React from "react";


const Decrement = ({counter, decrementNumber}) => {
    return (
        <div>
            <h1>{counter.number}</h1>
            <button className="btn btn-success" onClick={decrementNumber}>decrement</button>
        </div>

    )
};

export default Decrement