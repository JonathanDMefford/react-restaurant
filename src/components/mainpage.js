import React from 'react';
import PageHeader from './title';
// import SplitMenu from './splitmenu';
// import MenuItem from './menuitem';
import Menu from './menu';
const axios = require('axios');



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            itemCost: [],
        };
    }


    async generateMenu() {
        let result = await axios.get('https://entree-f18.herokuapp.com/v1/menu')
            .then(function (response) {
                return response.data.menu_items;

                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        console.log(result);
        this.setState({
            menuItems: result,
        });
    }

    componentDidMount() {
        this.generateMenu();
    }

    componentDidUpdate() {

    }


    render() {
        return (
            <div className='container mb-3'>
                <PageHeader />
                <div className='row'>
                    <Menu menu={this.state.menuItems} title={'Appetizers'} styles={'col-6 mt-4'} amount={10} />
                    <Menu menu={this.state.menuItems} title={'Lunch Menu'} styles={'col-6 mt-4'} amount={10} />
                </div>
                <div className='row'>
                    {/* <Menu menu={this.state.menuItems} title={'Main Course'} styles={'col-12 mt-4'} amount={15}/> */}
                </div>
                <div className='row'>
                    <Menu menu={this.state.menuItems} title={'Sides'} styles={'col-6 mt-4'} amount={8} />
                    <Menu menu={this.state.menuItems} title={'Dessert'} styles={'col-6 mt-4'} amount={8} />
                </div>
            </div>
        );
    }
}



export default MainPage