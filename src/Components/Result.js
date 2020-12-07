import React, { Component } from 'react'


export default class Result extends Component {

    render() {
        const { result } = this.props;
        console.log(result)
        return (
            result && (
                <div className="result" key={result.id}>
                {
                    result.image && result.image.medium && (
                        <img src={result.image.medium} alt={result.name} />
                    )
                }
                {
                    result.name && (
                        <h3>{result.name}</h3> 
                    )
                    
                }
                {console.log(result.name)}
                </div>
            )           
           
        )
    }
}
