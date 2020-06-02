import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: "",
            email: ""
        };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleName(e) {

        let value = e.currentTarget.value;

        this.setState({ name: value });
    }

    handleEmail(e) {

        let value = e.currentTarget.value;

        this.setState({ email: value });
    }

    handleClick(e) {
        e.preventDefault();

        const { handleSubmit } = this.props;
        
        handleSubmit(this.state);
        this.setState({ 
            name: "",
            email: ""
        });
    }

    render() {
        const { name, email } = this.state;

        return (
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        value={ name }
                        onChange={ this.handleName }
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        value={ email }
                        onChange={ this.handleEmail }
                    />
                </label>
                <button
                    type="submit"
                    onClick={ this.handleClick }
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;