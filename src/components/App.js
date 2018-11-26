import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import Logo from '../img/logo.png';

export default class ResponsiveApp extends Component {
    render() {
        return (
            <div className="app">
               <AppHeader title="Hotel Details" logo={Logo} />
               <AppBody />
               <AppFooter/>
            </div>
        );
    }
}
