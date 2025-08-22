import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { questionBank } from '../data/questions'

export default function Quiz() {
  const router = useRouter()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(3600) // 60 minutes
  const [showConfirm, setShowConfirm] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    if (router.query.topics && router.query.numQuestions) {
      const selectedTopics = router.query.topics.split(',')
      const numQuestions = parseInt(router.query.numQuestions)
      
      // Filter questions by selected topics
      const filteredQuestions = questionBank.filter(q => 
        selectedTopics.includes(q.topic)
      )
      
      // Shuffle and select required number of questions
      const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
      const selected = shuffled.slice(0, numQuestions)
      
      setQuestions(selected)
      setQuizStarted(true)
    }
  }, [router.query])

  // Timer effect
  useEffect(() => {
    if (timeRemaining > 0 && quizStarted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0) {
      handleSubmitQuiz()
    }
  }, [timeRemaining, quizStarted])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleQuestionJump = (index) => {
    setCurrentIndex(index)
  }

  const handleSubmitQuiz = () => {
    const results = {
      answers,
      questions,
      timeUsed: 3600 - timeRemaining,
      totalQuestions: questions.length
    }
    
    localStorage.setItem('quizResults', JSON.stringify(results))
    router.push('/results')
  }

  const getAnsweredCount = () => {
    return Object.keys(answers).length
  }

  const getUnansweredQuestions = () => {
    return questions.filter(q => !(q.id in answers))
  }

  if (!quizStarted || questions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-exam-blue mx-auto mb-4"></div>
            <p className="text-gray-600">Loading quiz questions...</p>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100

  return (
    <div className="quiz-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Java Certification Quiz</h1>
              <p className="text-gray-600">Question {currentIndex + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-exam-blue mb-1">
                {formatTime(timeRemaining)}
              </div>
              <p className="text-sm text-gray-600">Time Remaining</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Navigation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 mb-6">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionJump(index)}
                    className={`
                      w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200
                      ${index === currentIndex 
                        ? 'bg-exam-blue text-white border-2 border-exam-blue' 
                        : answers[q.id] !== undefined
                          ? 'bg-exam-green text-white border border-exam-green'
                          : 'bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200'
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Answered:</span>
                  <span className="font-medium text-exam-green">{getAnsweredCount()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-medium text-gray-700">{questions.length - getAnsweredCount()}</span>
                </div>
              </div>

              <button
                onClick={() => setShowConfirm(true)}
                className="w-full mt-6 bg-exam-green hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          </div>

          {/* Main Question Panel */}
          <div className="lg:col-span-3">
            <div className="question-card">
              {/* Topic Badge */}
              <div className="mb-4">
                <span className="inline-block bg-exam-blue bg-opacity-10 text-exam-blue text-sm font-medium px-3 py-1 rounded-full">
                  {currentQuestion.topic}
                </span>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentQuestion.question}
                </h2>
                
                {/* Code Block */}
                {currentQuestion.code && (
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {currentQuestion.code}
                    </pre>
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                    className={`
                      option-button text-base
                      ${answers[currentQuestion.id] === index ? 'option-selected' : ''}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`
                    flex items-center px-6 py-3 rounded-lg font-medium transition-colors
                    ${currentIndex === 0 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'btn-secondary'
                    }
                  `}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                  className={`
                    flex items-center px-6 py-3 rounded-lg font-medium transition-colors
                    ${currentIndex === questions.length - 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'btn-primary'
                    }
                  `}
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Quiz?</h3>
            <p className="text-gray-600 mb-6">
              You have answered {getAnsweredCount()} out of {questions.length} questions.
              {getUnansweredQuestions().length > 0 && (
                <span className="block mt-2 text-amber-600">
                  {getUnansweredQuestions().length} questions remain unanswered.
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 btn-secondary"
              >
                Continue Quiz
              </button>
              <button
                onClick={handleSubmitQuiz}
                className="flex-1 btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
