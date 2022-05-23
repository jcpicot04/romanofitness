import React, { useEffect } from 'react';
import { Tooltip } from 'primereact/tooltip';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import ThinsCarousel from './components/ThinsCarousel/ThinsCarousel';
import PromoPacks from './components/Promopacks/PromoPacks';
import Contact from './components/Contact/Contact';
import IconsBar from './components/IconsBar/IconsBar';
import Navbar from './components/Navbar/Navbar';
import BottomBar from './components/BottomBar/BottomBar';
import { ToastContainer, toast } from 'react-toastify';
import { InputText } from 'primereact/inputtext';
import '../node_modules/react-toastify/dist/ReactToastify.css';

function App() {
  let search = window.location.search;
  let mail = search.includes('mail');

  useEffect(() => {
    toast.success(' ✉ Correo enviado!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }, []);

  return (
    <div className='all'>
        <Navbar></Navbar>
        {mail === true &&
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      }
        <Home></Home>
        <About></About>
        <ThinsCarousel></ThinsCarousel>
        <IconsBar></IconsBar>
        <PromoPacks></PromoPacks>
        <Contact></Contact>
        <BottomBar></BottomBar>
        <Tooltip target=".float" position="left"/>
        <a href="https://api.whatsapp.com/send?phone=643811345&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento." className="float" data-pr-position="left" data-pr-tooltip="Infórmate por Whatsapp!" target="_blank" rel="noreferrer">
          <i className="fa fa-whatsapp my-float"></i>
        </a>
    </div>
  );
}

export default App;
