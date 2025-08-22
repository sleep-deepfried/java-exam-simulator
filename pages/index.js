import { useState } from 'react'
import Link from 'next/link'
import { topics } from '../data/questions'

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState(topics.map(topic => topic))
  const [numQuestions, setNumQuestions] = useState(64)

  const toggleTopic = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const selectAllTopics = () => {
    setSelectedTopics([...topics])
  }

  const deselectAllTopics = () => {
    setSelectedTopics([])
  }

  return (
    <div className="quiz-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Java Certification Quiz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice for your Java certification exam with comprehensive questions 
            covering all essential topics. Test your knowledge and track your progress.
          </p>
        </div>

        {/* Quiz Configuration Card */}
        <div className="question-card mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Topics Selection */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Select Topics
              </h2>
              
              {/* Select All/None Buttons */}
              <div className="flex gap-3 mb-4">
                <button 
                  onClick={selectAllTopics}
                  className="text-sm text-exam-blue hover:text-blue-700 font-medium"
                >
                  Select All
                </button>
                <button 
                  onClick={deselectAllTopics}
                  className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                  Deselect All
                </button>
              </div>

              {/* Topics List */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {topics.map((topic, index) => (
                  <label key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => toggleTopic(topic)}
                      className="w-4 h-4 text-exam-blue bg-gray-100 border-gray-300 rounded focus:ring-exam-blue focus:ring-2"
                    />
                    <span className="ml-3 text-gray-700 font-medium">{topic}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quiz Settings */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Quiz Settings
              </h2>
              
              <div className="space-y-6">
                {/* Number of Questions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <select 
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-exam-blue focus:border-exam-blue"
                  >
                    <option value={10}>10 Questions</option>
                    <option value={20}>20 Questions</option>
                    <option value={30}>30 Questions</option>
                    <option value={64}>64 Questions (Full Exam)</option>
                  </select>
                </div>

                {/* Quiz Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-exam-blue mb-2">Quiz Information</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Multiple choice questions</li>
                    <li>• Detailed explanations provided</li>
                    <li>• Topic-wise performance tracking</li>
                    <li>• Review incorrect answers</li>
                  </ul>
                </div>

                {/* Selected Topics Summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Selected Topics</h3>
                  <p className="text-sm text-gray-600">
                    {selectedTopics.length} of {topics.length} topics selected
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Quiz Button */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            {selectedTopics.length > 0 ? (
              <Link 
                href={{
                  pathname: '/quiz',
                  query: { 
                    topics: selectedTopics.join(','),
                    numQuestions: numQuestions
                  }
                }}
              >
                <button className="btn-primary text-lg px-12 py-4">
                  Start Quiz ({numQuestions} Questions)
                </button>
              </Link>
            ) : (
              <button 
                disabled 
                className="bg-gray-300 text-gray-500 font-medium py-3 px-8 rounded-lg cursor-not-allowed"
              >
                Please select at least one topic
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-exam-blue bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-exam-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Exam Experience</h3>
            <p className="text-gray-600 text-sm">Questions designed to match actual certification exam patterns and difficulty level.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-exam-green bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-exam-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
            <p className="text-gray-600 text-sm">Get comprehensive results with topic-wise breakdown and performance insights.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-purple-500 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn from Mistakes</h3>
            <p className="text-gray-600 text-sm">Review detailed explanations for each question to strengthen your understanding.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
