import React from 'react';

"use strict";

class SinglePlayer extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = { isPassed: false };
    }

    componentWillMount() {
        this.setState({ isPassed: this.props.score >= 60 });
    }

    changeScore(scoreOffset){
        this.props.changeScoreHandler(this.props.name, scoreOffset);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h5><span>Name: </span> {this.props.name}</h5>
                <p><span>Score: </span> <em>{this.props.score}</em></p>
                <p><span>Pass: </span> <input type="checkbox" defaultChecked={this.state.isPassed} disabled={true} /></p>
                <button onClick={this.changeScore.bind(this, 5)}>+5</button>
                <button onClick={this.changeScore.bind(this, -5)}>-5</button>
            </div>
        );
    }
}

module.exports = SinglePlayer;

