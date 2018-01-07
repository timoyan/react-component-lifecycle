import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoardPage from './components/score-board/scoreBoardPage';

(function (win) {
    "use strict";

    class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>React Component Lifecycle</h1>
                    <ScoreBoardPage />
                </div>
            );
        }
    }

    ReactDOM.render(<App />, document.getElementById("app"));
})(window);