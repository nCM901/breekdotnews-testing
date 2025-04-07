import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Pages
const Home = React.lazy(() => import('./pages/Home'))
const Article = React.lazy(() => import('./pages/Article'))
const Category = React.lazy(() => import('./pages/Category'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between items-center">
              <Link to="/" className="text-3xl font-bold text-gray-900">
                Breek
              </Link>
              <div className="space-x-4">
                <Link to="/category/technology" className="text-gray-600 hover:text-gray-900">Technology</Link>
                <Link to="/category/business" className="text-gray-600 hover:text-gray-900">Business</Link>
                <Link to="/category/sports" className="text-gray-600 hover:text-gray-900">Sports</Link>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/category/:category" element={<Category />} />
              </Routes>
            </React.Suspense>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App 