import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
import { FiPlus } from 'react-icons/fi';


export function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={ mapMarkerImg } alt="marker"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>
          Muitas crianças estão esperando a sua visita :)
          </p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>RJ</span>
        </footer>
      </aside>

      <Map
        center={[-22.8919959, -43.392362]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>

      <Link to="REPLACEME" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}