import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="main">
      <h1 className="main__title">Возьмите ваши финансы под контроль</h1>
      <Link to="/contacts" className="main__contacts">
        <p>Запланируйте финансовую консультацию</p>
      </Link>
    </section>
  );
};

export default Main;
