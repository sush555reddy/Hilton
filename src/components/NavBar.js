import React, { Component } from 'react';
export default class NavBar extends Component {

    renderNavItem(item) {
        return (<li key={item.text}><a  href={item.path}>{item.text}</a></li>);
    }
    render() {
        var items = [];
        this.props.navItems.forEach(element => {
            items.push(this.renderNavItem(element));
        });

        return (
            <div className="nav-bar">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
