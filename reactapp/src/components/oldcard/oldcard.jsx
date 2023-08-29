import React from 'react';
import '@/components/oldcard/oldcard.css'

const OldCard = ({ articles, VisibleArticlesOld, loadMoreOld, loadLessOld }) => {
    const filteredArticles = articles.filter(articles => new Date(articles.published) < new Date());
    return (
        <div className="Other-card-layout">
            {filteredArticles.slice(0, VisibleArticlesOld).map(article => (
                <div className="Other-card" key={article.Id}>
                    <a>{article.title}</a>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Se mer
                    </a>
                    <a className="r">{article.published}</a>
                </div>
            ))}
            {VisibleArticlesOld < articles.length && (
                <div className="text-center">
                    <button className="btn btn-primary mt-4 mr-2" onClick={loadMoreOld}>
                        View More
                    </button>
                    <button className="btn btn-secondary mt-4" onClick={loadLessOld}>
                        View Less
                    </button>
                </div>
            )}
        </div>

    );
};

export default OldCard;