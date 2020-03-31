import React from 'react';



function MenuItem(props) {
    return (
        <div>
            <ul>
                {props.menu.map((item, idx) =>
                    <li key={idx}>{item.description}</li>
                )}
            </ul>
        </div>
    );
}



export default MenuItem