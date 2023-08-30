import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ articles, visibleArticles, loadMore, loadLess, loading }) => {
    return (
        <div>
            <h1 id="tabelLabel">Dagen Nyheter</h1>
            {loading ? (
                <p>
                    <em>Loading... Please refresh once the ASP.NET backend has started. See{' '}
                        <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
                </p>
            ) : (
                <div className="news-container">
                    <div className="row">
                            {articles
                                .filter(article => {
                                    const publishedDate = new Date(article.published);
                                    const today = new Date();
                                    return (
                                        publishedDate.getDate() === today.getDate() &&
                                        publishedDate.getMonth() === today.getMonth() &&
                                        publishedDate.getFullYear() === today.getFullYear()
                                    );
                                })
                                .slice(0, visibleArticles)
                                .map(article => {
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
                                        <div className="col-lg-3 col-md-4 mb-4" key={article.title}>
                                            <Card style={{ width: '19rem', height: 'auto', marginBottom: '20px' }}>
                                                <Card.Img variant="top" src={article.Image} style={{ objectFit: 'cover', maxHeight: '50%' }} />
                                                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Card.Title style={{height:'3rem' }}>{article.title}</Card.Title>
                                                    <Card.Text style={{
                                                        flex: '1',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        lineHeight: '1.5',
                                                        maxHeight: '4.5em'
                                                    }}>
                                                        {article.summary}
                                                    </Card.Text>
                                                    <div>
                                                        <Button variant="primary" href={article.link} target="_blank" rel="noopener noreferrer">
                                                            Se mer
                                                        </Button>
                                                        <Card.Text>
                                                            <small className="text-muted">{formattedDate}</small>
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <strong>{article.topic.join(', ')}</strong>
                                                        </Card.Text>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    );
                                })}
                    </div>
                    {visibleArticles < articles.length && (
                        <div className="text-center">
                            <button className="btn btn-primary mt-4 mr-2" onClick={loadMore}>
                                Visa mer
                            </button>
                            <button className="btn btn-secondary mt-4" onClick={loadLess}>
                                Visa mindre
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NewsCard;