import React, { Component } from "react";
import axios from "../../ajax/axios";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

class Article extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loaded: false,
            article: {},
        };
    }

    componentDidMount() {
        const { id } = this.props;

        axios.get("/articles/" + id ).then(({ data }) => {

            this.setState({
                loaded: true,
                article: data.data,
            });
        });
    }

    render() {
        let { article, loaded } = this.state;
        const { id } = this.props;

        return !loaded ? <p>Loading...</p> : (
            <div>
                <h3>{ article.title }</h3>
                <p>{ article.content }</p>
                <Comments articleID={ id }/>
                <CreateComment articleID={ id }/>
            </div>
        );
    }
}

export default Article;