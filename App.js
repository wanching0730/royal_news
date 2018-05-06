import React from 'react';
import { FlatList } from 'react-native';

import { getNews } from './src/news';
import Article from './src/components/Article';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  // called after a component is mounted
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews().then(articles => this.setState({ articles, refreshing: false }))
    .catch(() => this.state({ refreshing: false}));
  }

  handleRefresh() {
    this.setState( 
      {
        refreshing: true
      }, 
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        // pass article to Article component
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}

        // represent the spinner animation
        refreshing={this.state.refreshing}

        // called immediately when refreshing is true
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

