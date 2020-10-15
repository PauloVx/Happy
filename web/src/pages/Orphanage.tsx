import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import {api} from '../services/api';
import { Orphanage as OrphanageType } from '../types/Orphanage';

import { Sidebar } from "../components/Sidebar";
import '../styles/pages/orphanage.css';
import { mapIcon } from "../utils/mapIcon";

interface OrphanageParams {
  id: string;
}

export function Orphanage() {
  const [orphanage, setOrphanage] = useState<OrphanageType>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const params = useParams<OrphanageParams>();

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then(res => {
      setOrphanage(res.data);
    });
  }, [params.id]);

  if(!orphanage) return <p>Loading...</p>

  function handleImageSelection(index: number) {
    setActiveImageIndex(index);
  }

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt="Imagem principal" />

          <div className="images">
            {
              orphanage.images.map((image, index) => {
                return (
                  <button className={index === activeImageIndex ? "active" : ""} type="button" key={image.id} onClick={() => handleImageSelection(index)}>
                    <img src={image.url} alt="Imagem orfanato" />
                  </button>
                )
              })
            }
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${ orphanage.longitude}`} rel="noopener noreferrer" target="_blank">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {
                orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </div>
                ) : (
                  <div className="open-on-weekends not-open">
                    <FiInfo size={32} color="#FF669D" />
                    Não Atendemos <br />
                    fim de semana
                  </div>
                )
              }
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}