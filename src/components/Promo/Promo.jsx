import "./Promo.scss";
import pic from "../../images/Fotolia.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <p className="promo__text">
        После всего одной консультации вы будете больше контролировать свой
        бюджет, ваши финансовые цели и вашу жизнь
      </p>
      <img
        src={pic}
        alt="картинка с довольным человеком"
        className="promo__image"
      />
    </section>
  );
};

export default Promo;