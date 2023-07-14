import './Header.scss';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

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
      </section>
    </header>
  );
};

export default Header;