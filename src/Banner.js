import React from 'react'
import "./Banner.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Banner() {
    return (
        <div className="banner">
        <AliceCarousel autoPlay autoPlayInterval="3000">
         <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F08%2Fnishiyama-onsen-keiunkan-lobby-OLDESTHOTEL0718.jpg" className="sliderimg" alt=""/>
         <img src="https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2017/10/12/0/CI_Oldest_Hotels_Nishiyama_Onsen_Keiunkan.jpg.rend.hgtvcom.966.644.suffix/1507840326326.jpeg" className="sliderimg" alt=""/>
         <img src="https://www.wallpapertip.com/wmimgs/11-110347_beautiful-natural-scene-wallpaper-havasu-falls.jpg" className="sliderimg" alt=""/>
         <img src="https://cdn.wallpapersafari.com/31/4/mleRW6.jpeg" className="sliderimg" alt=""/>
         <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="sliderimg" alt=""/>
         <img src="https://i.pinimg.com/originals/cf/42/19/cf421926d3a79c75775a35c4e75694f8.jpg" className="sliderimg" alt=""/>
         {/* <img src="https://i.redd.it/cbg04vtaxq231.jpg" className="sliderimg" alt=""/> */}
       </AliceCarousel>
       </div>
    )
}

export default Banner
