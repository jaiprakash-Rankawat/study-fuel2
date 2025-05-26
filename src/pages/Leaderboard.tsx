
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Crown,
  Star, 
  Download, 
  Upload, 
  TrendingUp,
  Users,
  Target
} from "lucide-react";

const Leaderboard = () => {
  const topContributors = [
    {
      rank: 1,
      name: "Priya Sharma",
      avatar: "PS",
      university: "RTU Bikaner",
      branch: "CSE",
      points: 15420,
      uploads: 89,
      downloads: 45600,
      rating: 4.9,
      level: "Legendary"
    },
    {
      rank: 2,
      name: "Rahul Kumar",
      avatar: "RK",
      university: "JNVU Jodhpur",
      branch: "CSE",
      points: 13250,
      uploads: 76,
      downloads: 38200,
      rating: 4.8,
      level: "Expert"
    },
    {
      rank: 3,
      name: "Anjali Singh",
      avatar: "AS",
      university: "MDS University",
      branch: "IT",
      points: 11890,
      uploads: 68,
      downloads: 32100,
      rating: 4.8,
      level: "Expert"
    },
    {
      rank: 4,
      name: "Vikash Gupta",
      avatar: "VG",
      university: "Kota University",
      branch: "CSE",
      points: 10560,
      uploads: 54,
      downloads: 28900,
      rating: 4.7,
      level: "Advanced"
    },
    {
      rank: 5,
      name: "Arjun Patel",
      avatar: "AP",
      university: "RTU Bikaner",
      branch: "CSE",
      points: 9240,
      uploads: 48,
      downloads: 25600,
      rating: 4.6,
      level: "Advanced"
    }
  ];

  const topDownloaders = [
    {
      rank: 1,
      name: "Amit Sharma",
      avatar: "AS",
      university: "RTU Bikaner",
      downloads: 1250,
      studyStreak: 45,
      level: "Study Champion"
    },
    {
      rank: 2,
      name: "Neha Gupta",
      avatar: "NG",
      university: "JNVU Jodhpur",
      downloads: 1180,
      studyStreak: 38,
      level: "Dedicated Learner"
    },
    {
      rank: 3,
      name: "Rohit Verma",
      avatar: "RV",
      university: "MDS University",
      downloads: 1050,
      studyStreak: 32,
      level: "Active Student"
    }
  ];

  const weeklyChampions = [
    {
      rank: 1,
      name: "Kavya Patel",
      avatar: "KP",
      weeklyPoints: 890,
      activity: "Mock Tests Champion"
    },
    {
      rank: 2,
      name: "Deepak Singh",
      avatar: "DS",
      weeklyPoints: 750,
      activity: "Upload Specialist"
    },
    {
      rank: 3,
      name: "Ritu Sharma",
      avatar: "RS",
      weeklyPoints: 680,
      activity: "Study Group Leader"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-orange-500" />;
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'legendary': return 'bg-purple-100 text-purple-800';
      case 'expert': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-green-100 text-green-800';
      case 'study champion': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Leaderboard</h1>
          <p className="text-gray-600">Celebrating our top contributors and active learners</p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Top Contributor</p>
                  <p className="text-lg font-bold text-gray-900">Priya S.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-lg font-bold text-gray-900">2,547</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Resources Shared</p>
                  <p className="text-lg font-bold text-gray-900">5,234</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Growth This Month</p>
                  <p className="text-lg font-bold text-gray-900">+23%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contributors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
            <TabsTrigger value="learners">Active Learners</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Champions</TabsTrigger>
          </TabsList>

          <TabsContent value="contributors" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Leaderboard */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      Top Contributors - All Time
                    </CardTitle>
                    <CardDescription>
                      Users ranked by their contribution points and community impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topContributors.map((user) => (
                        <div 
                          key={user.rank} 
                          className={`flex items-center p-4 rounded-lg border ${
                            user.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : 'bg-white'
                          }`}
                        >
                          <div className="w-16 flex justify-center">
                            {getRankIcon(user.rank)}
                          </div>
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src="" />
                            <AvatarFallback>{user.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-gray-900">{user.name}</h3>
                              <div className="flex items-center space-x-2">
                                <Badge className={getLevelColor(user.level)}>
                                  {user.level}
                                </Badge>
                                <div className="flex items-center text-yellow-500">
                                  <Star className="h-4 w-4 fill-current" />
                                  <span className="ml-1 text-sm">{user.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <span>{user.university}</span>
                              <span className="mx-2">•</span>
                              <span>{user.branch}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center">
                                  <Target className="h-4 w-4 mr-1 text-blue-600" />
                                  <span>{user.points.toLocaleString()} points</span>
                                </div>
                                <div className="flex items-center">
                                  <Upload className="h-4 w-4 mr-1 text-green-600" />
                                  <span>{user.uploads} uploads</span>
                                </div>
                                <div className="flex items-center">
                                  <Download className="h-4 w-4 mr-1 text-purple-600" />
                                  <span>{user.downloads.toLocaleString()} downloads</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Your Rank */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">#156</div>
                      <p className="text-sm text-gray-600 mb-3">Current Rank</p>
                      <Badge className="bg-green-100 text-green-800">Advanced</Badge>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress to Top 100</span>
                          <span>68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Level System */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Level System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Legendary", points: "15,000+", color: "purple" },
                        { name: "Expert", points: "10,000+", color: "blue" },
                        { name: "Advanced", points: "5,000+", color: "green" },
                        { name: "Intermediate", points: "2,000+", color: "yellow" },
                        { name: "Beginner", points: "0+", color: "gray" }
                      ].map((level, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full bg-${level.color}-500 mr-2`}></div>
                            <span className="text-sm">{level.name}</span>
                          </div>
                          <span className="text-xs text-gray-500">{level.points}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="learners" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Most Active Learners
                </CardTitle>
                <CardDescription>
                  Students with the highest engagement and study activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topDownloaders.map((user) => (
                    <div key={user.rank} className="flex items-center p-4 rounded-lg border bg-white">
                      <div className="w-16 flex justify-center">
                        {getRankIcon(user.rank)}
                      </div>
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="" />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{user.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{user.university}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Download className="h-4 w-4 mr-1 text-blue-600" />
                              <span>{user.downloads} downloads</span>
                            </div>
                            <div className="flex items-center">
                              <Target className="h-4 w-4 mr-1 text-green-600" />
                              <span>{user.studyStreak} day streak</span>
                            </div>
                          </div>
                          <Badge className={getLevelColor(user.level)}>
                            {user.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  This Week's Champions
                </CardTitle>
                <CardDescription>
                  Top performers for the current week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyChampions.map((user) => (
                    <div key={user.rank} className="flex items-center p-4 rounded-lg border bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                      <div className="w-16 flex justify-center">
                        {getRankIcon(user.rank)}
                      </div>
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="" />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{user.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{user.activity}</p>
                        <div className="flex items-center">
                          <Target className="h-4 w-4 mr-1 text-green-600" />
                          <span className="text-sm font-medium">{user.weeklyPoints} weekly points</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;
