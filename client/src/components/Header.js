import React, { Component } from 'react';
import {connect} from 'react-redux';
//import authUser from '../authReducer'

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return ;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return <li><a href="/api/Logout">Logout</a></li>
    }
  }

  render(){
    //console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Emaily</a>
          <ul  className="right hide-on-med-and-down">
            <li><a >{this.renderContent()}</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps)(Header);