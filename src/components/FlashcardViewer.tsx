
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Brain, 
  CheckCircle, 
  XCircle,
  Clock,
  Star,
  GraduationCap
} from "lucide-react";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  subject: string;
  lastReviewed?: Date;
  repetitionCount: number;
  nextReview?: Date;
}

const FlashcardViewer = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState<'review' | 'practice'>('review');
  const [sessionProgress, setSessionProgress] = useState(0);
  const [showColleges, setShowColleges] = useState(false);

  // Sample flashcard data
  const flashcards: Flashcard[] = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      answer: "O(log n) - Binary search divides the search space in half with each iteration, making it logarithmic.",
      difficulty: 'medium',
      subject: "Data Structures",
      repetitionCount: 3,
      lastReviewed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      id: 2,
      question: "Define polymorphism in OOP",
      answer: "Polymorphism allows objects of different types to be treated as objects of a common base type. It enables a single interface to represent different data types.",
      difficulty: 'hard',
      subject: "Object Oriented Programming",
      repetitionCount: 1,
      lastReviewed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: 3,
      question: "What is a primary key in database?",
      answer: "A primary key is a column or combination of columns that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.",
      difficulty: 'easy',
      subject: "Database Management",
      repetitionCount: 5,
      lastReviewed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    }
  ];

  const colleges = [
    { id: 1, name: "IIT Delhi", location: "New Delhi", rating: 4.8, courses: ["Computer Science", "Electrical", "Mechanical"] },
    { id: 2, name: "IIT Bombay", location: "Mumbai", rating: 4.9, courses: ["Computer Science", "Chemical", "Aerospace"] },
    { id: 3, name: "BITS Pilani", location: "Pilani", rating: 4.6, courses: ["Computer Science", "Electronics", "Biotechnology"] },
    { id: 4, name: "NIT Trichy", location: "Tiruchirappalli", rating: 4.5, courses: ["Computer Science", "Civil", "Mechanical"] }
  ];

  const currentCard = flashcards[currentCardIndex];

  useEffect(() => {
    setSessionProgress(((currentCardIndex + 1) / flashcards.length) * 100);
  }, [currentCardIndex, flashcards.length]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleResponse = (difficulty: 'easy' | 'medium' | 'hard') => {
    console.log(`Marked as ${difficulty} for card ${currentCard.id}`);
    handleNext();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNextReviewTime = (repetitionCount: number) => {
    const intervals = [1, 3, 7, 14, 30];
    const days = intervals[Math.min(repetitionCount, intervals.length - 1)];
    return `${days} day${days > 1 ? 's' : ''}`;
  };

  if (showColleges) {
    return (
      <motion.div 
        className="max-w-6xl mx-auto p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            College Explorer
          </h1>
          <Button onClick={() => setShowColleges(false)} variant="outline">
            Back to Flashcards
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {colleges.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
                    <p className="text-gray-600 mb-3">{college.location}</p>
                    <div className="flex items-center mb-4">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{college.rating}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Popular Courses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {college.courses.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            StudyFuel Flashcards
          </h1>
          <div className="flex items-center space-x-2">
            <Button 
              onClick={() => setShowColleges(true)} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <GraduationCap className="h-4 w-4" />
              Explore Colleges
            </Button>
            <Badge variant="outline">
              {currentCardIndex + 1} of {flashcards.length}
            </Badge>
            <Badge variant="secondary">{currentCard.subject}</Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Session Progress</span>
            <span>{Math.round(sessionProgress)}% Complete</span>
          </div>
          <Progress value={sessionProgress} className="w-full" />
        </div>
      </motion.div>

      {/* Flashcard */}
      <motion.div 
        className="mb-6"
        layout
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCardIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="min-h-[400px] cursor-pointer transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 h-full flex flex-col justify-center" onClick={handleFlip}>
                <motion.div 
                  className="text-center space-y-4"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  style={{ transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.6 }}
                >
                  <AnimatePresence mode="wait">
                    {!isFlipped ? (
                      <motion.div
                        key="question"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="flex justify-center mb-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className={getDifficultyColor(currentCard.difficulty)}>
                            {currentCard.difficulty.toUpperCase()}
                          </Badge>
                        </motion.div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Question</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {currentCard.question}
                        </p>
                        <motion.div 
                          className="mt-8 pt-4 border-t border-gray-200"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <p className="text-sm text-gray-500">Click to reveal answer</p>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-xl font-semibold text-green-700 mb-4">Answer</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {currentCard.answer}
                        </p>
                        <div className="mt-8 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Reviewed {currentCard.repetitionCount} times
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              Next review in {getNextReviewTime(currentCard.repetitionCount)}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Controls */}
      <motion.div 
        className="space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" onClick={handleFlip}>
              <RotateCcw className="h-4 w-4 mr-2" />
              {isFlipped ? 'Show Question' : 'Show Answer'}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              onClick={handleNext}
              disabled={currentCardIndex === flashcards.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Spaced Repetition Controls */}
        <AnimatePresence>
          {isFlipped && (
            <motion.div 
              className="bg-gray-50 p-4 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-600 mb-3 text-center">
                How well did you know this answer?
              </p>
              <div className="flex justify-center space-x-3">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleResponse('hard')}
                    className="flex items-center space-x-1"
                  >
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Hard</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleResponse('medium')}
                    className="flex items-center space-x-1"
                  >
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Medium</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleResponse('easy')}
                    className="flex items-center space-x-1"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Easy</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Study Session Stats */}
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {[
          { value: "15", label: "Cards Studied Today", color: "text-blue-600" },
          { value: "85%", label: "Accuracy Rate", color: "text-green-600" },
          { value: "25", label: "Study Streak (days)", color: "text-purple-600" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FlashcardViewer;
