import './App.css';
import React, { Component } from 'react'
import Search from "./Components/Search"
import Results from './Components/Results'
/* import Popup from './Components/Popup' */
/* import {BrowserRouter as Router, Switch} from "react-router-dom" */


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            results: [],
            selected: {},
            search: ""
            
        }
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

  
    searchHandler = () => {
        const {search} = this.state;

        fetch(`http://localhost:4000/search/shows/${search}`)
        .then( response => response.json() )
        .then( jsonResponse => {
            console.log(jsonResponse)
            this.setState({results: jsonResponse})
        })
        .catch( error => console.log(error))
    }

    render() {
        return (
            <div className="App">
            
                <header className="App-header">
                    <h1>Movie API</h1>
                </header>
                <main>
                    <Search 
                        searchHandler={this.searchHandler} 
                        changeHandler={this.changeHandler}
                    />
                    
                    {this.state.results && (
                        <Results results={this.state.results}/>
                    )}

                </main> 
            </div>
        )
    }
}


