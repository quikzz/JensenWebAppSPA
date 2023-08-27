import React, { Component } from 'react';
import NewsCard from '@/components/newscard/NewsCard';
import BasicExample from './components/newscard/newscard';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], visibleArticles: 9, loading: true };
    }

    componentDidMount() {
        this.populateArticleData();
    }

    render() {
        const { articles, visibleArticles, loading } = this.state;
        
        return (
            <div>
                <NewsCard
                    articles={articles}
                    visibleArticles={visibleArticles}
                    loading={loading}
                    loadMore={this.loadMore}
                    loadLess={this.loadLess}
                />
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
