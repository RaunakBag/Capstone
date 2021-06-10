import React from 'react'
import Footer from './Footer';
import Interests from './Interests'
import Banner from './Banner';
import Experiences from "./Experiences"


function Home() {
    return (
        <div className='home'>
            <Banner/>
            <Interests/>
            <Experiences/>
            <Footer/>
        </div>
    )
}

export default Home
