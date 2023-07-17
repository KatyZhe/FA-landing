import React from 'react';
import './Сonsultation.scss';
import { Link } from 'react-router-dom';

const Сonsultation = () => {
  return (
    <section className="consultation">
      <h2 className="consultation__title">Let's Talk!</h2>
      <p className="consultation__poragraph">Your first consultation is free</p>
      <Link to="/contact" className="consultation__button">
        Schedule a Consultation
      </Link>
    </section>
  );
};

export default Сonsultation;
