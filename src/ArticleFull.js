import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-roter-dom"; 

function ArticleFull() {
    const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(function () {
    axios.get(`https://limon-kg-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticle(data)); 
  }, []);

  let output = "Loading...";
  if (article !== null) {
    output = (
        <>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
            </>
    );

  }

  return (
  <article> 
      {output}
  </article>
         

  );
}

export default ArticleFull;
