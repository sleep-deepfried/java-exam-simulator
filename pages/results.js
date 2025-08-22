import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Results() {
  const router = useRouter()
  const [results, setResults] = useState(null)
  const [showReview, setShowReview] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  useEffect(() => {
    const savedResults = localStorage.getItem('quizResults')
    if (savedResults) {
      const resultsData = JSON.parse(savedResults)
      calculateResults(resultsData)
    } else {
      router.push('/')
    }
  }, [])

  const calculateResults = (data) => {
    const { answers, questions, timeUsed, totalQuestions } = data
    
    let correctAnswers = 0
    let topicStats = {}
    let reviewData = []

    questions.forEach(question => {
      const userAnswer = answers[question.id]
      const isCorrect = userAnswer === question.correct
      
      if (isCorrect) correctAnswers++

      // Initialize topic stats
      if (!topicStats[question.topic]) {
        topicStats[question.topic] = { correct: 0, total: 0, percentage: 0 }
      }
      
      topicStats[question.topic].total++
      if (isCorrect) topicStats[question.topic].correct++

      // Add to review data
      reviewData.push({
        ...question,
        userAnswer,
        isCorrect,
        selectedOption: userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'
      })
    })

    // Calculate topic percentages
    Object.keys(topicStats).forEach(topic => {
      const stats = topicStats[topic]
      stats.percentage = Math.round((stats.correct / stats.total) * 100)
    })

    const totalScore = Math.round((correctAnswers / totalQuestions) * 100)
    const grade = getGrade(totalScore)

    setResults({
      totalScore,
      correctAnswers,
      totalQuestions,
      answeredQuestions: Object.keys(answers).length,
      timeUsed,
      topicStats,
      reviewData,
      grade
    })
  }

  const getGrade = (score) => {
    if (score >= 90) return { letter: 'A', description: 'Excellent', color: 'text-green-600' }
    if (score >= 80) return { letter: 'B', description: 'Good', color: 'text-blue-600' }
    if (score >= 70) return { letter: 'C', description: 'Average', color: 'text-yellow-600' }
    if (score >= 60) return { letter: 'D', description: 'Below Average', color: 'text-orange-600' }
    return { letter: 'F', description: 'Needs Improvement', color: 'text-red-600' }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-exam-green'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-exam-red'
  }

  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-exam-green'
    if (percentage >= 60) return 'bg-yellow-500'
    return 'bg-exam-red'
  }

  if (!results) {
    return (
      <div className="quiz-container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-exam-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Calculating results...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Quiz Results</h1>
          <p className="text-xl text-gray-600">Here's how you performed on the Java certification quiz</p>
        </div>

        {/* Overall Score Card */}
        <div className="result-card mb-8">
          <div className="text-center">
            <div className={`text-6xl font-bold mb-2 ${results.grade.color}`}>
              {results.totalScore}%
            </div>
            <div className={`text-2xl font-semibold mb-4 ${results.grade.color}`}>
              Grade: {results.grade.letter} - {results.grade.description}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-exam-green">{results.correctAnswers}</div>
                <div className="text-gray-600">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-exam-red">{results.totalQuestions - results.correctAnswers}</div>
                <div className="text-gray-600">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-exam-blue">{results.answeredQuestions}</div>
                <div className="text-gray-600">Answered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">{formatTime(results.timeUsed)}</div>
                <div className="text-gray-600">Time Used</div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Performance */}
        <div className="result-card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Topic-wise Performance</h2>
          <div className="space-y-4">
            {Object.entries(results.topicStats).map(([topic, stats]) => (
              <div key={topic} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">{topic}</h3>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${getScoreColor(stats.percentage)}`}>
                      {stats.percentage}%
                    </span>
                    <div className="text-sm text-gray-600">
                      {stats.correct}/{stats.total} correct
                    </div>
                  </div>
                </div>
                <div className="topic-progress-bar">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(stats.percentage)}`}
                    style={{ width: `${stats.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="result-card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Performance Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Strengths</h3>
              <div className="space-y-2">
                {Object.entries(results.topicStats)
                  .filter(([_, stats]) => stats.percentage >= 80)
                  .map(([topic, stats]) => (
                    <div key={topic} className="flex items-center text-exam-green">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{topic} ({stats.percentage}%)</span>
                    </div>
                  ))
                }
                {Object.entries(results.topicStats).filter(([_, stats]) => stats.percentage >= 80).length === 0 && (
                  <p className="text-gray-600 italic">Keep practicing to build stronger areas!</p>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Areas for Improvement</h3>
              <div className="space-y-2">
                {Object.entries(results.topicStats)
                  .filter(([_, stats]) => stats.percentage < 70)
                  .map(([topic, stats]) => (
                    <div key={topic} className="flex items-center text-exam-red">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{topic} ({stats.percentage}%)</span>
                    </div>
                  ))
                }
                {Object.entries(results.topicStats).filter(([_, stats]) => stats.percentage < 70).length === 0 && (
                  <p className="text-gray-600 italic">Great job! All topics show good understanding.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => setShowReview(true)}
            className="btn-primary px-8"
          >
            Review Answers
          </button>
          <Link href="/">
            <button className="btn-secondary px-8">
              Take Another Quiz
            </button>
          </Link>
        </div>
      </div>

      {/* Review Modal */}
      {showReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">Review Answers</h3>
                <button
                  onClick={() => {setShowReview(false); setSelectedQuestion(null)}}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex h-[calc(90vh-80px)]">
              {/* Question List */}
              <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  {results.reviewData.map((question, index) => (
                    <button
                      key={question.id}
                      onClick={() => setSelectedQuestion(question)}
                      className={`
                        w-full text-left p-3 rounded-lg mb-2 border transition-all duration-200
                        ${selectedQuestion?.id === question.id 
                          ? 'border-exam-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Question {index + 1}</span>
                        <span className={`
                          w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white
                          ${question.isCorrect ? 'bg-exam-green' : 'bg-exam-red'}
                        `}>
                          {question.isCorrect ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{question.topic}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question Details */}
              <div className="flex-1 overflow-y-auto">
                {selectedQuestion ? (
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-exam-blue bg-opacity-10 text-exam-blue text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {selectedQuestion.topic}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {selectedQuestion.question}
                      </h4>
                    </div>

                    {selectedQuestion.code && (
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                        <pre className="text-sm font-mono whitespace-pre-wrap">
                          {selectedQuestion.code}
                        </pre>
                      </div>
                    )}

                    <div className="space-y-3 mb-6">
                      {selectedQuestion.options.map((option, index) => (
                        <div
                          key={index}
                          className={`
                            p-3 rounded-lg border-2 
                            ${index === selectedQuestion.correct 
                              ? 'option-correct' 
                              : index === selectedQuestion.userAnswer && !selectedQuestion.isCorrect
                                ? 'option-incorrect'
                                : 'border-gray-200'
                            }
                          `}
                        >
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-sm font-bold">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span>{option}</span>
                            {index === selectedQuestion.correct && (
                              <span className="ml-auto text-exam-green font-medium">✓ Correct</span>
                            )}
                            {index === selectedQuestion.userAnswer && !selectedQuestion.isCorrect && (
                              <span className="ml-auto text-exam-red font-medium">✗ Your Answer</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-medium text-exam-blue mb-2">Explanation:</h5>
                      <p className="text-blue-700">{selectedQuestion.explanation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select a question to review
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
