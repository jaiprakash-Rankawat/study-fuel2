
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Trophy, 
  Play, 
  BookOpen, 
  Target, 
  BarChart3,
  Calendar
} from "lucide-react";

const MockTests = () => {
  const mockTests = [
    {
      id: 1,
      title: "Computer Networks Final Exam Mock Test",
      subject: "Computer Networks",
      duration: 180,
      questions: 100,
      difficulty: "Hard",
      attempts: 1234,
      avgScore: 78,
      myBestScore: 85,
      lastAttempt: "2 days ago"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms Practice Test",
      subject: "DSA",
      duration: 120,
      questions: 75,
      difficulty: "Medium",
      attempts: 2156,
      avgScore: 72,
      myBestScore: null,
      lastAttempt: null
    },
    {
      id: 3,
      title: "GATE CSE 2024 Mock Test Series - 1",
      subject: "GATE Preparation",
      duration: 180,
      questions: 65,
      difficulty: "Hard",
      attempts: 5678,
      avgScore: 65,
      myBestScore: 78,
      lastAttempt: "1 week ago"
    },
    {
      id: 4,
      title: "Database Management Quick Quiz",
      subject: "DBMS",
      duration: 60,
      questions: 30,
      difficulty: "Easy",
      attempts: 892,
      avgScore: 82,
      myBestScore: 90,
      lastAttempt: "3 days ago"
    }
  ];

  const recentResults = [
    {
      id: 1,
      testName: "Computer Networks Final Mock",
      score: 85,
      totalQuestions: 100,
      timeSpent: 165,
      date: "2 days ago",
      rank: 12
    },
    {
      id: 2,
      testName: "GATE CSE Mock Test - 1",
      score: 78,
      totalQuestions: 65,
      timeSpent: 175,
      date: "1 week ago",
      rank: 45
    },
    {
      id: 3,
      testName: "DBMS Quick Quiz",
      score: 90,
      totalQuestions: 30,
      timeSpent: 45,
      date: "3 days ago",
      rank: 3
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Tests & Practice</h1>
          <p className="text-gray-600">Test your knowledge and track your progress with our comprehensive mock tests</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Tests Taken</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Best Score</p>
                  <p className="text-2xl font-bold text-gray-900">95%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Global Rank</p>
                  <p className="text-2xl font-bold text-gray-900">#156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Tests */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Available Mock Tests
                </CardTitle>
                <CardDescription>Choose from our collection of practice tests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTests.map((test) => (
                    <div key={test.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{test.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{test.subject}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {test.duration} min
                            </div>
                            <div className="flex items-center">
                              <Target className="h-4 w-4 mr-1" />
                              {test.questions} questions
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {test.attempts} attempts
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getDifficultyColor(test.difficulty)}>
                            {test.difficulty}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-600">Avg Score: {test.avgScore}%</span>
                          {test.myBestScore && (
                            <span className="text-green-600 font-medium">Your Best: {test.myBestScore}%</span>
                          )}
                          {test.lastAttempt && (
                            <span className="text-gray-500">Last: {test.lastAttempt}</span>
                          )}
                        </div>
                        <Button size="sm" className="flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          Start Test
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResults.map((result) => (
                    <div key={result.id} className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-medium text-gray-900 text-sm">{result.testName}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-lg font-bold text-blue-600">
                          {result.score}/{result.totalQuestions}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          Rank #{result.rank}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span>{result.timeSpent} min</span>
                        <span>{result.date}</span>
                      </div>
                      <Progress 
                        value={(result.score / result.totalQuestions) * 100} 
                        className="h-2 mt-2" 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Play className="h-4 w-4 mr-2" />
                  Random Quick Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Practice
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Performance
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Weekly Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">GATE Preparation Challenge</h3>
                  <p className="text-sm text-gray-600 mb-3">Complete 5 mock tests this week</p>
                  <Progress value={60} className="mb-3" />
                  <p className="text-xs text-gray-500">3/5 completed</p>
                  <Button size="sm" className="mt-3">Join Challenge</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTests;
