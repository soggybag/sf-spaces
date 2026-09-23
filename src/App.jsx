import logo from './logo.svg';
import Title from './components/Title/Title.jsx'
import POPOSList from './components/POPOSList/POPOSList.jsx';
import Footer from './Footer'
import { useState } from 'react'
import POPOSDetails from './components/POPOSDetails/POPOSDetails.jsx'
import { Outlet } from 'react-router-dom'
import styles from './App.module.css'


function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  )
}


export default App;
