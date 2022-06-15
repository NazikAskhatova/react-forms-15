import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-roter-dom"; 
import { Link } from "react-router-dom";

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

        <Link to={`/update/${id}`}>Update</Link> <Link to={`/update/${id}`}>Delete</Link>
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
