import React from 'react';
import MenuItem from './menuitem';



function SplitMenu(props) {
    return (
        <div className='row'>
            <div className='col-6 mt-4'>
                <h1 className='text-center border-bottom'>{props.title1}</h1>
                <p>
                    <MenuItem menu={props.menu} />
                </p>
            </div>
            <div className='col-6 mt-4'>
                <h1 className='text-center border-bottom'>{props.title2}</h1>
                <p>
                    <MenuItem menu={props.menu} />
                </p>
            </div>
        </div>
    );
}



export default SplitMenu