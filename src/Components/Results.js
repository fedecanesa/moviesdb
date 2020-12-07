import React, { Component } from 'react'

export default class Results extends Component {
    
    render() {  
        const { result } = this.props;
        return (
            result && (
                <section className="resuls-container" >
                    <div className="result-card" key={result.id}>
                    {
                        result.image && result.image.medium && (
                            <div className="result-image">
                                <img src={result.image.medium} alt={result.name} />
                            </div>   
                        )
                    }
                   
                    {
                        result.name && (
                            <div className="result-information">
                                <h3 className="result-title">{result.name}</h3>
                                <p className="rating"> Rating: { result.rating.average }</p>
                                <p>Sumary: <span>
                                    {result.summary}
                                </span>
                                    </p>
                                <p>Official Site: 
                                   <a href={result.officialSite}>{result.officialSite}</a> </p> 
                            </div> 
                        ) 
                    }
    
                    </div>
                </section>
                
            )    
            
	    )
    }        
}