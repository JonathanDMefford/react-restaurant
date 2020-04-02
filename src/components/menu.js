import React from 'react';
import MenuItem from './menuitem';
const axios = require('axios');


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: []
        };
    }


    async generateMenu() {
        let result = await axios.get('https://entree-f18.herokuapp.com/v1/menu/' + this.props.amount)
            .then(function (response) {
                console.log(response);
                return response.data.menu_items;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            result[i]['price'] = this.applyPrice()
        }
        console.log(result)
        this.setState({
            menuItems: result
        });
    }

    async componentDidMount() {
        let newMenuList = JSON.parse(localStorage.getItem(this.props.title)) || [];
        if (newMenuList.length > 0) {
            this.setState({
                menuItems: newMenuList,
            });
        } else {
            await this.generateMenu();
        };
    }

    componentDidUpdate() {
        window.localStorage.setItem(this.props.title, JSON.stringify(this.state.menuItems));
    }


    applyPrice() {
        return Math.floor(Math.random() * 25) + 5;
    }

    render() {
        return (
            <div className={this.props.styles}>
                <h1 className='text-center border-bottom'>{this.props.title}</h1>
                <div>
                    <ul className='list-unstyled'>
                        {this.state.menuItems.length > 0 ? Array.apply(0, Array(this.props.amount)).map((item, idx) => {
                            return <MenuItem key={idx} price={this.state.menuItems[idx].price} description={this.state.menuItems[idx].description} />
                        }
                        ) : null}
                    </ul>
                </div>
            </div>
        );
    }
}



export default Menu