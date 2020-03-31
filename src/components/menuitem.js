import React from 'react';



class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }


    //render list and number of items depending on which parent component and how many they require

    render() {
        return (
            <div>
                <ul>
                    {this.props.menu.map((item, idx) =>
                        <li key={idx}>{item.description}</li>
                    )}
                </ul>
            </div>
        );
    }
}



export default MenuItem