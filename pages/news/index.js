import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>List of news articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleList;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3004/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
