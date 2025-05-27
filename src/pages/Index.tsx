import { useState } from "react";
import { Search, BookOpen, Users, Award, Download, Star, Upload, Filter, Plus, TrendingUp, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ResourceCard from "@/components/ResourceCard";
import SearchFilters from "@/components/SearchFilters";
import UploadModal from "@/components/UploadModal";
import LoginModal from "@/components/LoginModal";
import Navigation from "@/components/Navigation";
import QuickActionFAB from "@/components/QuickActionFAB";
import SmartSearchBar from "@/components/SmartSearchBar";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
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
    { label: "Total Resources", value: "5,000+", icon: BookOpen, color: "blue" },
    { label: "Active Students", value: "25,000+", icon: Users, color: "green" },
    { label: "Universities Covered", value: "150+", icon: Award, color: "purple" },
    { label: "Downloads This Month", value: "1M+", icon: Download, color: "orange" }
  ];

  const trendingTopics = [
    "Computer Networks", "Data Structures", "Operating Systems", "Database Management", "Software Engineering"
  ];

  const quickActions = [
    { label: "Create Flashcards", icon: Plus, action: () => {}, color: "blue" },
    { label: "Take Mock Test", icon: Clock, action: () => {}, color: "green" },
    { label: "Upload Notes", icon: Upload, action: () => setIsUploadModalOpen(true), color: "purple" },
    { label: "Join Discussion", icon: Users, action: () => {}, color: "orange" }
  ];

  const featuredContent = [
    {
      title: "GATE 2025 Preparation Kit",
      description: "Complete study materials for GATE exam",
      type: "Collection",
      downloads: 2500,
      badge: "Popular"
    },
    {
      title: "CSE 6th Sem Complete Notes",
      description: "All subjects covered with practical examples",
      type: "Notes Bundle",
      downloads: 1800,
      badge: "Trending"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section with Enhanced Search */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fuel Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Academic Success </span>
              Journey
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Master your exams with interactive flashcards, mock tests, collaborative study groups, and verified study materials.
            </p>
            
            {/* Enhanced Search Bar */}
            <SmartSearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              trendingTopics={trendingTopics}
            />

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
            >
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-16 flex flex-col items-center gap-1 hover:shadow-md transition-all"
                    onClick={action.action}
                  >
                    <action.icon className="h-5 w-5" />
                    <span className="text-xs">{action.label}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              Featured Content
            </h2>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Popular This Week
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2" variant={content.badge === "Popular" ? "default" : "secondary"}>
                          {content.badge}
                        </Badge>
                        <CardTitle className="text-lg">{content.title}</CardTitle>
                        <CardDescription>{content.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {content.downloads.toLocaleString()} downloads
                        </span>
                        <Badge variant="outline">{content.type}</Badge>
                      </div>
                      <Button size="sm">Explore</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Search Filters Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="lg:w-1/4"
          >
            <SearchFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </motion.div>

          {/* Resources Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="lg:w-3/4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Study Resources</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort by Relevance
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="papers">Question Papers</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                <TabsTrigger value="tests">Mock Tests</TabsTrigger>
              </TabsList>
              
              <AnimatePresence mode="wait">
                <TabsContent value="all" className="mt-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6"
                  >
                    {recentResources.map((resource, index) => (
                      <motion.div
                        key={resource.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <ResourceCard resource={resource} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
              
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
          </motion.div>
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
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/colleges" className="hover:text-white transition-colors">Colleges</Link></li>
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

      {/* Floating Action Button */}
      <QuickActionFAB 
        onUpload={() => setIsUploadModalOpen(true)}
        onLogin={() => setIsLoginModalOpen(true)}
      />

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
