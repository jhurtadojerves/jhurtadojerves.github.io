/** SmartComponent to Home */

/** Libraries import */
import React, { Component } from 'react'

/** Other Components imports */
import HomeLayout from '../components/Home'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

/** Data imports */
import user from '../assets/json/user.json'
import projects from '../assets/json/projects.json'


class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Header 
          {...user}
        />
        <AboutMe 
          {...user.about}
        />
        <Portfolio 
          projects={ projects }
        />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home
