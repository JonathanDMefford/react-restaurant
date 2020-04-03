import React from 'react';
import PageHeader from './title';
import Menu from './menu';
import './mainpage.css';



function MainPage() {
    return (
        <div className='container mb-3'>
            <PageHeader />
            <div className='row'>
                <Menu title={'Appetizers'} styles={'col-6 mt-4'} amount={10} />
                <Menu title={'Lunch Menu'} styles={'col-6 mt-4'} amount={10} />
            </div>
            <div className='row'>
                <Menu title={'Main Course'} styles={'col-12 text-center mt-4'} amount={15} />
            </div>
            <div className='row'>
                <Menu title={'Sides'} styles={'col-6 mt-4'} amount={8} />
                <Menu title={'Dessert'} styles={'col-6 mt-4'} amount={8} />
            </div>
        </div>
    );
}



export default MainPage