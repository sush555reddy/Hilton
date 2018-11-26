import React, { Component } from 'react';
export default class Address extends Component {
    render() {
        return (
            <div className="address-container">
                <div className="address-hotel-name">{this.props.hotelInfo.hotelName}</div>
                <div className="address-hotel-address">{this.props.hotelInfo.hotelAddress1}</div>
                <div className="address-hotel-address">{this.props.hotelInfo.hotelAddress2}</div>
                <div className="address-hotel-telephone">{this.props.hotelInfo.telephoneNumber}</div>
            </div>
        );
    }
}
