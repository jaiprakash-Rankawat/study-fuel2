import { useState } from "react";
import { Search, BookOpen, Users, Award, Download, Star, Upload, Filter, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import ResourceCard from "@/components/ResourceCard";
import SearchFilters from "@/components/SearchFilters";
import UploadModal from "@/components/UploadModal";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample data for demonstration
  const recentResources = [
    {
      id: 1,
      title: "Computer Networks Previous Year Papers 2023",
      type: "Question Papers",
      subject: "Computer Networks",
      semester: "6th Sem",
      branch: "CSE",
      downloads: 1247,
      rating: 4.8,
      uploadDate: "2024-01-15",
      verified: true
    },
    {
      id: 2,
      title: "Data Structures Handwritten Notes - Complete",
      type: "Notes",
      subject: "Data Structures",
      semester: "3rd Sem",
      branch: "CSE",
      downloads: 892,
      rating: 4.9,
      uploadDate: "2024-01-10",
      verified: true
    },
    {
      id: 3,
      title: "Database Lab Practical File 2023",
      type: "Practical Files",
      subject: "Database Management",
      semester: "4th Sem",
      branch: "CSE",
      downloads: 563,
      rating: 4.6,
      uploadDate: "2024-01-08",
      verified: false
    }
  ];

  const stats = [
    { label: "Total Resources", value: "5,000+", icon: BookOpen },
    { label: "Active Students", value: "25,000+", icon: Users },
    { label: "Universities Covered", value: "150+", icon: Award },
    { label: "Downloads This Month", value: "1M+", icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                StudyFuel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/question-papers" className="text-gray-700 hover:text-blue-600 transition-colors">Question Papers</Link>
              <Link to="/notes" className="text-gray-700 hover:text-blue-600 transition-colors">Notes</Link>
              <Link to="/flashcards" className="text-gray-700 hover:text-blue-600 transition-colors">Flashcards</Link>
              <Link to="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</Link>
              <Link to="/discussion" className="text-gray-700 hover:text-blue-600 transition-colors">Discussion</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" onClick={() => setIsUploadModalOpen(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button onClick={() => setIsLoginModalOpen(true)}>
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100">
              <div className="flex flex-col space-y-4">
                <Link to="/question-papers" className="text-gray-700 hover:text-blue-600 transition-colors">Question Papers</Link>
                <Link to="/notes" className="text-gray-700 hover:text-blue-600 transition-colors">Notes</Link>
                <Link to="/flashcards" className="text-gray-700 hover:text-blue-600 transition-colors">Flashcards</Link>
                <Link to="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</Link>
                <Link to="/discussion" className="text-gray-700 hover:text-blue-600 transition-colors">Discussion</Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" onClick={() => setIsUploadModalOpen(true)}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                  <Button onClick={() => setIsLoginModalOpen(true)}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fuel Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Academic Success </span>
            Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master your exams with interactive flashcards, mock tests, collaborative study groups, and verified study materials. 
            Join thousands of students accelerating their learning with StudyFuel.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for question papers, notes, flashcards, mock tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/dashboard">
              <Button size="lg" className="rounded-xl">
                Go to Dashboard
              </Button>
            </Link>
            <Link to="/flashcards">
              <Button variant="outline" size="lg" className="rounded-xl">
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Search Filters Sidebar */}
          <div className="lg:w-1/4">
            <SearchFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Resources Content */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Study Resources</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort by
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="papers">Question Papers</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="tests">Mock Tests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6">
                  {recentResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="papers" className="mt-6">
                <div className="grid gap-6">
                  {recentResources
                    .filter(r => r.type === "Question Papers")
                    .map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="notes" className="mt-6">
                <div className="grid gap-6">
                  {recentResources
                    .filter(r => r.type === "Notes")
                    .map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="flashcards" className="mt-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">Interactive Flashcards</h3>
                  <p className="text-gray-600 mb-6">Create and study with digital flashcards featuring spaced repetition.</p>
                  <Link to="/flashcards">
                    <Button>Start Studying Flashcards</Button>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="tests" className="mt-6">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">Mock Tests & Quizzes</h3>
                  <p className="text-gray-600 mb-6">Practice with full-length mock exams and instant feedback.</p>
                  <Link to="/mock-tests">
                    <Button>Start Practice Test</Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Students Choose StudyFuel</h2>
            <p className="text-lg text-gray-600">Comprehensive learning tools designed for exam success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital flashcards with spaced repetition, mock tests with instant feedback, and progress tracking to optimize your study time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Community Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join study groups, participate in discussion forums, and learn collaboratively with peer reviews and shared insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Personalized Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customizable dashboards, progress analytics, and personalized recommendations to enhance your learning journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">StudyFuel</span>
              </div>
              <p className="text-gray-400">
                Fueling academic success with interactive learning tools and collaborative study resources.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Study Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/question-papers" className="hover:text-white transition-colors">Question Papers</Link></li>
                <li><Link to="/notes" className="hover:text-white transition-colors">Notes</Link></li>
                <li><Link to="/flashcards" className="hover:text-white transition-colors">Flashcards</Link></li>
                <li><Link to="/mock-tests" className="hover:text-white transition-colors">Mock Tests</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/discussion" className="hover:text-white transition-colors">Discussion Forums</Link></li>
                <li><Link to="/leaderboard" className="hover:text-white transition-colors">Study Groups</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Upload Content</a></li>
                <li><Link to="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudyFuel. All rights reserved. Fueling success, one student at a time.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
