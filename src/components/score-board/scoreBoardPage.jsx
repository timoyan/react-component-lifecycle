import React from 'react';
import _ from 'lodash';
import SinglePlayer from '../single-player/singlePlayerPage';

"use strict"

const demoPlayers = [
    {
        Name: 'Tom',
        Score: 60
    },
    {
        Name: 'Jerry',
        Score: 80
    }
];

class ScoreBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { players: demoPlayers };
    }

    render() {
        return (
            <div>
                {
                    this.state.players.map((v, idx) => {
                        return <SinglePlayer key={idx} name={v.Name} score={v.Score} changeScoreHandler={this.changeScore.bind(this)} />
                    })
                }
            </div>

        );
    }

    changeScore(playerName, scoreOffset) {

        if (typeof (scoreOffset) != "number" || scoreOffset === 0) {
            return;
        }

        const currentPlayerIndex = _.findIndex(this.state.players, function (o) { return o.Name === playerName; });

        if (currentPlayerIndex < 0) {
            return;
        }

        let currentPlayers = this.state.players;
        const currentPlayer = currentPlayers[currentPlayerIndex];

        currentPlayer.Score += scoreOffset;

        currentPlayer.Score = (currentPlayer.Score > 100) ? 100 : currentPlayer.Score;
        currentPlayer.Score = (currentPlayer.Score < 0) ? 0 : currentPlayer.Score;

        currentPlayers[currentPlayerIndex] = currentPlayer;
        this.setState({ players: currentPlayers });
        console.log(this.state.players);
    }
}

module.exports = ScoreBoard;