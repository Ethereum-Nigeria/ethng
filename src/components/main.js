import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../pages/navbar'
import About from '../pages/about'
import Contact from '../pages/contact'


import Section from '../pages/section'

const Main = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={ Section } />
          <Route path='/about'  component={ About } />
          <Route path='/contact' exact component={ Contact } />
        </Switch>
        <Navbar />
      </Router>
    </>
  )
}

export default Main
