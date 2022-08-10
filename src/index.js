import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Profilecom from './Profilecom';
import About from './About';
import Updatebook from './Updatebook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-92wu87o7.us.auth0.com"
    clientId="n23YcjwZEfWewm4lVqSTSbyz8TANDmMm"
    redirectUri={window.location.origin}
  >
     <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/books/:id' element={<Updatebook/>}/> 
          <Route path="profile" element={<Profilecom />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
