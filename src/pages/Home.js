import React from 'react';


import { Link } from 'react-router-dom';

import image from '../assets/oldman.png';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


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

    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""
    />
    <div className="map">
      <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>

    </div>
      

    </div>
  )
}

export default Home