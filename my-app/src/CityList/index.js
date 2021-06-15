import React, { Component } from 'react';
import City from '../City/City';
import './CityList.css'
import { cityData }from "./cityData";

export default class CityList extends Component {
    state={
        cities: cityData
    }
    render () {
        const {cities} = this.state;
        
        return (
            <section className = "citylist">
             {cities.map(city =>{
                 return(
                     <City key= {city.id} city={city} />
                 )
             })}
            </section>
        )
    }
}