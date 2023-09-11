import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectedSorting, selectedTopic } from '@/redux/topicsortslice'
const NewsCard = () => {

    const [articles, setArticles] = useState([]);
    const [visibleArticles, setVisibleArticles] = useState(12);
   const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const [loading, setLoading] = useState(true);

    const populateArticleData = async () => {
        setLoading(true);
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`);
        const data = await response.json();
        setArticles(data);
        setLoading(false);
    }

    useEffect(() => {
        populateArticleData();
    },[searchTopic, sorting])



    const renderPage = () => {
        return <>
            {renderArticlesTable()}
        </>

    }

    const renderArticlesTable = () => {
        return (
            <div className="row">
                {articles
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
                        return <Card style={{ width: '19rem', height: 'auto', marginBottom: '20px', marginRight: '20px' }}>
                            <Card.Img variant="top" src={article.Image} style={{ objectFit: 'cover', maxHeight: '50%' }} />
                            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                <Card.Title style={{ height: '3rem' }}>{article.title}</Card.Title>
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
                    })};
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
        )
    }

    const loadMore = () => {
        setVisibleArticles() == visibleArticles + 12;
    };

    const loadLess = () => {
            setVisibleArticles() == visibleArticles - 12;
    };

    return (
        <div>
            <h1>Dagens nyheter</h1>
            {loading
                ? <p><em>Loading...</em></p>
                : renderPage()
            }
        </div>
    );

    
};

export default NewsCard;