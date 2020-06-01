import React, { Component } from "react";

class Button extends Component {

    constructor(props) {

        super(props);

        this.state={ count: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { handleUpdate } = this.props;
        handleUpdate(this.state.count + 1);
        this.setState({ count: this.state.count + 1 });
    }
    
    render() {
        return(
            <button onClick={ this.handleClick }>
                Click
            </button>
        );
    }
}
export default Button;