import React from 'react';
import './Main.scss';
import {useTranslation} from "react-i18next";

import { Link } from 'react-router-dom';

import Service from '../Service/Service';
import Promo from '../Promo/Promo';

const Main = () => {
  const {t} = useTranslation();
  return (
    <>
      <section className="main">
        <h1 className="main__title">{t("main-header")}</h1>
        <Link to="/contacts" className="main__contacts">
          <p>{t("main-text")}</p>
        </Link>
      </section>
      <Promo />
      <Service />
    </>
  );
};

export default Main;
