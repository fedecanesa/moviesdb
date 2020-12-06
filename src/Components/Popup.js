import React, { Component } from 'react'

export default class Popup extends Component {
    render() {
        const { result } = this.props;
        return (
            <section className="popup">
                <div className="content">
                    <h2>{ result.show.name } <span>Score: {result.score}</span></h2>
                    <p className="rating"> Rating: { result.show.rating.average }</p>
                    <div className="plot">
                        <img src={result.show.image.medium} alt={result.show.name}/>
                        <p>{result.show.summary}</p>
                        <p>Official Site: {result.show.officialSite}</p>
                    </div>
                    <button className="close">Close</button>
                </div>
		    </section>
        )
    }
}
