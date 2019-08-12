import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import Form from './components/Form';

class App extends Component {
  state = { 
    news: []
   }

  componentDidMount () {
    console.log("ya comenzo la llamada")
    this.callApiNews()
    console.log("ya termino la llamada")
  }

  callApiNews = async (category = 'general') => {
    console.log("ya durante la llamada")
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=6f0fe7df2f0b4dce9dc77aa71e746bc4`;
    const news = await (await fetch(url)).json();
    console.log("ya durante la llamada")
    this.setState({ 
      news: news.articles
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header 
          title="Noticias React API"
        />
        <div className="container white contenedor-noticias">
          <Form 
            callApiNews={this.callApiNews}
          />
          <ListNews 
            news={this.state.news}
          />
        </div>
      </Fragment>
     );
  }
}
 
export default App;