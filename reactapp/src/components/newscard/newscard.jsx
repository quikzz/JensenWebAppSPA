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
                    <div className="row">
                            {articles
                                //.filter(article => {
                                //    const publishedDate = new Date(article.published);
                                //    const today = new Date();
                                //    return (
                                //        publishedDate.getDate() === today.getDate() &&
                                //        publishedDate.getMonth() === today.getMonth() &&
                                //        publishedDate.getFullYear() === today.getFullYear()
                                //    );
                                //})
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
                                            <Card style={{ width: '19rem', height: 'auto', marginBottom: '20px', marginRight: '20px'}}>
                                                <Card.Img variant="top" src={article.Image} style={{ objectFit: 'cover', maxHeight: '50%' }} />
                                                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Card.Title style={{height:'3rem' }}>{article.title}</Card.Title>
                                                    <Card.Text>
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
                                    );
                                })}
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