import React from "react";
import "./Main.scss";

import { Link } from "react-router-dom";

import Service from '../Service/Service';
import Promo from '../Promo/Promo';



const Main = () => {
  return (
    <>
      <section className="main">
        <h1 className="main__title">Возьмите ваши финансы под контроль</h1>
        <Link to="/contacts" className="main__contacts">
          <p>Запланируйте финансовую консультацию</p>
        </Link>
      </section>
      <Promo />
      <Service />
    </>
  );
};

export default Main;
