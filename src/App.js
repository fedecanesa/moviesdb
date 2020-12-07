import './App.css';
import React, { Component } from 'react'
import Search from "./Components/Search"
import Results from './Components/Results'

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
        .then( jsonResponse => this.setState( {results: jsonResponse} ))
        .catch( error => console.log(error))
    }

    render() {
        return (
            <div className="App">
            
                <h1>React Movie Search</h1>
                    
                    <Search 
                        searchHandler={this.searchHandler} 
                        changeHandler={this.changeHandler}
                    />
                    
                    {this.state.results && (
                        <Results result={this.state.results}/>
                    )}

            </div>
        )
    }
}


