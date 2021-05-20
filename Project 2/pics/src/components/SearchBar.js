import React from 'react';

class SearchBar extends React.Component {  
    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();
        // Browser doesnt auto refresh.
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label> Image Search</label>
                        <input 
                        type="text"
                        value={this.state.term}
                        // value is what is the value of text.
                        // Value just overrides the text to get the Value
                        onChange={e => this.setState({ term: e.target.value})}
                        />                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;