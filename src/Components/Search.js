import React, { Component } from 'react'


export default class Search extends Component {
 
    render() {
        return (
            <section className="searchbox">
                <input 
                    type="text"
                    name="search" 
                    placeholder="Search a movie..." 
                    className="searchbox-input" 
                    onChange={this.props.changeHandler}
                />
                <button 
                    className="searchbox-button" 
                    onClick={this.props.searchHandler}>
                        <i className="fas fa-search"/> Search
                </button>
            </section>
        )
    }
}

