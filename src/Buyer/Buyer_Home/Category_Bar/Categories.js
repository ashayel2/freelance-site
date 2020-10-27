import React from "react"

import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';


import {Category} from '../../../theme/Categories.elements'

// import BuyerHome from '../../Buyer_Home/BuyerHome'
import Business from '../../Category_Pages/Business/Business'
import DesignAndCreative from '../../Category_Pages/Design_and_Creative/DesignAndCreative'
import DigitalMarketing from '../../Category_Pages/Digital_Marketing/DigitalMarketing'
import EngineeringAndArchitect from '../../Category_Pages/Engineering_and_Architect/EngineeringAndArchitect'
import MusicAndAudio from '../../Category_Pages/Music_and_Audio/MusicAndAudio'
import Research from '../../Category_Pages/Research/Research'
import WebAndSoftware from '../../Category_Pages/Web_and_Software/WebAndSoftware'
import WrittingAndTranslation from '../../Category_Pages/Writting_and_Translation/WrittingAndTranslation'

import CategoryList from './CategoryList'
import Search from './Search'
// import CategorySwitch from './CategorySwitch'

const Categories =()=> {
    return (
        <Router>
            <Category>
                <Search />
                <h3>Categories</h3>
                <CategoryList />
            </Category>
            <Switch>
                {/* <Route path="/" exact component={BuyerHome} /> */}
                <Route path="/business" exact component={Business} />
                <Route path="/design_and_creative" exact component={DesignAndCreative} />
                <Route path="/digital_marketing" exact component={DigitalMarketing} />
                <Route path="/engineering_and_architect" exact component={EngineeringAndArchitect} />
                <Route path="/music_and_audio" exact component={MusicAndAudio} />
                <Route path="/research" exact component={Research} />
                <Route path="/web_and_software" exact component={WebAndSoftware} />
                <Route path="/writting_and_translation" exact component={WrittingAndTranslation} />
            </Switch>
        </Router>
    )
}

export default Categories