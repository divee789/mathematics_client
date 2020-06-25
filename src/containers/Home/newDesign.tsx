import React from 'react';

import NavBar from '../../components/NavBar/newBar'
import Header from '../../components/Landing/Header'
import Process from '../../components/Landing/Process'
import Leadership from '../../components/Landing/Staff'
import Contact from '../../components/Landing/Contact'
import Footer from '../../components/Landing/Footer'

import './newDesign.scss'
const Home = props => {
    return (
        <>
            <NavBar />
            <Header />
            <Process />
            <Leadership />
            <Contact />
            <Footer />
        </>
    )
}

export default Home