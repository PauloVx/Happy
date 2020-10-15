import React from 'react';

import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar.css';

export function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
        <Link to="/">
          <img src={mapMarkerImg} alt="Happy" />
        </Link>

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
  )
}