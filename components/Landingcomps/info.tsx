import React from 'react';
import "./info.css"
const INFO = (props) => {
    return(
        <div className='text-xs text-white mt-4 cursor-pointer'>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <p>{props.p4}</p>
        </div>
    );
};
export default INFO

