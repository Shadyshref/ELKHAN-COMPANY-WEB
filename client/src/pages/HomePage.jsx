import React, { Fragment } from 'react'
import Description from '../components/Description'
import Companys from '../components/Companys'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
<Fragment>
    <Description/>
    <Companys/>
    <Projects/>
    <Footer/>
</Fragment>
  )
}

export default HomePage
