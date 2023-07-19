import "./Header.scss";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
//import es from '../../images/british-flag (2).svg';

import { useTranslation } from "react-i18next";

const Header = ({ openPopup, popup }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className="header">
      <section className="header__block">
        <Link to="/" className="header__link">
          <img src={logo} alt="логотип заголовка" className="header__logo" />
        </Link>

        <nav className="header__menu">
          <Link to="/about" className="header__link">
            <p>{t("header-about")}</p>
          </Link>
          <Link to="/articles" className="header__link">
            <p>{t("header-articles")}</p>
          </Link>
        </nav>
        {/* <button className="header__button">Напишите нам</button> */}
        <div className="header__langs-button">
          <div className="header__langs">
            <button
              className="header__flag"
              onClick={() => changeLanguage("ru")}
            >
            </button>
            <button
              className="header__flag"
              onClick={() => changeLanguage("en")}
            >
            </button>
          </div>
          <Link className="header__button" to="/contact">
            {t("header-button")}
          </Link>
          <div
            className={`header__burger ${popup ? "header__burger_pop" : ""}`}
            onClick={openPopup}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
