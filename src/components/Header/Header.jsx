import './Header.scss';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import rus from '../../images/russia-flag.svg';
import eng from '../../images/british-flag (1).svg';
import es from '../../images/british-flag (2).svg';

const Header = ({ openPopup, popup }) => {
  return (
    <header className="header">
      <section className="header__block">
        <Link to="/" className="header__link">
          <img src={logo} alt="логотип заголовка" className="header__logo" />
        </Link>
        <div
          className={`header__burger ${popup ? 'header__burger_pop' : ''}`}
          onClick={openPopup}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="header__menu">
          <Link to="/about" className="header__link">
            <p>О нас</p>
          </Link>
          <Link to="/services" className="header__link">
            <p>Услуги</p>
          </Link>
          <Link to="/articles" className="header__link">
            <p>Статьи</p>
          </Link>
        </nav>
        <button className="header__button">Напишите нам</button>
        <div className="header__langs-button">
          <div className="header__langs">
            <img className="header__flag" src={rus} alt="флаг России" />
            <img className="header__flag" src={eng} alt="флаг Великобритании" />
            <img className="header__flag" src={es} alt="флаг Испании" />
          </div>
          <button className="header__button">Напишите нам</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
