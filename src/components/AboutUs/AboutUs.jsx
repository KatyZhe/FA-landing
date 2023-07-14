import React from 'react';
import './AboutUs.scss';
import ImagePeople from '../../images/image-asset.jpeg';
import Сonsultation from '../Сonsultation/Сonsultation';

const AboutUs = () => {
  return (
    <section className="about">
      <h2 className="about__title">About Us</h2>
      {/* <div className="about__container-text"> */}
      <p className="about__paragraph">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
        eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo.
      </p>
      <p className="about__paragraph about__paragraph_position">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>
      <img className="about__photo" alt="Фото" src={ImagePeople} />
      <Сonsultation />
    </section>
  );
};

export default AboutUs;
