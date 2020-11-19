import React, { Component } from "react";
import bell from '../images/bell.png'
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
        <button  style={{border: "none",outline:"none"}}onClick={() => {this.wrapperRef.current.style.display="block";}}><img src={bell} width="20px" height="20px" alt="notify"/></button>
        <div ref={this.wrapperRef}  style={{
            width: "60%",
            position: "absolute",
            top: "60px",
            left:"750px",
            display:"none"
          }}>
        <div class="row">
    <div class="col-md-6 col-xs-12 col-md-offset-3">
      <div class="panel">
        <div class="panel-body">
          <ul class="list-group list-group-dividered list-group-full">
             {/* <!--Start of notif 1--> */}
            <li class="list-group-item">
              <div class="media">
                 
                <div class="media-body">
                 
                  <small class="text-muted pull-right">Just now</small>
                  <h4 class="media-heading">@Ramon Dunn</h4>
                  <div>Lorem ipsum Veniam aliquip</div>
                </div>
              </div>
            </li>
             {/* <!--End of notif 1--> */}
             <li class="list-group-item">
              <div class="media">
                 
                <div class="media-body">
                 
                  <small class="text-muted pull-right">Just now</small>
                  <h4 class="media-heading">@Ramon Dunn</h4>
                  <div>Lorem ipsum Veniam aliquip</div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="media">
                 
                <div class="media-body">
                 
                  <small class="text-muted pull-right">Just now</small>
                  <h4 class="media-heading">@Ramon Dunn</h4>
                  <div>Lorem ipsum Veniam aliquip</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
        </div>
        </div>
     
    );
  }
}

export default ReduxnotificationCenter;