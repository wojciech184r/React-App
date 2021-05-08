import React from 'react';

const Article = ({title, author, text}) => {
const styles = {
    marginTop: 40
}

    return ( 
        <article style={styles}>
            <h3 
            style={{marginBotom: 3, textTransform: "uppercase"}}>{title}</h3>
            <br />
            <p style={{fontSize:15}}>{text}</p>
            <br />
            <span style={{display: "block",marginBottom: 10, fontSize: 12}}>{author}</span>
        </article>
     );
}
 
export default Article;