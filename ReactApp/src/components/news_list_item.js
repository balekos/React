import React from 'react';
import {css} from 'glamor';

const NewsItem = ({item}) => { 

    // Implimenting the glamor css that we downloaded with npm
    let news_item_style= css ({
        padding: '20px',
        boxSizing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover':{
            color:'red'
        },
        '@media(max-width: 500px)':{ //dafuq does that do?!
            color:'blue'
        }
    })

    let news_item_color= css ({
        background:'lightgrey'
    })


   
    return (
        <div {...news_item_style} {...news_item_color}> 
            <h3> {item.title} </h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}


export default NewsItem;



