import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id:1,
        title: "Whats About This Page",
        text:  "This Page showing what's I learn juring my school and courses It's not all whait for more soon :)",
        author: "$WR",
    },
    {
        id:2,
        title: "Whats New Will Come Soon",
        text:  " More Basic Projects and One Verry Cool After Finishing another course",
        author: "$WR",
    },
    {
        id:3,
        title: "What's You Think About This Page",
        text:  "Write In Contact Section",
        author: "$WR",
    },
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id}{...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;