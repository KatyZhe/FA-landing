import React, { useState } from 'react';
import './Contact.scss';
import vk from '../../images/vk.svg';
import instagram from '../../images/instagram.svg';
import whatsApp from '../../images/whatsapp.svg';
import { dataCeckbox, CHAT_ID, handleMessage } from '../../utils/constans';
import { useFormAndValidation } from '../../hooks/validation';
import { validateEmail, validateName } from '../../utils/validation';
import { postMessage } from '../../utils/Api';
import Checkbox from '../Checkbox/Checkbox';

const Contact = () => {
  const { values, isValid, handleChange } = useFormAndValidation();
  const [notification, setNotification] = useState(true);
  const [toppings, setToppings] = useState(dataCeckbox);

  const handleCheckbox = (item) => {
    return item.map((i) => (i.checked ? i.name : ''));
  };

  const updateCheckStatus = (index) => {
    setToppings(
      toppings.map((topping, currentIndex) => {
        return currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMessage(CHAT_ID, handleMessage(values, handleCheckbox(toppings)));
    setNotification(false);
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Schedule a Consultation</h2>
      <div className="contact__container">
        <div className="contact__info">
          <h4 className="contact__table-contents">Degraw</h4>
          <p className="contact__text">123 Demo Street</p>
          <p className="contact__text ">New York, NY 12345</p>
          <p className="contact__text contact__text_position">
            8 (999) 999-99-99
          </p>
          <p className="contact__text">email@example.com</p>

          <div className="contact__container-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="инстаграмм" src={instagram} className="contact__icon" />
            </a>

            <a href="https://vk.com/" target="_blank" rel="noreferrer">
              <img alt="вк" src={vk} className="contact__icon" />
            </a>

            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="ватсап" src={whatsApp} className="contact__icon" />
            </a>
          </div>
        </div>
        {notification ? (
          <form className="contact__form" id="form" onSubmit={handleSubmit}>
            <h4 className="contact__name">
              Name <span className="contact__name-required">(required)</span>
            </h4>

            <div className="contact__box-input">
              <label className="contact__lable">
                First Name
                <input
                  className="contact__input"
                  name="name"
                  value={values.name || ''}
                  required
                  minLength="3"
                  maxLength="40"
                  type="text"
                  onChange={handleChange}
                  placeholder=""
                />
                <span
                  className={`contact__input-error  ${
                    isValid ? '' : 'contact__input-error_activ'
                  }`}
                >
                  {validateName(values.name).message}
                </span>
              </label>

              <label className="contact__lable">
                Last Name
                <input
                  className="contact__input"
                  name="last"
                  value={values.last || ''}
                  required
                  minLength="4"
                  maxLength="40"
                  type="text"
                  onChange={handleChange}
                  placeholder=""
                />
                <span
                  className={`contact__input-error  ${
                    isValid ? '' : 'contact__input-error_activ'
                  }`}
                >
                  {validateName(values.last).message}
                </span>
              </label>

              <label className="contact__lable contact__lable-email">
                Email<span className="contact__name-required">(required)</span>
                <input
                  className="contact__input contact__input-email"
                  name="email"
                  value={values.email || ''}
                  required
                  minLength="2"
                  maxLength="40"
                  type="email"
                  onChange={handleChange}
                  placeholder=""
                />
                <span
                  className={`contact__input-error  ${
                    isValid ? '' : 'contact__input-error_activ'
                  }`}
                >
                  {validateEmail(values.email).message}
                </span>
              </label>
            </div>

            <h4 className="contact__help-text">
              I'm interested in help with...
              {/* <span className="contact__name-required">(required)</span> */}
            </h4>
            <div className="contact__container-checkbox">
              {toppings.map((i, index) => {
                return (
                  <Checkbox
                    key={i.id}
                    isChecked={i.checked}
                    checkHandler={() => updateCheckStatus(index)}
                    label={i.name}
                    index={index}
                  />
                );
              })}
            </div>
            <h4 className="contact__message">Additional Message (Optional)</h4>
            <textarea
              className="contact__input-message"
              name="message"
              value={values.message || ''}
              rows="3"
              type="text"
              onChange={handleChange}
              placeholder=""
            />
            <button
              className="button button_position"
              type="submit"
              disabled={
                !isValid ||
                validateEmail(values.email).invalid ||
                validateName(values.last).invalid ||
                validateName(values.name).invalid
              }
            >
              Submit
            </button>
          </form>
        ) : (
          <h4 className="contact__notification">Thank you!</h4>
        )}
      </div>
    </section>
  );
};

export default Contact;
