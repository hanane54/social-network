import React from "react";
// import Nav from  'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import styles from "./Navigation.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '../ui/Button'

function UserNavigationSection() {
    return (
    
    <>
        <Nav justify variant="tabs">
        <NavItem>
            <NavLink to="/my-profile">Posts</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/my-profile/questions" >Questions</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/my-profile/comments" >Comments</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/my-profile/followers" >Followers</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/my-profile/followings" >Followings</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/my-profile/help" >Help</NavLink>
        </NavItem>
        </Nav>
    </>
    );
}
export default UserNavigationSection;