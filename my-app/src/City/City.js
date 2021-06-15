import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './City.css';
export default class City extends Component {
    render() {
        const{city,img,name} = this.props.city;
        return (
            <article className ="city" >
                <div className = " ïmg-container">
               
                       <Link to = "/page">
                       <img src= {img}/>
                   <h4>{name}</h4> 
                   </Link>    
               </div>
               
            </article>
            );
    }
}

