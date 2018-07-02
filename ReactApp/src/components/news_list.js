import React from 'react';
import NewsItem from './news_list_item'



// creating stateless components
const NewsList = (props) => { // Props have all the information of the object available
    const items = props.news.map((item) => {
        return (
          <NewsItem key={item.id} item={item}/> //React requires a key when using itterator like map
        )
    }); // map is an itterator offered by ES6



    return ( // All the data we pass can be found inside props!!
        <div> News List: <br />
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;