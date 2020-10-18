import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/login.css';
import verticalLogoImg from '../images/vertical-logo.svg'

import { FiArrowLeft } from 'react-icons/fi';

export function Login() {
  return (
    <div className="page-login">
      <div className="content-wrapper">
        <div className="logo">
          <img src={verticalLogoImg} alt=""/>

          <div className="location-text">
            <strong>Rio de Janeiro</strong>
            <span>RJ</span>
          </div>
        </div>

        <div className="login-form-area">
          <Link to="/" className="back-button">
            <FiArrowLeft size={24} color="#15C3D6"/>
          </Link>
          <div className="form">
            <div className="login-text-container">
              <h1 className="login-text">Fazer login</h1>
            </div>

            <form className="login-form">
              <label htmlFor="email" className="email-label">E-mail</label>
              <input type="email" name="email" id="email"/>

              <label htmlFor="senha" className="password-label">Senha</label>
              <input type="password" name="password" id="password"/>

              <div className="forgot-password-area">
                {/* <input type="checkbox" id="lembrar" name="lembrar" value="false" />
                <label htmlFor="lembrar">Lembrar-me</label> */}
                <Link to="REPLACEME" className="forgot-password-button">Esqueci minha senha</Link>
              </div>

              <button type="submit" className="login-submit">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}