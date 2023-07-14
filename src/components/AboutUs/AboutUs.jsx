import React from 'react';
import './AboutUs.scss';
import faces from '../../images/Fotolia.jpg';

const AboutUs = () => {
  return (
    <section className="about">
      <h2 className="about__title">О нас</h2>
      <ul className='about__block'>
        <li className='about__item'>
          <img className='about__image' src={faces} alt='Vika'/>
          <h3 className='about__item-title'>Виктория Уздеева</h3>
          <p className='about__description'>Финансовый аналитик</p>
          <p className='about__text'>Много текста, какая ты хорошая</p>
        </li>
        <li className='about__item'>
          <img className='about__image' src={faces} alt='Vika'/>
          <h3 className='about__item-title'>Виктория Уздеева</h3>
          <p className='about__description'>Финансовый аналитик</p>
          <p className='about__text'>Много текста, какая ты хорошая</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
