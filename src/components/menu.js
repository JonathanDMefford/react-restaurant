import React from 'react';
import MenuItem from './menuitem';


class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.styles}>
                <h1 className='text-center border-bottom'>{this.props.title}</h1>
                <p>
                    <div>
                        <ul>
                            {this.props.menu.length > 0 ? Array.apply(0, Array(this.props.amount)).map((item, idx) => {
                                {/* console.log(idx);
                            console.log(props); */}
                                if (this.props.amount == 15) {
                                    console.log(this.props.menu);
                                }
                                return <MenuItem key={idx} description={this.props.menu[idx].description} />
                            }
                            ) : null}
                        </ul>
                    </div>
                </p>
            </div>
        );
    }
}



export default Menu