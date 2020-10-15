import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { api } from '../services/api';

import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import { mapIcon } from '../utils/mapIcon';
import '../styles/pages/orphanages-map.css';

import { Orphanage } from '../types/Orphanage';

export function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Array<Orphanage>>([]);

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);


  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to="/">
            <img src={mapMarkerImg} alt="Happy" />
          </Link>

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

        {
          orphanages.map(orphanage => {
            return(
              <Marker key={orphanage.id} position={[ orphanage.latitude, orphanage.longitude ]} icon= { mapIcon }>
                <Popup className="map-popup" closeButton={ false } minWidth={240} maxWidth={240}>
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`} className="popup-link">
                    <FiArrowRight size={20} color="#FFF"/>
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}