import React from 'react';
import '@/components/oldcard/oldcard.css'

const OldCard = ({ articles, VisibleArticlesOld, loadMoreOld, loadLessOld }) => {
    const filteredArticles = articles.filter(article => new Date(article.published) < new Date());

    return (
        <div className="Other-card-layout">
            <h2>Äldre nyheter</h2>
            {filteredArticles.slice(0, VisibleArticlesOld).map(article => {
                const publishedDate = new Date(article.published);
                const formattedDate = publishedDate.toLocaleString('en-GB', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                });

                return (
                    <div className="Other-card" key={article.Id}>
                        <div>
                            <div>{article.title}</div>
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                Se mer
                            </a>
                        </div>
                        
                        <div className="r">{formattedDate}</div>
                    </div>
                );
            })}
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