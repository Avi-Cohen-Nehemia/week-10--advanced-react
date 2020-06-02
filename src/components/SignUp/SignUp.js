import React, { Component } from 'react';
import Password from "./Password";

class SignUp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            password: "",
            confirm: ""
        };

        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handlePassword(e) {

        let value = e.currentTarget.value;

        this.setState({ password: value });
    }

    handleConfirm(e) {

        let value = e.currentTarget.value;

        this.setState({ confirm: value });
    }

    render() {
        const { password, confirm } = this.state;
        const { minimumLength } = this.props;
        let isValid = password.length >= minimumLength && password === confirm;

        return (
            <>
                <Password
                    label={ "Password" }
                    valid={ isValid }
                    input={ password }
                    handleChange={ this.handlePassword }
                />
                <Password
                    label={ "Confirm Password" }
                    valid={ isValid }
                    input={ confirm }
                    handleChange={ this.handleConfirm }
                />
            </>
        );
    }
}

export default SignUp;