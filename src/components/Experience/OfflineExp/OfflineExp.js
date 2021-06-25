import React from 'react'
import './OfflineExp.css'
import Footer from './../../Footer/Footer';
import Header from './../../../Header';
import Hostels from './../../Hostels/Hostels';


function OfflineExp() {
    return (
        <div className="offlineexp">
            <Header/>
            <Hostels/>
            <Footer/>
        </div>
    )
}

export default OfflineExp
