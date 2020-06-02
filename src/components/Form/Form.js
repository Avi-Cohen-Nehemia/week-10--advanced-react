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
            <form className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    value={ name }
                    onChange={ this.handleName }
                />
                
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    id="email"
                    type="email"
                    value={ email }
                    onChange={ this.handleEmail }
                />
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