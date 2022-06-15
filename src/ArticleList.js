import { Link } from "react";
import { useState, useEffect } from "react";

function ArticleList() {
  const [articles, setArticles] = useState(null);

  useEffect(function () {
    axios
      .get("https://limon-kg-default-rtdb.firebaseio.com/articles/json")
      .then(({ data }) => {
        setArticles(Object.keys(data).map((id) => ({ id: id, ...data[id] })));
      });
  }, []);

  let output = "Loading...";
  if (articles !== null) {
    output = articles.map((article) => (
      <li key={article.id}>
        <Link>
          {article.text} {article.title}
        </Link>
      </li>
    ));
  }

  return <ul className="ArticleList">{output}</ul>;
}

export default ArticleList;
