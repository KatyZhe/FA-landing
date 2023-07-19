import ArticleList from "../ArticlesList/ArticlesList";
import articles from "../../utils/config_RU";
import { useTranslation } from "react-i18next";
import './Articles.scss';

const Articles = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="articles__title">{t("articles-header")}</h2>
      <ArticleList articles={articles} />
    </>
  );
};

export default Articles;
