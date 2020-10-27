import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import {Nav, StyledLink} from '../../theme/Navbar.elements' 


import Burger from './Burger'

import BuyerHome from '../Buyer_Home/BuyerHome'
import Explore from '../Explore'
import Messages from '../Messages'
import Saved from '../Saved'
import Orders from '../Orders'
import Account from '../../Common/Account'
// import Categories from '../Buyer_Home/Category_Bar/Categories'



const BuyerNav = () =>{



    return(
        <Router>
            <Nav>
                <StyledLink to='/'>Home</StyledLink>
                <Burger />
            </Nav>
                <Switch>
                    <Route exact path='/' >
                        <BuyerHome />
                    </Route>
                    <Route path="/explore" exact component={Explore} />
                    <Route path="/messages" exact component={Messages} />
                    <Route path="/saved" exact component={Saved} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/account" exact component={Account} />
                </Switch>
            
        </Router>
    )
}

export default BuyerNav;