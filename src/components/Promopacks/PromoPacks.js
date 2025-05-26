import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import logo from "../../assets/IMPACTO3D.png";

const PromoPacks = () => {
  require("./Promopacks.css");
  const [displayBasic, setDisplayBasic] = useState(false);

  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button label="Entendido" onClick={() => onHide(name)} autoFocus />
      </div>
    );
  };
  return (
    <div className="packs">
      <h1 className="personalized">¡ÚNETE A NUESTROS RETOS EN VIVO!</h1>
      <div className="info">
        <img src={logo} alt="Logo" style={{width:'500px'}}></img>
        <Button className="btnPacks" label="Qué incluyen?" onClick={() => onClick("displayBasic")} />
      </div>
      <Dialog
        header="CONTENIDO RETOS IMPACTO"
        visible={displayBasic}
        style={{ width: "70vw" }}
        footer={renderFooter("displayBasic")}
        onHide={() => onHide("displayBasic")}
      >
        <p>- Clases en directo cada día con Romano Fitness (incluye versión sin impacto)</p>
        <p>- Sesiones con el nutricionista</p>
        <p>- Grupo de apoyo privado a través de WhatsApp, para los participantes del reto</p>
        <p>- Tanto las clases como las sesiones con el nutricionista se quedan grabadas para ti</p>
      </Dialog>
      <div className="page-content">
        <div className="card">
          <div className="content">
            {/* <h2 className="title">IMPACTO 30</h2> */}
            <p className="copy">
              {/* Es momento de mejorar tus habitos alimenticios, ya no hay excusa! */}
            </p>
            <p className="copy">
              {/* (Accede ahora) */}
            </p>
            <a href="https://romanofitness.net" target="_blank" rel="noreferrer">
            <button className="btn">ACCEDE YA</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            {/* <h2 className="title">IMPACTO 60</h2> */}
            <p></p>
            <p></p>
            {/* <p className="copy">
              PRÓXIMAMENTE
            </p> */}
            <p className="copy">
              {/* 45€/mes */}
            </p>
            {/* <a href="https://romanofitness.net" target="_blank" rel="noreferrer"> */}
            <button className="btn">PRÓXIMAMENTE</button>
            {/* </a> */}
          </div>
        </div>
        <div className="card">
          <div className="content">
            {/* <h2 className="title">IMPACTO 90</h2> */}
            <p className="copy">
              {/* Beneficios del plan nutricional + plan entrenamiento juntos! */}
            </p>
            <p className="copy">
              {/* PRÓXIMAMENTE */}
            </p>
            {/* <a href="https://romanofitness.net" target="_blank" rel="noreferrer"> */}
            <button className="btn">PRÓXIMAMENTE</button>
            {/* </a> */}
            {/* <a className="two-btn__a" href="https://impactofitness.harbiz.io/checkout-form/impactofitness?product=gAw3cdaSRHWiyvnxL" target="_blank" rel="noreferrer">
            <a>
            <button className="btn">No disponible</button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPacks;
