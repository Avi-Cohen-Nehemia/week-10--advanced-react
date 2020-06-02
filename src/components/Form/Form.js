import React, { Component } from 'react';
import Input from "./Input";

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

                <Input
                    label={ "Name" }
                    type={ "text" }
                    value={ name }
                    handleChange={ this.handleName }
                />

                <Input
                    label={ "Email" }
                    type={ "email" }
                    value={ email }
                    handleChange={ this.handleEmail }
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