import React from 'react';


import { Link } from 'react-router-dom';

import image from '../assets/oldman.png';


import "../styles/Home.css";

import mapboxgl from 'mapbox-gl'

function Home() {
  return (
    <div className='home' id='home'>

      <div className='intro'>
        <div className='left'>
          <img src={image} className="profile"/>
        </div>

        <div className='right'>
          <h1> Carl Fredricksen </h1>
          <p> Trondheim, Norway </p>
          <p> Bergsbakken 9</p>
          <p> +4798765432 </p>
        </div>
      </div>

    <div> 
      <p> </p>
    </div>

    <div className='introduction'>
    <p> </p>
    <div class="activity lead">
        <div class="blink">🔴</div>
    <div>
    <b>ElderGuard AI active</b>
    </div>
    </div>

    </div>
      

    </div>
  )
}

export default Home