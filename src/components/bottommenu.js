import React from 'react';
import MenuItem from './menuitem';



function BottomMenu(props) {
    return (
        <div className='row'>
            <div className='col-6 mt-4'>
                <h1 className='text-center border-bottom'>Sides</h1>
                <p>
                    <MenuItem menu={props.menu} />
                </p>
            </div>
            <div className='col-6 mt-4'>
                <h1 className='text-center border-bottom'>Desserts</h1>
                <p>
                    <MenuItem menu={props.menu} />
                </p>
            </div>
        </div>
    );
}



export default BottomMenu