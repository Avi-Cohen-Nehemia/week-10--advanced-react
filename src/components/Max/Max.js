import React, { Component } from "react";
import Counter from "./Counter";

class Max extends Component {

    constructor(props) {

        super(props);

        this.state = {
            numbers: this.props.numbers
        };

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(index) {
        let newNumber = [...this.state.numbers];
        newNumber[index] += 1;
        this.setState({numbers: newNumber});
    }

    decrease(index) {
        let newNumber = [...this.state.numbers];
        newNumber[index] -= 1;
        this.setState({numbers: newNumber});
    }

    render() {
        const { numbers } = this.state;
        let max = Math.max(...numbers);

        return(
            <>
                {numbers.map((number, index) => (
                    <Counter
                        key={ index }
                        highlighted={ number === max }
                        initial={ numbers[index] }
                        handleIncrease={ () => this.increase(index) }
                        handleDecrease={ () => this.decrease(index) }
                    />
                ))}
            </>
        );
    }
}

export default Max;