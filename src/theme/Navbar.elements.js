

import styled from 'styled-components'
import {Link} from 'react-router-dom'

// import {Container} from ''


// Navigation Bar Style

export const Nav = styled.nav`
    background: ${props => props.theme.colors.coral};
    color: ${props => props.theme.colors.ghost};
    height: 80px;
    display: flex;
    border-bottom: 5px solid black;
    justify-content: space-between;
    align-items: center;
    /* font-size: 1.2 rem; */
    position: sticky;
    top : 0;
    z-index: 1;
`

// Nav Linklist Style

export const LinkLists = styled.ul`
        display: flex;
        /* justify-content: right; */
        flex-flow: row nowrap;
        align-items: right;
        list-style: none;

        a{
            display: inline-block;
            justify-content: flex-end;
            color: ${props => props.theme.colors.ghost};
            font-size: 1.2rem;
            /* font-weight: bold; */
            font-family: 'sans-serif';
            text-decoration: none;
            padding: 1.5rem  1.8rem;
        }


        @media (max-width: 768px){
            
            flex-flow: column nowrap;
            background-color: ${props => props.theme.colors.beau};
            position: fixed;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)' };
            top: 0;
            right: 0;
            z-index: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3rem;
            transition: transform 0.3s ease-in-out;
        }
` 

// Nav Links

export const StyledLink = styled(Link)`
    display: inline-block;
    justify-content: flex-end;
    color: ${props => props.theme.colors.ghost};
    font-size: 1.2rem;
    /* font-weight: bold; */
    font-family: 'sans-serif';
    text-decoration: none;
    padding: 1.5rem  1.8rem;


    @media (max-width: 768px){
        color: ${props => props.theme.colors.ghost};
    }
`

// HamBurger

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 20px;
    right: 20px;
    display: none;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999;

    @media (max-width: 768px){
        display: flex;
    }
    
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open? '#495867' : '#f7f7ff' };
        border-radius: 10px;
        transition: all 0.3s ease-in-out;


        &:nth-child(1){
            transform: ${({open}) => open? 
                'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({open}) => open? 
                'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open}) => open? 
                'rotate(135deg)' : 'rotate(0)'};
        }
    }
    
    
`



// export const NavbarContainer = styled(Container)`
//     display: flex;
//     justify-content: space-between;
//     height: 80px;


//     /* $(Container) */
// `