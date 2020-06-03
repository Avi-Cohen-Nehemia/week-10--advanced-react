import React, { Component } from "react";
import axios from "../../ajax/axios";
import { Link } from "react-router-dom";

class Articles extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loaded: false,
            articles: [],
        };
    }

    // runs when the component first renders
    componentDidMount() {

        // make the GET request
        axios.get("/articles").then(({ data }) => {

            // once the data has come back update the component state
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }
    render() {
        let { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <ul className="list-group">
                    { articles.map(article => (
                        <li key={ article.id } className="list-group-item d-flex justify-content-between">
                            <h4><Link to={ "news/" + article.id }>{ article.title }</Link></h4>
                            <div>
                                { article.tags.map((tag, index) =>
                                    <button key={ index } className="btn btn-primary">
                                        { tag }
                                    </button>
                                ) }
                            </div>
                        </li>
                    )) }
                </ul>
            </>
        );
    }
}

export default Articles;