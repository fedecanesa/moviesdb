import React, { Component } from 'react'
import Result from './Result'


export default class Results extends Component {
    render() {  
        return (
            <section className="results">
                {
                    this.props.results.map(result => (
                        <Result result={result} key={result.id}/>    
                    ))
                }
            </section>
	    )
    }        
}