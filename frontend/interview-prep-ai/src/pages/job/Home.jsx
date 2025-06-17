import React from 'react'
import Navbar from '../../components/jobComponents/Navbar'
import Hero from '../../components/jobComponents/Hero'
import JobListing from '../../components/jobComponents/JobListing'
import AppDownload from '../../components/jobComponents/AppDownload'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload />
        <Footer/>
    </div>
  )
}

export default Home