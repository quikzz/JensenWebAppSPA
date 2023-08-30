import React, { Component } from 'react';
import NewsCard from '@/components/newscard/NewsCard';
import OldCard from '@/components/oldcard/oldcard';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], visibleArticles: 12, VisibleArticlesOld: 9, loading: true };
    }

    componentDidMount() {
        this.populateArticleData();
    }

    render() {
        const { articles, visibleArticles, VisibleArticlesOld, loading } = this.state;
        
        return (
            <div>
                <NewsCard
                    articles={articles}
                    visibleArticles={visibleArticles}
                    loading={loading}
                    loadMore={this.loadMore}
                    loadLess={this.loadLess}
                />
                <OldCard
                    articles={articles}
                    VisibleArticlesOld={VisibleArticlesOld}
                    loadMoreOld={this.loadMoreOld}
                    loadLessOld={this.loadLessOld}
                />
            </div>
        );
    }

    loadMore = () => {
        // Increase the number of visible articles by 12
        this.setState(prevState => ({
            visibleArticles: prevState.visibleArticles + 12,
        }));
    };

    loadLess = () => {
        // Decrease the number of visible articles by 12
        this.setState(prevState => ({
            visibleArticles: Math.max(prevState.visibleArticles - 12, 12),
        }));
    };

    //old

    loadMoreOld = () => {
        // Increase the number of visible articles by 9
        this.setState(prevState => ({
            VisibleArticlesOld: prevState.VisibleArticlesOld + 9,
        }));
    };

    loadLessOld = () => {
        // Decrease the number of visible articles by 9
        this.setState(prevState => ({
            VisibleArticlesOld: Math.max(prevState.VisibleArticlesOld - 9, 9),
        }));
    };

    async populateArticleData() {
        const response = await fetch('/home');
        const data = await response.json();
        this.setState({ articles: data, loading: false });
    }
}
