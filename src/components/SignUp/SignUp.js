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
        let { password, confirm } = this.state;
        let { minimumLength } = this.props;
        let error = password.length < minimumLength || password !== confirm;

        return (
            <>
                <Password
                    label={ "Password" }
                    error={ error }
                    input={ password }
                    handleChange={ this.handlePassword }
                />
                <Password
                    label={ "Confirm Password" }
                    error={ error }
                    input={ confirm }
                    handleChange={ this.handleConfirm }
                />
            </>
        );
    }
}

export default SignUp;