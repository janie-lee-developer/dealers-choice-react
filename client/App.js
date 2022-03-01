import React, { Component } from 'react';
import axios from 'axios';
import ListOfMatches from "./Components/ListOfMatches";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            matches: []
        }
    }

    async componentDidMount() {
        const response = (await axios.get('/api/matches')).data;
        this.setState({ matches: response })
    }

    render() {
        const { matches } = this.state

        return (
            <div>
                hello
                {matches.length !== 0 ?
                    <ListOfMatches matches={matches} /> :
                    <div>No Matches Found</div>
                }
            </div>
        )
    }
}

export default App;