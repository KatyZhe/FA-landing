import './ArticleTemplate.scss';

const ArticleTemplate = ({ article }) => {
    return(
        <li className="articleTemplate__item">
            <h3 className="articleTemplate__title">{article.title}</h3>
            <p className="articleTemplate__text">{article.text}</p>
        </li>
    )
};

export default ArticleTemplate;