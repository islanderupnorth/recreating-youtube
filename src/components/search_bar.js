import React, { Component } from 'react';

// Because we wanted this component to communicate we upgraded it to a CLASS COMPONENT
class SearchBar extends Component {
    constructor(props) {
        super(props);
        //only time you will write this.state -- this.setState to manipulate
        this.state = { term: '' };
    }

    render () {
        return (
            <div className="search-bar">
                <input
                    value={ this.state.term }
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
