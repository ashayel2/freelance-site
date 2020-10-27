import React,{useState} from 'react'

import {StyledBurger} from '../../theme/Navbar.elements'
import RightBuyerNav from './RightBuyerNav'


const Burger = () => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <RightBuyerNav open={open} />
        </div>

    )
}

export default Burger