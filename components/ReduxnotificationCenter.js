import React, { Component } from "react";
import { MDBNotification,MDBContainer } from "mdbreact";
class ReduxnotificationCenter extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
             this.wrapperRef.current.style.display="none";
        }
    }
   
  render() {
    return (
        <div>
        <button to="/notif" onClick={() => {this.wrapperRef.current.style.display="block";}}>Notify</button>
        <div ref={this.wrapperRef} style={{display: "none" }}>
        
        <MDBContainer 
        // Edit this style according to the navbar
        style={{
          width: "auto",
          position: "fixed",
          top: "50px",
          right: "100px",
          zIndex: 9999
        }}
      >
      <MDBNotification
        // by default = ∞ ms
        bodyClassName="p-2 font-weight-bold white-text"
        className="stylish-color-dark"
        closeClassName="blue-grey-text"
        fade
        icon="bell"
        iconClassName="blue-grey-text"
        message="Hello, world! This is a toast message."
        show
        text="11 mins ago"
        title="Bootstrap"
        titleClassName="elegant-color-dark white-text"
       
      />
      <MDBNotification
        // by default = ∞ ms
        bodyClassName="p-2 font-weight-bold white-text"
        className="stylish-color-dark"
        closeClassName="blue-grey-text"
        fade
        icon="bell"
        iconClassName="blue-grey-text"
        message="Hello, world! This is a toast message."
        show
        text="11 mins ago"
        title="Bootstrap"
        titleClassName="elegant-color-dark white-text"
        
      />
     </MDBContainer>
     </div>
     </div>
     
    );
  }
}

export default ReduxnotificationCenter;