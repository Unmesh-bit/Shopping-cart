import React from 'react';

const product = (props) => {
    return (
        <div className="Product">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.proce}</p>
            <button>
                Add To Cart
            </button>
        </div>);
};

export default product; 