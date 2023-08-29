import React, { Component } from 'react';
import NewsCard from '@/components/newscard/NewsCard';
import OldCard from '@/components/oldcard/oldcard';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], visibleArticles: 9, VisibleArticlesOld: 8, loading: true };
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
