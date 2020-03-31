import React from 'react';
import TopMenu from './topmenu';
import BottomMenu from './bottommenu';
import MenuItem from './menuitem';
const axios = require('axios');




class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            itemCost: [],
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
                let mainArr = response.data.menu_items;
                return mainArr;
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
                <TopMenu menu={this.state.menuItems}/>
                <div className='row'>
                    <div className='col-12 mt-4'>
                        <h1 className='text-center border-bottom'>Main Course</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
                            At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                            Etiam dignissim diam quis enim lobortis. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.
                            Morbi blandit cursus risus at ultrices. Enim nulla aliquet porttitor lacus luctus. Neque viverra justo nec ultrices dui sapien eget mi proin. Pharetra magna ac placerat vestibulum.
                            Urna porttitor rhoncus dolor purus non. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Diam vel quam elementum pulvinar etiam non.
                        </p>
                    </div>
                </div>
                <BottomMenu menu={this.state.menuItems}/>
            </div>
        );
    }
}



export default Menu