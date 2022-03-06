import React, { Component } from 'react';
import axios from 'axios';
import ListOfMatches from "./Components/ListOfMatches";
import Nav from "./Components/Nav";
import Users from "./Components/Users";
import Pets from "./Components/Pets";
import Form from "./Components/Form"

//https://reactjs.org/docs/forms.html

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            matches: [],
            users: [],
            pets: [],
            newUser: false
        };
        this.loadApiUsers = this.loadApiUsers.bind(this);
        this.loadApiPets = this.loadApiPets.bind(this);
        this.destroy = this.destroy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const matches = (await axios.get('/api/matches')).data;
        this.setState({ matches })
    }

    async loadApiUsers() {
        try {
            const users = (await axios.get('/api/users')).data;
            this.setState({ users, pets:[] });
        }
        catch(ex){
            console.log(ex);
        }
    }

    async loadApiPets(){
        try {
            const pets = (await axios.get('/api/pets')).data;
            this.setState({ pets, users:[] });
        }
        catch(ex){
            console.log(ex);
        }
    }

    async destroy(match) {
        await axios.delete(`/api/matches/${match.id}`);
        const matches = this.state.matches.filter(_match => _match.id !== match.id);
        this.setState({ matches });
    }

    async handleSubmit(e) {
        const response = (await axios.post(`/api/matches`, {
            userName: e.target.userName.value,
            userBio: e.target.userBio.value,
            petName: e.target.petName.value,
            petBreed: e.target.petBreed.value,
            petAge: e.target.petAge.value,
            petImgUrl: e.target.petImgUrl.value
        })).data

        this.componentDidMount();
    }

    render() {
        const { matches, users, pets } = this.state;
        
        const Component = () => {
            if (matches.length > 0 && users.length === 0 && pets.length === 0) return <ListOfMatches matches={matches} destroy={ this.destroy } />;
            if (users.length > 0 && matches.length >= 0 && pets.length === 0) return <Users users={users} /> ;
            if (pets.length > 0 && matches.length >= 0 && users.length === 0) return <Pets pets={ pets } />;
            if (matches.length === 0 ) return <div className="error">No Matches</div>;
        }

        return (
            <div>
                <Nav loadApiUsers={ this.loadApiUsers } loadApiPets={ this.loadApiPets } />
                <Form handleSubmit={this.handleSubmit}/>
                <Component />
            </div>
        )
    }
}

export default App;