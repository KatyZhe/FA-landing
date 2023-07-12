import './Header.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <section className="header__block">
        <Link to="/" className="header__link">
          <img src={logo} alt="логотип заголовка" className="header__logo" />
        </Link>
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
      <section className="header__title">
        <h1>Возьмите ваши финансы под контроль</h1>
        <Link to="/contacts" className="header__contacts">
          <p>Запланируйте финансовую консультацию</p>
        </Link>
      </section>
    </header>
  );
};

export default Header;
