import React, { Component } from 'react';
import Input from "../Form/Input";
import axios from "../../ajax/axios";

class CreateComment extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: "",
            comment: "",
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        let value = e.currentTarget.value;
        this.setState({ email: value });
    }

    handleComment(e) {
        let value = e.currentTarget.value;
        this.setState({ comment: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { articleID } = this.props;
        const { email, comment } = this.state;

        axios.post("/articles/" + articleID + "/comments", {
            email: email,
            comment: comment,

        }).then(() => {
            this.setState({
                email: "",
                comment: "",
            });
        });
    }

    render() {
        const { email, comment } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">

                <Input
                    className="row"
                    label={ "Email" }
                    type={ "email" }
                    value={ email }
                    handleChange={ this.handleEmail }
                />

                <Input
                    className="row"
                    label={ "Comment" }
                    type={ "text" }
                    value={ comment }
                    handleChange={ this.handleComment }
                />

                <button className="btn btn-primary">Add Comment</button>
            </form>
        );
    }
}

export default CreateComment;