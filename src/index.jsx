import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import POPOSList from './components/POPOSList/POPOSList'
import Title from './components/Title/Title';
import About from './components/About/About'
import POPOSDetails from './components/POPOSDetails/POPOSDetails'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<POPOSList />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<POPOSDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
