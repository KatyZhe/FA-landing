import React from "react";
import "./AboutUs.scss";
import { useTranslation } from "react-i18next";
import faces from "../../images/Fotolia.jpg";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="about">
      <h2 className="about__title">{t("aboutUs-header")}</h2>
      <ul className="about__block">
        <li className="about__item">
          <img className="about__image" src={faces} alt="Vika" />
          <h3 className="about__item-title">{t("aboutUs-Vika")}</h3>
          <p className="about__description">{t("aboutUs-VikasProf")}</p>
        </li>
        <li className="about__item">
          <img className="about__image" src={faces} alt="Vika" />
          <h3 className="about__item-title">{t("aboutUs-Vanya")}</h3>
          <p className="about__description">{t("aboutUs-VanyaProf")}</p>
        </li>
      </ul>
      <div className="about__text-block">
        <p className="about__text">{t("aboutUs-text1")}</p>
        <p className="about__text">{t("aboutUs-text2")}</p>
        <h4 className="about__text">{t("aboutUs-text3")}</h4>
        <ol className="about__list">
          <li className="about__text">{t("aboutUs-text4")}</li>
          <li className="about__text">{t("aboutUs-text5")}</li>
        </ol>

        <h4 className="about__text">{t("aboutUs-text6")}</h4>
        <ol className="about__list">
          <li className="about__text">{t("aboutUs-text7")}</li>
          <li className="about__text">{t("aboutUs-text8")}</li>
          <li className="about__text">{t("aboutUs-text9")}</li>
          <li className="about__text">{t("aboutUs-text10")}</li>
        </ol>
        <p className="about__text">{t("aboutUs-text11")}</p>
      </div>
    </section>
  );
};

export default AboutUs;
