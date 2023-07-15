import ArticleList from '../ArticlesList/ArticlesList';
import articles from '../../utils/config_RU';

const Articles = () => {
  return(<ArticleList articles={articles} />);
};

export default Articles;
