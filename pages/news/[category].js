import React from 'react'

const ArticleListByCategory = ({articles, category}) => {
  return (
    <>
        <h1>Showing news for category <i>{category}</i></h1>
        {
            articles.map((article) => (
                <div key={article.id}>
                    <h2>
                        {article.id} {article.title} | {article.category}
                    </h2>
                    <p>{article.description}</p>
                    <hr/>
                </div>
            ))
        }
    </>
  )
}

export default ArticleListByCategory

export const getServerSideProps = async (context) => {
    const {params, req, res, query} = context

    // console.log(req.headers.cookie)
    console.log(query)
    res.setHeader('Set-cookie', ["name=Aadarsh"])

    const {category} = params
    const response = await fetch(`http://localhost:3004/news?category=${category}`)

    const data = await response.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}