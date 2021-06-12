import React from 'react'
import Banner from './../Banner/Banner';
import Interests from './../Interest/Interests'
import Footer from './../Footer/Footer'
import Experiences from './../Experience/Experiences';
import Checkout from './../Checkout/Checkout';



function Home() {
    return (
        <div className='home'>
            <Banner/>
            <Interests/>
            <Experiences/>
            <Checkout/>
            <Footer/>
            </div>
    )
}

export default Home
