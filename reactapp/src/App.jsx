import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], visibleArticles: 9, loading: true };
    }

    componentDidMount() {
        this.populateArticleData();
    }

    static renderArticlesTable(articles, visibleArticles, loadMore, loadLess) {
        return (
            <div className="container">
                <div className="row">
                    {articles.slice(0, visibleArticles).map(article => (
                        <div className="col-md-4" key={article.title}>
                            <div className="card mb-4">
                                <img src={article.Image} className="card-img-top" alt={article.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.summary}</p>
                                    <a href={article.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Se mer
                                    </a>
                                    <p className="card-text">
                                        <small className="text-muted">{article.published}</small>
                                    </p>
                                    <p className="card-text">
                                        <strong>{article.topic.join(", ")}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleArticles < articles.length && (
                    <div className="text-center">
                        <button
                            className="btn btn-primary mt-4 mr-2"
                            onClick={loadMore}
                        >
                            View More
                        </button>
                        <button
                            className="btn btn-secondary mt-4"
                            onClick={loadLess}
                        >
                            View Less
                        </button>
                    </div>
                )}
            </div>
        );
    }

    render() {
        const { articles, visibleArticles, loading } = this.state;

        let contents = loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderArticlesTable(articles, visibleArticles, this.loadMore, this.loadLess);

        return (
            <div>
                {contents}
            </div>
        );
    }

    loadMore = () => {
        // Increase the number of visible articles by 9
        this.setState(prevState => ({
            visibleArticles: prevState.visibleArticles + 9,
        }));
    };

    loadLess = () => {
        // Decrease the number of visible articles by 9
        this.setState(prevState => ({
            visibleArticles: Math.max(prevState.visibleArticles - 9, 9),
        }));
    };

    async populateArticleData() {
        const response = await fetch('/home');
        const data = await response.json();
        this.setState({ articles: data, loading: false });
    }
}
