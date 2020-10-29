import React from 'react'


import {CatList, CatLink} from '../../../theme/Categories.elements'


const CategoryList = () =>{
    return (
        <CatList>
            <li>
                <CatLink to='/'>All</CatLink>
            </li>
            <li>
                <CatLink to='/design_and_creative'>Design and Creative</CatLink>
            </li>
            <li>
                <CatLink to='/web_and_software'>Web and Software Design</CatLink>
            </li>
            <li>
                <CatLink to='/digital_marketing'>Digital Marketing</CatLink>
            </li>
            <li>
                <CatLink to='/engineering_and_architect'>Engineering and Architect</CatLink>
            </li>
            <li>
                <CatLink to='/music_and_audio'>Music and Audio</CatLink>
            </li>
            <li>
                <CatLink to='/business'>Business</CatLink>
            </li>
            <li>
                <CatLink to='/writting_and_translation'>Writting and Translation</CatLink>
            </li>
            <li>
                <CatLink to='/research'>Research</CatLink>
            </li>
        </CatList>
    )
}


export default CategoryList