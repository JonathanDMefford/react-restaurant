import React from 'react';



function MenuItem(props) {
    return (
        <li className='py-3'><strong>${props.price}</strong> - {props.description}</li>
    );
}



export default MenuItem