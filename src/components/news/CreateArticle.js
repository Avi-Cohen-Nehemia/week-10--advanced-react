import React, { Component } from 'react';
import Input from "../Form/Input";
import axios from "../../ajax/axios";

class CreateArticle extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: "",
            article: "",
            tags: "",
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        let value = e.currentTarget.value;
        this.setState({ title: value });
    }

    handleArticle(e) {
        let value = e.currentTarget.value;
        this.setState({ article: value });
    }

    handleTags(e) {
        let value = e.currentTarget.value;
        this.setState({ tags: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title, article, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: article,
            tags: tags.split(", "),

        }).then(() => {
            this.setState({
                title: "",
                article: "",
                tags: "",
            });
        });
    }

    render() {
        const { title, article, tags } = this.state;

        return (
            <form onSubmit={ this.handleSubmit } className="container">

                <Input
                    className="row"
                    label={ "Title" }
                    type={ "text" }
                    value={ title }
                    handleChange={ this.handleTitle }
                />

                <Input
                    label={ "Article" }
                    type={ "text" }
                    value={ article }
                    handleChange={ this.handleArticle }
                />

                <Input
                    label={ "Tags" }
                    type={ "text" }
                    value={ tags }
                    handleChange={ this.handleTags }
                />

                <button className="btn btn-primary">Create</button>
            </form>
        );
    }
}

export default CreateArticle;