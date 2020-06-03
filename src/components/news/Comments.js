import React, { Component } from "react";
import axios from "../../ajax/axios";

class Comments extends Component {

    constructor(props) {

        super(props);

        this.state = {
            comments: [],
        };
    }

    componentDidMount() {
        const { articleID } = this.props;

        axios.get("/articles/" + articleID + "/comments" ).then(({ data }) => {

            this.setState({
                comments: data.data,
            });
        });
    }
    
    render() {
        let { comments } = this.state;

        return !comments.length ? null : (
            <>
                <h3>Comments</h3>
                <div>
                    <ul className="list-group">
                        { comments.map(comment => (
                            <li key={ comment.id } className="list-group-item">
                                <h5>{ comment.email }</h5>
                                <p>{ comment.comment }</p>
                            </li>
                        )) }
                    </ul>
                </div>
            </>
        );
    }
}

export default Comments;