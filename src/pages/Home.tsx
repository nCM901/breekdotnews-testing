import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface NewsArticle {
  id: string
  title: string
  summary: string
  category: string
  date: string
}

function Home() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Implement news fetching logic
    // This is where you'll fetch news from your backend or API
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading news...</div>
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="block bg-white shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <p className="text-sm text-gray-500">{article.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{article.title}</h3>
              <p className="mt-3 text-gray-600">{article.summary}</p>
              <p className="mt-4 text-sm text-gray-500">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home 