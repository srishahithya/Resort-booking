import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lakefront from './Components/Lakefront.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth0Provider
    domain="dev-zqq6gja8h2zuqdlj.us.auth0.com"
    clientId="OIkukiH3GnmDGERoeDsgMHNshL4tr8PA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
)
  