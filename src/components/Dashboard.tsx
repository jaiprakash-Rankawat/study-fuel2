
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Star, 
  Clock, 
  TrendingUp, 
  Users, 
  Award,
  Calendar,
  Target,
  Brain,
  MessageSquare
} from "lucide-react";

const Dashboard = () => {
  const [studyStreak, setStudyStreak] = useState(7);
  const [weeklyGoal, setWeeklyGoal] = useState(75);

  const recentActivity = [
    {
      id: 1,
      type: "flashcard",
      title: "Data Structures - Arrays",
      time: "2 hours ago",
      progress: 85
    },
    {
      id: 2,
      type: "mock-test",
      title: "Computer Networks Mock Test",
      time: "Yesterday",
      score: 78
    },
    {
      id: 3,
      type: "notes",
      title: "Operating Systems Notes",
      time: "2 days ago",
      action: "downloaded"
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "CSE 6th Sem Study Group",
      members: 24,
      nextSession: "Today 6:00 PM",
      subject: "Computer Networks"
    },
    {
      id: 2,
      name: "GATE 2025 Preparation",
      members: 156,
      nextSession: "Tomorrow 4:00 PM",
      subject: "Algorithms"
    }
  ];

  const upcomingExams = [
    {
      id: 1,
      subject: "Computer Networks",
      date: "2024-02-15",
      daysLeft: 5,
      preparedness: 78
    },
    {
      id: 2,
      subject: "Database Management",
      date: "2024-02-20",
      daysLeft: 10,
      preparedness: 65
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
        <p className="text-gray-600">Ready to fuel your learning journey today?</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Study Streak</p>
                <p className="text-2xl font-bold text-gray-900">{studyStreak} days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Weekly Goal</p>
                <p className="text-2xl font-bold text-gray-900">{weeklyGoal}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Flashcards</p>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Points Earned</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Study Progress
              </CardTitle>
              <CardDescription>Your learning journey this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Weekly Study Goal</span>
                    <span className="text-sm text-gray-600">{weeklyGoal}% completed</span>
                  </div>
                  <Progress value={weeklyGoal} className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">12</p>
                    <p className="text-sm text-gray-600">Hours Studied</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">5</p>
                    <p className="text-sm text-gray-600">Mock Tests</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {activity.type === 'flashcard' && <Brain className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'mock-test' && <Target className="h-4 w-4 text-green-600" />}
                        {activity.type === 'notes' && <BookOpen className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.progress && (
                        <Badge variant="secondary">{activity.progress}% complete</Badge>
                      )}
                      {activity.score && (
                        <Badge variant="default">{activity.score}% score</Badge>
                      )}
                      {activity.action && (
                        <Badge variant="outline">{activity.action}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Exams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-red-600" />
                Upcoming Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingExams.map((exam) => (
                  <div key={exam.id} className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-medium text-gray-900">{exam.subject}</h4>
                    <p className="text-sm text-gray-600">{exam.daysLeft} days left</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Preparedness</span>
                        <span>{exam.preparedness}%</span>
                      </div>
                      <Progress value={exam.preparedness} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Study Groups */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                My Study Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studyGroups.map((group) => (
                  <div key={group.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">{group.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{group.subject}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{group.members} members</span>
                      <span className="text-blue-600 font-medium">{group.nextSession}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Join New Group
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start">
                <Brain className="h-4 w-4 mr-2" />
                Create Flashcard Set
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="h-4 w-4 mr-2" />
                Take Mock Test
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Upload Notes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
