import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
// import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>

      <App />
    
  </Router>
);
