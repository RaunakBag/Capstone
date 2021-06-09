import React from 'react'
import "./Experiences.css"

function Experiences() {
    return (
        <div className="experiences">
            <h1>Discover Experiences</h1>
            <p>Unique activities with local experts - in person or online</p>
            <div className="experiences__cards">
                <div className="online__experiences">
                    <img src="https://cdn.mos.cms.futurecdn.net/Jmrz3TezxjxfeTmh4gLaNL.jpg" alt=""/>
                    <p>Online Experiences</p>
                </div>
                <div className="offline__experiences">   
                    <img src="https://3di9nx2pw3s1jibo2g8ef7wo-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/36315425082_7409d3a3dc_k-1024x683.jpg" alt=""/>
                    <p>Experiences</p>
                </div>
            </div>
        </div>
    )
}

export default Experiences
