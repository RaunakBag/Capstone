import React from 'react'
import './Checkout.css'
import Map from './GMap/Map';
import Filters from './Filters/Filters';
import HostelList from './HostelList/HostelList';


function Checkout() {
    return (
        <div className="checkout">
            <Filters/>
            <HostelList/>
            <Map/>
        </div>
    )
}

export default Checkout
