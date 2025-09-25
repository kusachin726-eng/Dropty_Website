import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from '../components/Header'
import About from '../components/About'
import ExclusiveSection from '../components/ExclusiveSection'
import InstantQuote from '../components/InstantQuote'
import MobileServices from '../components/MobileServices'
import Questions from '../components/Questions'
import Footer from '../components/Footer'
import OurServices from '../components/OurServices'
import OfferServices from '../components/OfferServices'
import App from '../App'

const RouteConfig = () => {
  return (
    <div>
       <Router>
              <Routes>
                     {/* <Route path='/'element={Header}/>
                     <Route path='/about' element={About}/>
                     <Route path='/exclusive-section'element={ExclusiveSection}/>
                     <Route path='/instantQuote'element={InstantQuote}/>
                     <Route path='/mobile-services'element={MobileServices}/>
                     <Route path='/questions'element={Questions}/>
                     <Route path='/footer'element={Footer}/>
                     <Route path='/our-services'element={OurServices}/>
                     <Route path='/offer-services'element={OfferServices}/> */}
                     {/* <Route path='/' element={App}/> */}
              </Routes>
       </Router>
      
    </div>
  )
}

export default RouteConfig
