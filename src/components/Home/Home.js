import React from 'react'
import Banner from './../Banner/Banner';
import Interests from './../Interest/Interests'
import Footer from './../Footer/Footer'
import Experiences from './../Experience/Experiences';
import Checkout from './../Checkout/Checkout';
import Hostels from './../Hostels/Hostels';



function Home() {
    return (
        <div className='home'>
            <Banner/>
            <Interests/>
            <Experiences/>
            <Hostels/>
            <Checkout/>
            <Footer/>
            </div>
    )
}

export default Home
