import React, { Component } from 'react'
import Result from './Result'


export default class Results extends Component {
    render() {  
        return (
            <section className="results">
                <Result result={this.props.results} />    
            </section>
	    )
    }        
}