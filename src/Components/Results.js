import React, { Component } from 'react'

export default class Results extends Component {
    
    render() {  
        const { result } = this.props;
        return (
            result && (
                <section className="resuls-list" >
                    <div className="result" key={result.id}>
                   
                    {
                        result.name && (
                            <h3>{result.name} <span>Score: {result.score}</span></h3>  
                        ) 
                    }
                    {
                        result.image && result.image.medium && (
                            <img src={result.image.medium} alt={result.name} />
                        )
                    }
                    {

                    }
    
                    </div>
                </section>
                
            )    
            
	    )
    }        
}