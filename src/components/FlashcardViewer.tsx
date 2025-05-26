
import { useState, useEffect } from "react";
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
  Star
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

  const currentCard = flashcards[currentCardIndex];

  useEffect(() => {
    setSessionProgress(((currentCardIndex + 1) / flashcards.length) * 100);
  }, [currentCardIndex]);

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
    // Handle spaced repetition logic here
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
    const intervals = [1, 3, 7, 14, 30]; // days
    const days = intervals[Math.min(repetitionCount, intervals.length - 1)];
    return `${days} day${days > 1 ? 's' : ''}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />
            Flashcard Study Session
          </h1>
          <div className="flex items-center space-x-2">
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
      </div>

      {/* Flashcard */}
      <div className="mb-6">
        <Card className="min-h-[400px] cursor-pointer transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8 h-full flex flex-col justify-center" onClick={handleFlip}>
            <div className="text-center space-y-4">
              {!isFlipped ? (
                <>
                  <div className="flex justify-center mb-4">
                    <Badge className={getDifficultyColor(currentCard.difficulty)}>
                      {currentCard.difficulty.toUpperCase()}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Question</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentCard.question}
                  </p>
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Click to reveal answer</p>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <Button variant="outline" onClick={handleFlip}>
            <RotateCcw className="h-4 w-4 mr-2" />
            {isFlipped ? 'Show Question' : 'Show Answer'}
          </Button>

          <Button 
            variant="outline" 
            onClick={handleNext}
            disabled={currentCardIndex === flashcards.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Spaced Repetition Controls */}
        {isFlipped && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-3 text-center">
              How well did you know this answer?
            </p>
            <div className="flex justify-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResponse('hard')}
                className="flex items-center space-x-1"
              >
                <XCircle className="h-4 w-4 text-red-500" />
                <span>Hard</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResponse('medium')}
                className="flex items-center space-x-1"
              >
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Medium</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResponse('easy')}
                className="flex items-center space-x-1"
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Easy</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Study Session Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">Cards Studied Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">25</div>
            <div className="text-sm text-gray-600">Study Streak (days)</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlashcardViewer;
