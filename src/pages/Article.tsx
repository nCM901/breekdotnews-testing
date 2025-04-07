import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Article {
  id: string
  title: string
  content: string
  category: string
  date: string
  author: string
}

function Article() {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Implement article fetching logic
    // This is where you'll fetch the specific article using the ID
    setLoading(false)
  }, [id])

  if (loading) {
    return <div>Loading article...</div>
  }

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
        <div className="mt-4 flex items-center text-gray-500">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.category}</span>
        </div>
      </header>
      <div className="mt-8 text-gray-700" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}

export default Article 