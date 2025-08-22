# Java Certification Quiz Website

A comprehensive, professional-grade quiz application designed to help you practice for Java certification exams. Built with Next.js and Tailwind CSS to provide an assessment center-like experience.

## Features

### 🎯 **Quiz Experience**
- **30 comprehensive questions** covering all essential Java topics
- **Professional assessment center UI** with clean, modern design
- **Timed quiz mode** (60 minutes) with countdown timer
- **Question navigation panel** with progress tracking
- **Multiple choice questions** with detailed explanations

### 📊 **Detailed Results & Analytics**
- **Overall score percentage** with letter grades (A-F)
- **Topic-wise performance breakdown** with individual percentages
- **Performance insights** highlighting strengths and areas for improvement
- **Time tracking** showing total time spent on the quiz
- **Visual progress bars** for each topic

### 🔍 **Review & Learning**
- **Comprehensive answer review** showing correct/incorrect responses
- **Detailed explanations** for every question
- **Visual feedback** with color-coded answers
- **Question-by-question breakdown** for focused learning

### 🎨 **Topics Covered**
- Scope Variables
- Java Core API (String, StringBuilder, Collections)
- Lambdas & Functional Programming
- Data Types & Wrapper Classes
- Operators & Control Structures
- Package Management & Imports
- Arrays & Collections (ArrayList, Arrays.asList)
- Methods & Encapsulation
- Inheritance & Polymorphism
- Exception Handling (Error vs Exception)
- Date Time API
- And more...

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd /Users/earljohn.pulido/Documents/java-exam-website
   ```

2. **Install dependencies** (if not already done)
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

### 1. **Configure Your Quiz**
- Select topics you want to focus on
- Choose number of questions (10, 20, or 30)
- Review quiz settings and information

### 2. **Take the Quiz**
- Answer multiple choice questions
- Navigate between questions using the side panel
- Track your progress with the progress bar
- Submit when ready or when time runs out

### 3. **Review Results**
- View your overall score and grade
- Analyze topic-wise performance
- Review detailed explanations for each question
- Identify areas for improvement

## Project Structure

```
java-exam-website/
├── pages/
│   ├── _app.js           # App configuration and global styles
│   ├── index.js          # Home page with quiz configuration
│   ├── quiz.js           # Main quiz interface
│   └── results.js        # Results and review page
├── data/
│   └── questions.js      # Question bank with 30 comprehensive questions
├── styles/
│   └── globals.css       # Tailwind CSS and custom styles
├── components/           # (Future React components)
└── public/              # Static assets
```

## Technologies Used

- **Next.js** - React framework for production-ready applications
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## Key Features Breakdown

### Question Bank
- **30 carefully crafted questions** based on real Java certification exam patterns
- **Code snippets** for practical programming scenarios
- **Multiple difficulty levels** covering basic to advanced concepts
- **Comprehensive explanations** for better understanding

### User Interface
- **Professional assessment center design** with clean typography
- **Responsive layout** that works on desktop, tablet, and mobile
- **Intuitive navigation** with keyboard shortcuts
- **Visual feedback** for user actions and quiz progress

### Quiz Logic
- **Smart question shuffling** for varied quiz experiences
- **Topic filtering** to focus on specific areas
- **Progress persistence** using local storage
- **Timer functionality** with automatic submission

### Results Analytics
- **Letter grade system** (A-F) based on percentage scores
- **Topic performance matrix** showing strengths and weaknesses
- **Visual progress indicators** for easy understanding
- **Actionable insights** for focused improvement

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Customization

### Adding Questions
Edit `/data/questions.js` to add more questions:

```javascript
{
  id: 31,
  topic: "Your Topic",
  question: "Your question text",
  code: "// Optional code snippet", 
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0, // Index of correct answer
  explanation: "Detailed explanation of the answer"
}
```

### Styling
Modify `/styles/globals.css` or use Tailwind classes directly in components.

### Topics
Update the topics array in `/data/questions.js` to add new categories.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is created for educational purposes to help with Java certification preparation.

---

**Happy studying and good luck with your Java certification! 🚀**
