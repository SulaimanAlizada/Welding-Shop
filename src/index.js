import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

function render(element) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
}

render(
  <App />
);