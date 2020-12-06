import React, { Component } from 'react'


export default class Result extends Component {


    render() {
        const { result } = this.props;
        return (           
            <div className="result" >
                    <a 
                        href="/popup"
                        onClick={this.handleClickProfile}
                    >
                        <img src={result.show.image.medium} alt={result.show.name} />
                        <h3>{result.show.name}</h3>
                    </a>
                    
                {console.log(result)}
            </div>
        )
    }
}
