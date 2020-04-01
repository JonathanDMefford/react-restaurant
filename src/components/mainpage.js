import React from 'react';
import SplitMenu from './splitmenu';
import MenuItem from './menuitem';
import Menu from './menu';
const axios = require('axios');



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            itemCost: [],
            // section: ['Appetizers', 'Lunch Menu', 'Sides', 'Dessert'],
            sectionNumber: ['10', '10', '15', '8', '8'],
        };
    }
    //build main array with consecutive calls
    //loader 
    //app arr
    //lunch arr
    //main course arr
    //sides arr
    //desserts arr

    //append main array

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
            <div className='container'>
                {/* <SplitMenu menu={this.state.menuItems} title1={this.state.section[0]} title2={this.state.section[1]}/> */}
                <div className='row'>
                    <Menu menu={this.state.menuItems} title={'Appetizers'} styles={'col-6 mt-4'} amount={10}/>
                    <Menu menu={this.state.menuItems} title={'Lunch Menu'} styles={'col-6 mt-4'} amount={10}/>
                </div>
                <div className='row'>
                    {/* <Menu menu={this.state.menuItems} title={'Main Course'} styles={'col-12 mt-4'} amount={15}/> */}
                    {/* <div className='col-12 mt-4'>
                        <h1 className='text-center border-bottom'>Main Course</h1>
                        <p>
                            <MenuItem menu={this.state.menuItems} />
                        </p>
                    </div> */}
                </div>
                {/* <SplitMenu menu={this.state.menuItems} title1={this.state.section[2]} title2={this.state.section[3]} /> */}
                <div className='row'>
                    <Menu menu={this.state.menuItems} title={'Sides'} styles={'col-6 mt-4'} amount={8}/>
                    <Menu menu={this.state.menuItems} title={'Dessert'} styles={'col-6 mt-4'} amount={8}/>
                </div>
            </div>
        );
    }
}



export default MainPage