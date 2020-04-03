import React from 'react';



function PageHeader() {
    return (
        <div className='container my-4'>
            <div className='row text-center'>
                <div className='col-12'>
                    <p>123 HAYS STREET LEXINGTON, KY 40509 / OPEN EVERYDAY 10AM-10PM</p>
                    <h1 className='display-3'>
                        THE CORONA CAFE
                    </h1>
                </div>
            </div>
            <div className='row text-center mt-4'>
                <div className='col-12'>
                    <img src={process.env.PUBLIC_URL + '/cafe.png'} alt='corona cafe' />
                </div>
            </div>
        </div>
    );
}



export default PageHeader