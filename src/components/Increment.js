import React from "react";


const Increment = ({counter, incrementNumber}) => {
    return (
        <div>
            <h1>{counter.number}</h1>
            <button className="btn btn-success" onClick={incrementNumber}>increment</button>
        </div>

    )
};

export default Increment

