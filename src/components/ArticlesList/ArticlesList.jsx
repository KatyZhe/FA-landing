import ArticleTemplate from '../ArticleTemplate/ArticleTemplate';
import './ArticleList.scss';

const ArticlesList = ({ articles }) => {
  return(
    <section className="articlesList">
        <ul className="articlesList__list">
            {articles.map((article) => {
                return(<ArticleTemplate key={article.id} article={article}/>)
            })}
        </ul>
    </section>
  )
};

export default ArticlesList;