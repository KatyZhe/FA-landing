import { Link } from 'react-router-dom';
import './Service.scss';
import {useTranslation} from "react-i18next";

const Service = () => {
  const {t} = useTranslation();

  return (
    <section className="service">
      <h2 className="service__title">{t("service-header")}</h2>
      <p className="service__about-service">
      {t("service-description")}
      </p>
      <ul className="service__block">
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service1")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">50 &euro; {t("service-hour")}</p>
            </summary>
            <p class="service__item-description">
              {t("service-text1")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service2")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">50 &euro; {t("service-hour")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text2")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service3")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">от 1000 &euro;</p>
            </summary>
            <p class="service__item-description">
            {t("service-text3")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service4")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">от 2000 &euro;</p>
            </summary>
            <p class="service__item-description">
            {t("service-text4")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service5")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text5")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service6")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text6")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service7")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text7")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service8")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text8")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service9")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text9")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service10")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text10")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service11")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text11")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service12")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text12")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service13")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text13")}
            </p>
          </details>
        </li>
        <li className="service__item">
          <details>
            <summary class="service__item-title">
              <h3 className="service__item-h3">{t("service14")}</h3>
              <div className="service__dotted"></div>
              <p className="service__item-p">{t("service-price")}</p>
            </summary>
            <p class="service__item-description">
            {t("service-text14")}
            </p>
          </details>
        </li>
      </ul>
      <Link to="/contact" className="service__button">
      {t("service-button")}
      </Link>
    </section>
  );
};

export default Service;
