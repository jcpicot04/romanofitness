import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
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
      <h1 className="personalized">PLANES PERSONALIZADOS</h1>
      <Button className="btnPacks" label="Qué incluyen?" onClick={() => onClick("displayBasic")} />
      <Dialog
        header="CONTENIDO PLANES PERSONALIZADOS"
        visible={displayBasic}
        style={{ width: "70vw" }}
        footer={renderFooter("displayBasic")}
        onHide={() => onHide("displayBasic")}
      >
        <p>
          1- Plan personalizado de entrenamiento en casa 🏠 o gym 🏋🏻‍♀️.{" "}
          <b>(No incluido en el plan nutricional)</b>
        </p>
        <p>
          2- Plan de alimentación personalizado 🍎🍆🌮🍕.{" "}
          <b>(No incluido en el plan entrenamiento)</b>
        </p>
        <p>
          3- Lista de la compra 📝.{" "}
          <b>(No incluido en el plan entrenamiento)</b>
        </p>
        <p>4- Ebook de recetas saludables en constante actualización.</p>
        <p>
          5- Apartado de métricas, ahora podrás ver tu evolución con imágenes y
          gráficas 📈.
        </p>
        <p>6- Apartado de documentos sobre alimentación y entrenamiento.</p>
        <p>7- Acceso a la aplicación IMPACTO 📱.</p>
        <p>8- Soporte vía chat 👥.</p>
        <p>
          9- Sesiones en vídeo (tutoriales, ejercicios, recetas, consejos...).
        </p>
        <p>10- Revisiones.</p>
      </Dialog>
      <div className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title">PLAN NUTRICIONAL</h2>
            <p className="copy">
              Es momento de mejorar tus habitos alimenticios, ya no hay excusa!
            </p>
            <p className="copy">
              29€/mes
            </p>
            <a href="https://impactofitness.harbiz.io/checkout-form/impactofitness?product=ifswzp2eqe7k8Dgpo" target="_blank" rel="noreferrer">
            <button className="btn">COMPRAR</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">PLAN ENTRENAMIENTO</h2>
            <p className="copy">
              Da igual si entrenas en casa o en el gym, éste es tu plan!
            </p>
            <p className="copy">
              29€/mes
            </p>
            <a href="https://impactofitness.harbiz.io/checkout-form/impactofitness?product=Ajc5FawbKNXKzuiWq" target="_blank" rel="noreferrer">
            <button className="btn">COMPRAR</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">PLAN COMPLETO</h2>
            <p className="copy">
              Beneficios del plan nutricional + plan entrenamiento juntos!
            </p>
            <p className="copy">
              39€/mes o 75€/3 meses
            </p>
            <div className="two-btn">
            <a className="two-btn__a" href="https://impactofitness.harbiz.io/checkout-form/impactofitness?product=FpK4reqPbWEBii5x7" target="_blank" rel="noreferrer">
            <button className="btn">COMPRAR 1 mes</button>
            </a>
            <a className="two-btn__a" href="https://impactofitness.harbiz.io/checkout-form/impactofitness?product=NAsnwgt7EBgDjftup" target="_blank" rel="noreferrer">
            <button className="btn">COMPRAR 3 meses</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPacks;
