import React, { Component } from 'react';
import axios from 'axios'; 
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router';


class GitHub extends Component {    
    
    constructor(){
        super();  
        this.state = {
            data: [],
            searchTerm:'',
            isLoading : false            


        }; 


        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  


    }


    componentDidMount(){
        //this.getGitHubData('greg');
    }




    getGitHubData(_searchTerm){                
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => {   
                this.setState({
                    isLoading : false, 
                    data: res.data.items                                  
                })                             
                console.log(res.data.items); 
            });             
    }          


    render() { 
        const listUsers = this.state.data.map(user =>             
            <Media key={user.id}> 
                <Link to={`/github/user/${user.login}/${user.score}`}>
                    <img width={64} height={64} src={user.avatar_url}
                    alt="Image"/>
                </Link>
                <Media.Body>
                    <h5>{user.login}</h5>
                    <p>Score: { user.score }</p>
                </Media.Body>
            </Media> 
            );        


        return (
        <div>
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Group controlId="formInlineName">                                    
                    <Form.Control 
                        type="text" 
                        value={this.state.searchTerm} 
                        placeholder="Enter Search Term" 
                        onChange={this.handleChange}
                    />
                </Form.Group>                            
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>                 


            <h3>GitHub Users Results</h3>
            { this.state.isLoading &&                                             
                <ReactLoading type="spinningBubbles" color="#444" /> 
            }  
            {listUsers}                                                                                            
        </div>
        );
    }
    
    handleSubmit(e) {
        e.preventDefault();    
        this.setState({
            isLoading : true          
        })                
        this.getGitHubData(this.state.searchTerm);        
    }


    handleChange(e) {
        this.setState({ searchTerm: e.target.value });        
    }


    
}
export default GitHubUser;