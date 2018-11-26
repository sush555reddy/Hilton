import React, { Component } from 'react';
const divierStyles = { color: "red" };
export default class AppImage extends Component {
    render() {
        return (
            <div className="image-container">
                <img className="image" src={this.props.imagePath} />
            </div>
        );
    }
}
