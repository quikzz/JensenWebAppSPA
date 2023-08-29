import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ articles, visibleArticles, loadMore, loadLess, loading }) => {
    return (
        <div>
            <h1 id="tabelLabel">Article List</h1>
            {loading ? (
                <p>
                    <em>Loading... Please refresh once the ASP.NET backend has started. See{' '}
                        <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em>
                </p>
            ) : (
                <div className="container">
                    <div className="row">
                            {articles.slice(0, visibleArticles).map(article => (
                            <div className="col-md-4" key={article.title}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={article.Image}  />
                                    <Card.Body>
                                        <Card.Title>{article.title}</Card.Title>
                                        <Card.Text>{article.summary}</Card.Text>
                                        <Button variant="primary" href={article.link} target="_blank" rel="noopener noreferrer">
                                            Se mer
                                        </Button>
                                        <Card.Text>
                                            <small className="text-muted">{article.published}</small>
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>{article.topic.join(', ')}</strong>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    {visibleArticles < articles.length && (
                        <div className="text-center">
                            <button className="btn btn-primary mt-4 mr-2" onClick={loadMore}>
                                View More
                            </button>
                            <button className="btn btn-secondary mt-4" onClick={loadLess}>
                                View Less
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NewsCard;