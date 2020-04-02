import React from 'react';
import MenuItem from './menuitem';


class Menu extends React.Component {
    constructor(props) {
        super(props);
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
                        {this.props.menu.length > 0 ? Array.apply(0, Array(this.props.amount)).map((item, idx) => {
                            {/* if (this.props.amount == 15) {
                                console.log(this.props.menu);
                            } */}
                            return <MenuItem key={idx} price={this.applyPrice()} description={this.props.menu[idx].description} />
                        }
                        ) : null}
                    </ul>
                </div>
            </div>
        );
    }
}



export default Menu