import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import Media  from 'react-bootstrap/Media';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap';
import FormControl from 'react-bootstrap';
import Button from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';


class GitHub extends Component { 
    
    constructor(){
    super();
        this.state = {
            data: [],
            searchTerm:'',
            isLoading : false 
        };
        
    }
    getGitHubData(_searchTerm){ 
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => { 
                this.setState({
                    isLoading : false, 
                    data: res.data.items 
                }) 
            }); 
    } 
    render() { 
        const listUsers = this.state.data.map((user) => 
            <Media key={user.id}>
                <img
                width={64}
                height={64}
                className="mr-3"
                src={ user.avatar_url }
                alt="Image"
                />
            <Media.Left>
                <a href={user.html_url}>
                    <img width={64} height={64} src={user.avatar_url}
                    alt="Image"/>
                </a>
            </Media.Left>
            <Media.Body>
                <Media.Heading>{user.login}</Media.Heading>
                <p>Score: { user.score }</p>
            </Media.Body>
            </Media> 
        );
    return (
    <div>
        <h3>GitHub Users Results</h3>
        { this.state.isLoading && 
            <ReactLoading type="spinningBubbles" color="#444" />
        }
        {listUsers}
    </div>
    );
    } 
}
export default GitHub;