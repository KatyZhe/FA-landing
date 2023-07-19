import "./Promo.scss";
import pic from "../../images/Fotolia.jpg";
import {useTranslation} from "react-i18next";

const Promo = () => {
  const {t} = useTranslation();
  return (
    <section className="promo">
      <p className="promo__text">{t("promo-text")}</p>
      <img
        src={pic}
        alt="картинка с довольным человеком"
        className="promo__image"
      />
    </section>
  );
};

export default Promo;