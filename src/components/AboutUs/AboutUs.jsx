import React from 'react';
import './AboutUs.scss';
import ImagePeople from '../../images/image-asset.jpeg';
import Сonsultation from '../Сonsultation/Сonsultation';
import faces from '../../images/Fotolia.jpg';

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
      <h2 className="about__title">О нас</h2>
      <ul className="about__block">
        <li className="about__item">
          <img className="about__image" src={faces} alt="Vika" />
          <h3 className="about__item-title">Виктория Уздеева</h3>
          <p className="about__description">Финансовый аналитик</p>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            at varius vel pharetra vel. Et malesuada fames ac turpis egestas
            maecenas pharetra. Praesent tristique magna sit amet purus gravida
            quis blandit. Nisl rhoncus mattis rhoncus urna. Semper risus in
            hendrerit gravida rutrum quisque. Fames ac turpis egestas sed tempus
            urna et. Elementum eu facilisis sed odio morbi quis commodo odio.
            Senectus et netus et malesuada fames ac. Nisl pretium fusce id velit
            ut. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.
            Pellentesque eu tincidunt tortor aliquam. Eu feugiat pretium nibh
            ipsum consequat nisl. Aliquam vestibulum morbi blandit cursus risus
            at. Enim diam vulputate ut pharetra sit. Nisi est sit amet facilisis
            magna etiam tempor orci eu. Sit amet nulla facilisi morbi tempus
            iaculis urna. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam. Amet aliquam id diam maecenas ultricies mi eget.
            Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
            Ultrices in iaculis nunc sed augue lacus viverra vitae. Quam viverra
            orci sagittis eu volutpat odio facilisis mauris. Commodo quis
            imperdiet massa tincidunt nunc pulvinar. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra. Aliquam ultrices sagittis orci a
            scelerisque purus semper. Quis hendrerit dolor magna eget est. Eget
            magna fermentum iaculis eu. Velit dignissim sodales ut eu. Ut etiam
            sit amet nisl purus in mollis. Lectus quam id leo in vitae turpis
            massa sed. Iaculis eu non diam phasellus vestibulum lorem sed risus
            ultricies.
          </p>
        </li>
        <li className="about__item">
          <img className="about__image" src={faces} alt="Vika" />
          <h3 className="about__item-title">Виктория Уздеева</h3>
          <p className="about__description">Финансовый аналитик</p>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            at varius vel pharetra vel. Et malesuada fames ac turpis egestas
            maecenas pharetra. Praesent tristique magna sit amet purus gravida
            quis blandit. Nisl rhoncus mattis rhoncus urna. Semper risus in
            hendrerit gravida rutrum quisque. Fames ac turpis egestas sed tempus
            urna et. Elementum eu facilisis sed odio morbi quis commodo odio.
            Senectus et netus et malesuada fames ac. Nisl pretium fusce id velit
            ut. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.
            Pellentesque eu tincidunt tortor aliquam. Eu feugiat pretium nibh
            ipsum consequat nisl. Aliquam vestibulum morbi blandit cursus risus
            at. Enim diam vulputate ut pharetra sit. Nisi est sit amet facilisis
            magna etiam tempor orci eu. Sit amet nulla facilisi morbi tempus
            iaculis urna. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
            risus nullam. Amet aliquam id diam maecenas ultricies mi eget.
            Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
            Ultrices in iaculis nunc sed augue lacus viverra vitae. Quam viverra
            orci sagittis eu volutpat odio facilisis mauris. Commodo quis
            imperdiet massa tincidunt nunc pulvinar. Proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra. Aliquam ultrices sagittis orci a
            scelerisque purus semper. Quis hendrerit dolor magna eget est. Eget
            magna fermentum iaculis eu. Velit dignissim sodales ut eu. Ut etiam
            sit amet nisl purus in mollis. Lectus quam id leo in vitae turpis
            massa sed. Iaculis eu non diam phasellus vestibulum lorem sed risus
            ultricies.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
