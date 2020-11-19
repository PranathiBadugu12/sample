import React, { Component } from 'react'
import axios from 'axios';
export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            userId : ""
        }
        this.updateInput = this.updateInput.bind(this);
        this.validate = this.validate.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/Sheet1`)
          .then(res => {
            const userss = res.data;
            this.setState({ users : userss});
          })
      }
      
      updateInput(event){
        this.setState({userId : event.target.value})
        }
    validate(){
       var temp = this.state.userId
       var i = 0
        for(i = 0; i < this.state.users.length; i++) {
            var obj = this.state.users[i];
            if(temp == obj.CustomerId)
            {
                alert("Valid User")
                break
            }
        }
        if(i >= this.state.users.length){
        alert("Invalid Users")
        }
        
    }
   
   render() {
      return (
         <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Id </label>
                    <input onChange={this.updateInput} type="text" className="form-control" placeholder="Enter User Id" required/>
                </div>


                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={this.validate}>Submit</button>
                
            </form>
         </div>
      )
   }
};
