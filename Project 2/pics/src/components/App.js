// import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = {images: [] }

    onSearchSubmit = async (term) => {
        // first part is the path.
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term },
            headers:{
                Authorization: 'Client-ID wbUFv2Js1Jj44rvYmAS6IkkNshGq-XSyisvj1SMVYYw'
            }
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (            
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App