// import logo from './logo.svg';
import './App.css'
import Konsultasi from './view/Konsultasi/index.js'
import Sidebar from './view/sidebar';
import Triase from './view/Triase';
import Pasien from './view/Pasien';
import Dashboard from './view/Dashboard';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Doctor from './view/Doctor/doctor';

function App() {
  return (
    <>
     <Dashboard/>
    </>
  );
}

export default App;
