
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Download, 
  Star, 
  Eye, 
  Filter, 
  BookOpen, 
  Upload, 
  Users,
  Calendar,
  ThumbsUp
} from "lucide-react";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const notes = [
    {
      id: 1,
      title: "Complete Computer Networks Notes - Handwritten",
      subject: "Computer Networks",
      semester: "6th Sem",
      branch: "CSE",
      author: "Priya Sharma",
      downloads: 2345,
      rating: 4.9,
      uploadDate: "2024-01-20",
      pages: 156,
      size: "12.4 MB",
      verified: true,
      preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms - Comprehensive Notes",
      subject: "DSA",
      semester: "3rd Sem",
      branch: "CSE",
      author: "Rahul Kumar",
      downloads: 1876,
      rating: 4.8,
      uploadDate: "2024-01-18",
      pages: 289,
      size: "18.7 MB",
      verified: true,
      preview: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Database Management System - Quick Revision Notes",
      subject: "DBMS",
      semester: "4th Sem",
      branch: "CSE",
      author: "Anjali Singh",
      downloads: 1234,
      rating: 4.7,
      uploadDate: "2024-01-15",
      pages: 78,
      size: "5.2 MB",
      verified: false,
      preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Operating Systems - Complete Theory & Practical",
      subject: "Operating Systems",
      semester: "5th Sem",
      branch: "CSE",
      author: "Vikash Gupta",
      downloads: 1567,
      rating: 4.6,
      uploadDate: "2024-01-12",
      pages: 234,
      size: "15.8 MB",
      verified: true,
      preview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop"
    }
  ];

  const topContributors = [
    { name: "Priya Sharma", notes: 45, downloads: 12500, avatar: "PS" },
    { name: "Rahul Kumar", notes: 38, downloads: 9800, avatar: "RK" },
    { name: "Anjali Singh", notes: 32, downloads: 8200, avatar: "AS" },
    { name: "Vikash Gupta", notes: 28, downloads: 7500, avatar: "VG" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes Collection</h1>
          <p className="text-gray-600">Access high-quality handwritten and digital notes from top students</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search notes by subject, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Notes
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Notes</TabsTrigger>
                <TabsTrigger value="handwritten">Handwritten</TabsTrigger>
                <TabsTrigger value="digital">Digital</TabsTrigger>
                <TabsTrigger value="verified">Verified</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6">
                  {notes.map((note) => (
                    <Card key={note.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          {/* Preview Image */}
                          <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={note.preview} 
                              alt={note.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {note.title}
                                </h3>
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge variant="outline">{note.subject}</Badge>
                                  <Badge variant="secondary">{note.semester}</Badge>
                                  <Badge variant="secondary">{note.branch}</Badge>
                                  {note.verified && (
                                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center text-yellow-500 mb-1">
                                  <Star className="h-4 w-4 fill-current" />
                                  <span className="ml-1 text-sm font-medium">{note.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600 mb-3">
                              <span>By {note.author}</span>
                              <span className="mx-2">•</span>
                              <span>{note.pages} pages</span>
                              <span className="mx-2">•</span>
                              <span>{note.size}</span>
                              <span className="mx-2">•</span>
                              <span>{note.uploadDate}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Download className="h-4 w-4 mr-1" />
                                  {note.downloads} downloads
                                </div>
                                <div className="flex items-center">
                                  <Eye className="h-4 w-4 mr-1" />
                                  Preview
                                </div>
                                <div className="flex items-center">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  Like
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Preview
                                </Button>
                                <Button size="sm">
                                  <Download className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="handwritten" className="mt-6">
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Handwritten Notes</h3>
                  <p className="text-gray-600">High-quality handwritten notes from top students</p>
                </div>
              </TabsContent>
              
              <TabsContent value="digital" className="mt-6">
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Digital Notes</h3>
                  <p className="text-gray-600">Professionally formatted digital study materials</p>
                </div>
              </TabsContent>
              
              <TabsContent value="verified" className="mt-6">
                <div className="grid gap-6">
                  {notes.filter(note => note.verified).map((note) => (
                    <Card key={note.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={note.preview} 
                              alt={note.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {note.title}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline">{note.subject}</Badge>
                              <Badge className="bg-green-100 text-green-800">Verified</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">By {note.author}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="ml-1 text-sm">{note.rating}</span>
                              </div>
                              <Button size="sm">Download</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xs font-medium text-blue-600">
                            {contributor.avatar}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{contributor.name}</p>
                          <p className="text-xs text-gray-500">{contributor.notes} notes</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {contributor.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Computer Networks", count: 45 },
                    { name: "Data Structures", count: 38 },
                    { name: "Database Management", count: 32 },
                    { name: "Operating Systems", count: 28 },
                    { name: "Algorithms", count: 25 }
                  ].map((subject, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{subject.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {subject.count}
                      </Badge>
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
              <CardContent className="space-y-2">
                <Button className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your Notes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Request Notes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Study Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
