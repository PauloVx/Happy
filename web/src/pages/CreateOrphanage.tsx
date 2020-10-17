import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from "react-icons/fi";
import { Sidebar } from "../components/Sidebar";

import { mapIcon } from "../utils/mapIcon";
import '../styles/pages/create-orphanage.css';
import { api } from "../services/api";

export function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<Array<File>>([]);
  const [previewImages, setPreviewImages] = useState<Array<string>>([]);


  function handleMapClick(event: LeafletMouseEvent) {
    setPosition({
      latitude: event.latlng.lat,
      longitude: event.latlng.lng
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('whatsapp', whatsapp);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach(img => {
      data.append('images', img);
    });

    await api.post('/orphanages', data);

    alert('Cadastro realizado com sucesso!');
    history.push('/app');
  }

  function handleImageSelection(e: ChangeEvent<HTMLInputElement>) {
    if(!e.target.files) return;

    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(img => {
      return URL.createObjectURL(img);
    });

    setPreviewImages(selectedImagesPreview);
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-22.8919959, -43.392362]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {
                (position.latitude !== 0 && position.longitude !== 0) && (
                  <Marker interactive={false} icon={mapIcon} position={[position.latitude, position.longitude]} />
                )
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="about" maxLength={300} value={about} onChange={e => setAbout(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="tel" id="whatsapp" onChange={e => setWhatsapp(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                {
                  previewImages.map(img => {
                    return <img key={img} src={img}/>
                  })
                }

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple onChange={handleImageSelection} type="file" id="image[]"/>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={e => setOpeningHours(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" onClick={() => setOpenOnWeekends(true)} className={(open_on_weekends) ? "active" : ""}>Sim</button>
                <button type="button" onClick={() => setOpenOnWeekends(false)} className={(!open_on_weekends) ? "active" : ""}>Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
