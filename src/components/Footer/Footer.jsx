import React from "react";
import "./Footer.scss";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  const currentYear = (new Date()).getFullYear();
  return (
    <footer className="footer">
      <h4 className="footer__title">{t("footer")}</h4>
      <div className="footer__container">
        <ul className="footer__description">
          Location
          <li className="footer__text footer__text_margin-top">
            123 Demo Street
          </li>
          <li className="footer__text footer__text_margin-bootom">
            New York, NY 12345
          </li>
        </ul>
        <ul className="footer__description footer__description_position">
          Contact
          <li className="footer__text footer__text_margin-top">
            (555) 555-5555
          </li>
          <li className="footer__text footer__text_margin-bootom"></li>
          <li className="footer__text footer__text_margin-bootom">
            email@example.com
          </li>
        </ul>
        <ul className="footer__description">
          Follow
          <li className="footer__text footer__text_margin-top">
            <a
              className="footer__link"
              href="https://www.squarespace.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="footer__text footer__text_margin-bootom">
            <a
              className="footer__link"
              href="https://www.squarespace.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__madeby">
        <p>Made by
        <a
          className="footer__link footer__link_position"
          href="https://github.com/AntonLiad"
          target="_blank"
          rel="noreferrer"
        >
          Anton Laid 
        </a>
         &
        <a
          className="footer__link footer__link_position"
          href="https://github.com/KatyZhe"
          target="_blank"
          rel="noreferrer"
        >
          KatyZhe
        </a>
        </p>
        <p className="footer__copyright">&copy; {currentYear} Название фирмы</p>
      </div>
    </footer>
  );
};

export default Footer;
