import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

// Importing Json
import JSON from './db.json';

// Components
import Header from './components/header' 


// Importing newsList
import NewsList from './components/news_list';

//giving some style
var stylist={
    textAlign: 'center',
    color: 'blue'
}


class App extends Component { 
    state = {
        news: JSON
    }

   

    render() {

        return (
            <div className="newElement">
                <Header/>
                <NewsList news={this.state.news}>
                <h2 style={stylist}>
                The news List
                </h2>
                </NewsList>
            </div>
        )
        // Thats one way of doin it  return React.createElement('h1',{className:'title'},React.createElement('div'));
    }
}

// We need to tell react how to render it

ReactDOM.render(<App />, document.querySelector('#root')); 


