import React, { Component } from 'react';
export default class AppHeader extends Component {
    render() {
        return (
            <div className="header">
               <div className="left-block">
               <button className="back-button">Back</button>
               </div> 
               <div className="middle-block">
               <div>{this.props.title} </div>
               </div>
                <div className="right-block">
                <img className="logo" src={this.props.logo} />
                </div>
            </div>
        );
    }
}
