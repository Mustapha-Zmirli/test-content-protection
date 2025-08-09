import Link from 'next/link'
import { Calendar, User, Shield } from 'lucide-react'

const articles = [
  {
    id: 'article-1',
    title: 'The Future of Artificial Intelligence in Content Creation',
    excerpt: 'Exploring how AI is revolutionizing content creation and the tools that protect creators rights.',
    date: new Date().toLocaleDateString(),
    author: 'Test Author'
  },
  {
    id: 'article-2', 
    title: 'Digital Content Protection: A Comprehensive Guide',
    excerpt: 'A complete overview of methods and technologies for protecting digital content in the modern age.',
    date: new Date().toLocaleDateString(),
    author: 'Test Author'
  },
  {
    id: 'article-3',
    title: 'Understanding Blockchain-Based Content Verification', 
    excerpt: 'How blockchain technology is transforming content verification with immutable records.',
    date: new Date().toLocaleDateString(),
    author: 'Test Author'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Writers' Bloc Test Site
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Test website for content protection and fingerprinting features
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Test Articles for Content Protection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These articles are designed to test the Writers' Bloc content fingerprinting 
            and protection features. Each article contains unique content for testing purposes.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                </div>
                
                <Link
                  href={`/${article.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Testing Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Testing Information
          </h3>
          <div className="text-blue-800">
            <p className="mb-4">
              This website is designed for testing the Writers' Bloc content protection features:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Each article has a unique URL for individual fingerprinting</li>
              <li>Content includes various elements (headings, paragraphs, lists)</li>
              <li>Articles contain original content for testing purposes</li>
              <li>All URLs follow the pattern: yourdomain.com/article-[number]</li>
            </ul>
            <p>
              <strong>URLs to test:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 font-mono text-sm">
              <li>yourdomain.com/article-1</li>
              <li>yourdomain.com/article-2</li>
              <li>yourdomain.com/article-3</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Writers' Bloc Test Site - Created for QA Testing Purposes</p>
        </div>
      </footer>
    </div>
  )
}