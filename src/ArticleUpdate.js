import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-roter-dom";

function ArticleUpdate() {
  const { id } = useParams();
  const [article, setArticle] = useState({
      title:"",
      description:""
  });

  useEffect(function() {
    axios
      .get(`https://limon-kg-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({ data }) => setArticle(data));
  }, []);

  const onFormSubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    axios.put(
      `https://limon-kg-default-rtdb.firebaseio.com/articles/${id}.json`,
      Object.fromEntries(formData.entries())
    );
  };
  return (
    <form className="ArticleUpdate" onSubmit={onFormSubmit}>
      <div>
        <label>
          Title
          <input
            type="text"
            name="title"
            defaultValue={article.title}
            required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="title"
            defaultValue={article.description}
            required
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleUpdate;
