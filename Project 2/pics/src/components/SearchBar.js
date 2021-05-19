import React from 'react';

class SearchBar extends React.Component {  
        onInputChange(event) {
            // Event object
            console.log(event.target.value)
            // WIll be called automatically
        }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Image Search</label>
                        <input type="text"  onChange={this.onInputChange}/>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;