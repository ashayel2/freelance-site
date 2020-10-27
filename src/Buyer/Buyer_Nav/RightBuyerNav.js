import React from 'react';

// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import {Nav, LinkLists, StyledLink} from '../../theme/Navbar.elements' 






const RightBuyerNav = ({open}) => {
    return (
        <LinkLists open={open}>
            <li>
                <StyledLink to='/explore'>Explore</StyledLink>
            </li>
            <li>
                <StyledLink to='/messages'>Messages</StyledLink>
            </li>
            <li>
                <StyledLink to='/saved'>Saved</StyledLink>
            </li>
            <li>
                <StyledLink to='/orders'>Orders</StyledLink>
            </li>
            <li>
                <a href="#">Switch to selling</a>
            </li>
            <li>
                <StyledLink to='/account'>Account</StyledLink>
            </li>
            
        </LinkLists>
    )
}


export default RightBuyerNav