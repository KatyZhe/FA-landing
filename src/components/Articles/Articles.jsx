import ArticleList from "../ArticlesList/ArticlesList";
import articles from "../../utils/config_RU";
import './Articles.scss';

const Articles = () => {
  return (
    <>
      <h2 className="articles__title">Статьи</h2>
      <ArticleList articles={articles} />
    </>
  );
};

export default Articles;
