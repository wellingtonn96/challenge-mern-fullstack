import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import 'leaflet/dist/leaflet.css';
import ToastMessages from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
    <ToastMessages />
  </>
);

export default App;
