import React, { Component } from 'react';
import axios from "axios" 

class CreateUser extends Component {
    constructor(props){
        super(props)

        this.onChageUsername = this.onChageUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            username: ""
        }
    }

    onChageUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {username: this.state.username}
        
        axios.post("http://localhost:5000/users/add",user)
        .then(res=>{console.log(res.data)
            alert('Le nom a été soumis : ' + this.state.username);})
        .catch(err=>console.error("Cannot create user"))
        
        this.setState({
            username:""
        })
    }

    render() { 
        return ( 
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.username} 
                            onChange={this.onChageUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create value" className="btn btn-primary"/> 
                    </div>
                </form>
            </div>
         );
    }
}
 
export default CreateUser;