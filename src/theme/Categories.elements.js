import styled from 'styled-components';

import {Link} from 'react-router-dom'



export const Category = styled.nav`
    background: ${props => props.theme.colors.coral};
    color: ${props => props.theme.colors.ghost};
    height: 100vh;
    width: 20vw;
    /* border-top: 5px solid; */
    border-left: 5px solid;
    border-color: black;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    z-index: 0;

    h3{
        display: inline-block;
        /* justify-content: flex-end; */
        color: ${props => props.theme.colors.ghost};
        font-size: 1.2rem;
        font-family: 'sans-serif';
        text-decoration: none;
        padding: 1.5rem  1.8rem;
    }
`

export const CatList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    align-items: right;
    list-style: none;
`

export const CatLink = styled(Link)`
    display: inline-block;
    justify-content: flex-end;
    color: ${props => props.theme.colors.ghost};
    font-size: 1.2rem;
    /* font-weight: bold; */
    font-family: 'sans-serif';
    text-decoration: none;
    padding: 1.5rem  1.8rem;
    /* cursor: pointer; */
`

// export const StyledPlus = styled.div`
//     width: 1rem;
//     height: 1rem;
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     display: none;
//     justify-content: space-around;
//     flex-flow: column nowrap;
//     z-index: 999;
// `