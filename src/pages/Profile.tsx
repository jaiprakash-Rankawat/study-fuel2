
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Star, 
  Download, 
  Upload, 
  Trophy, 
  Calendar,
  BookOpen,
  Target,
  Edit3,
  Settings,
  Activity
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = {
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    university: "RTU Bikaner",
    branch: "Computer Science Engineering",
    semester: "6th Semester",
    joinDate: "September 2023",
    avatar: "AP"
  };

  const activityStats = [
    { label: "Resources Downloaded", value: 145, icon: Download },
    { label: "Resources Uploaded", value: 23, icon: Upload },
    { label: "Community Points", value: 2450, icon: Star },
    { label: "Study Streak", value: 15, icon: Target }
  ];

  const uploadedResources = [
    {
      id: 1,
      title: "Database Lab Practical File - Complete",
      type: "Practical File",
      downloads: 2156,
      rating: 4.8,
      uploadDate: "2024-01-20",
      verified: true
    },
    {
      id: 2,
      title: "Computer Networks Handwritten Notes",
      type: "Notes",
      downloads: 1876,
      rating: 4.9,
      uploadDate: "2024-01-15",
      verified: true
    },
    {
      id: 3,
      title: "GATE 2024 Mock Test Series",
      type: "Mock Test",
      downloads: 987,
      rating: 4.6,
      uploadDate: "2024-01-10",
      verified: false
    }
  ];

  const recentActivity = [
    {
      type: "download",
      resource: "Operating Systems Notes",
      time: "2 hours ago"
    },
    {
      type: "upload",
      resource: "Web Development Lab File",
      time: "1 day ago"
    },
    {
      type: "achievement",
      resource: "Reached 100 downloads milestone",
      time: "3 days ago"
    },
    {
      type: "flashcard",
      resource: "Completed Data Structures flashcard set",
      time: "5 days ago"
    }
  ];

  const achievements = [
    { name: "First Upload", description: "Uploaded your first resource", unlocked: true },
    { name: "Popular Creator", description: "100+ downloads on a single resource", unlocked: true },
    { name: "Knowledge Sharer", description: "Uploaded 10+ resources", unlocked: true },
    { name: "Community Favorite", description: "Resource rated 4.5+ stars", unlocked: true },
    { name: "Study Champion", description: "15-day study streak", unlocked: true },
    { name: "Expert Contributor", description: "50+ uploads", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit3 className="h-4 w-4 mr-2" />
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Basic Info Card */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">{userStats.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle>{userStats.name}</CardTitle>
                <CardDescription>{userStats.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {isEditing ? (
                  <>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={userStats.name} />
                    </div>
                    <div>
                      <Label htmlFor="university">University</Label>
                      <Input id="university" defaultValue={userStats.university} />
                    </div>
                    <div>
                      <Label htmlFor="branch">Branch</Label>
                      <Input id="branch" defaultValue={userStats.branch} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">{userStats.university}</p>
                      <p className="text-sm text-gray-600">{userStats.branch}</p>
                      <p className="text-sm text-gray-600">{userStats.semester}</p>
                      <Badge variant="outline" className="mt-2">
                        Member since {userStats.joinDate}
                      </Badge>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activity Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityStats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <stat.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{stat.label}</p>
                        <p className="text-lg font-bold text-blue-600">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contributor Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <Badge className="bg-purple-100 text-purple-800">Level 5 - Expert</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level 6</span>
                    <span>2,450 / 3,000 XP</span>
                  </div>
                  <Progress value={82} className="w-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  550 XP needed for next level
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="uploads">My Uploads</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="mt-6">
                <div className="space-y-6">
                  {/* Study Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-blue-600" />
                        Study Progress This Week
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">8</p>
                          <p className="text-sm text-gray-600">Study Hours</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">12</p>
                          <p className="text-sm text-gray-600">Resources Downloaded</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <p className="text-2xl font-bold text-purple-600">3</p>
                          <p className="text-sm text-gray-600">Mock Tests Taken</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activity.type === 'download' ? 'bg-blue-100' :
                              activity.type === 'upload' ? 'bg-green-100' :
                              activity.type === 'achievement' ? 'bg-yellow-100' :
                              'bg-purple-100'
                            }`}>
                              {activity.type === 'download' && <Download className="h-4 w-4 text-blue-600" />}
                              {activity.type === 'upload' && <Upload className="h-4 w-4 text-green-600" />}
                              {activity.type === 'achievement' && <Trophy className="h-4 w-4 text-yellow-600" />}
                              {activity.type === 'flashcard' && <BookOpen className="h-4 w-4 text-purple-600" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{activity.resource}</p>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="uploads" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Uploaded Resources</CardTitle>
                    <CardDescription>Resources you've shared with the community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {uploadedResources.map((resource) => (
                        <div key={resource.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline">{resource.type}</Badge>
                                {resource.verified && (
                                  <Badge className="bg-green-100 text-green-800">Verified</Badge>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="ml-1 text-sm">{resource.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Uploaded on {resource.uploadDate}</span>
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      Achievements
                    </CardTitle>
                    <CardDescription>Your milestones and accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index} 
                          className={`border rounded-lg p-4 ${
                            achievement.unlocked ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'
                            }`}>
                              <Trophy className={`h-5 w-5 ${
                                achievement.unlocked ? 'text-yellow-600' : 'text-gray-400'
                              }`} />
                            </div>
                            <div>
                              <h3 className={`font-semibold ${
                                achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                              }`}>
                                {achievement.name}
                              </h3>
                              <p className={`text-sm ${
                                achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                              }`}>
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-gray-600" />
                        Account Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue={userStats.email} />
                      </div>
                      <div>
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password" type="password" placeholder="Enter new password" />
                      </div>
                      <Button>Update Account</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-gray-600">Make your profile visible to other users</p>
                        </div>
                        <Button variant="outline" size="sm">Public</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Activity Status</p>
                          <p className="text-sm text-gray-600">Show when you're online</p>
                        </div>
                        <Button variant="outline" size="sm">Enabled</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
