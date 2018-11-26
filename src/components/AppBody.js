import React, { Component } from 'react';
import AppImage from './AppImage';
import HotelImage from '../img/hotel.jpg';
import Address from './Address';
import NavBar from './NavBar';

const  hotelInfo={
    hotelName:"Hilton Chicago",
    hotelAddress1:"720 South Michigan Avenue",
    hotelAddress2:"Chicago, Illinois , 60605",
    telephoneNumber:"1-312-922-4400"
};

const navItems=[
    {text:"Map",path:''},
    {text:"Photo Gallery",path:''},
    {text:"Amenities",path:''}
];

export default class AppHeader extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Responsive Test App'
        };
    }

    render() {
        return (
            <div className="body">
            <AppImage imagePath={HotelImage}></AppImage>
            <Address hotelInfo={hotelInfo}></Address>
            <NavBar navItems={navItems}></NavBar>
            </div>
        );
    }
}
