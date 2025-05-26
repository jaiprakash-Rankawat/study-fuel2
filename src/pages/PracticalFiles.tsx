
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Code, 
  FileText, 
  Cpu,
  Database,
  Globe
} from "lucide-react";

const PracticalFiles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const practicalFiles = [
    {
      id: 1,
      title: "Complete Database Lab Practical File - DBMS",
      subject: "Database Management System",
      semester: "4th Sem",
      branch: "CSE",
      type: "Lab File",
      author: "Arjun Patel",
      downloads: 2156,
      rating: 4.8,
      uploadDate: "2024-01-20",
      programs: 15,
      pages: 45,
      verified: true,
      technologies: ["MySQL", "SQL", "Oracle"]
    },
    {
      id: 2,
      title: "Data Structures Lab Programs - Complete Set",
      subject: "Data Structures & Algorithms",
      semester: "3rd Sem",
      branch: "CSE",
      type: "Programming",
      author: "Priya Sharma",
      downloads: 1876,
      rating: 4.9,
      uploadDate: "2024-01-18",
      programs: 25,
      pages: 78,
      verified: true,
      technologies: ["C++", "C", "Python"]
    },
    {
      id: 3,
      title: "Computer Networks Lab Manual with Programs",
      subject: "Computer Networks",
      semester: "6th Sem",
      branch: "CSE",
      type: "Lab Manual",
      author: "Rahul Kumar",
      downloads: 1234,
      rating: 4.6,
      uploadDate: "2024-01-15",
      programs: 12,
      pages: 35,
      verified: false,
      technologies: ["Cisco Packet Tracer", "Wireshark", "Socket Programming"]
    },
    {
      id: 4,
      title: "Operating Systems Practical Assignments",
      subject: "Operating Systems",
      semester: "5th Sem",
      branch: "CSE",
      type: "Assignments",
      author: "Anjali Singh",
      downloads: 1567,
      rating: 4.7,
      uploadDate: "2024-01-12",
      programs: 18,
      pages: 52,
      verified: true,
      technologies: ["Linux", "Shell Scripts", "System Calls"]
    },
    {
      id: 5,
      title: "Web Development Lab - Complete Project Files",
      subject: "Web Technology",
      semester: "5th Sem",
      branch: "CSE",
      type: "Project",
      author: "Vikash Gupta",
      downloads: 987,
      rating: 4.5,
      uploadDate: "2024-01-10",
      programs: 8,
      pages: 30,
      verified: true,
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    }
  ];

  const labStats = [
    { name: "Database Labs", files: 45, downloads: 15000 },
    { name: "Programming Labs", files: 38, downloads: 12000 },
    { name: "Network Labs", files: 29, downloads: 8500 },
    { name: "Web Development", files: 25, downloads: 7200 }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'lab file': return 'bg-blue-100 text-blue-800';
      case 'programming': return 'bg-green-100 text-green-800';
      case 'lab manual': return 'bg-purple-100 text-purple-800';
      case 'assignments': return 'bg-yellow-100 text-yellow-800';
      case 'project': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubjectIcon = (subject: string) => {
    if (subject.includes('Database')) return Database;
    if (subject.includes('Network')) return Globe;
    if (subject.includes('Data Structures') || subject.includes('Programming')) return Code;
    return Cpu;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practical Files & Lab Manuals</h1>
          <p className="text-gray-600">Access complete practical files, lab manuals, and programming assignments</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Lab Files</p>
                  <p className="text-2xl font-bold text-gray-900">350+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Programs</p>
                  <p className="text-2xl font-bold text-gray-900">1,200+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Lab Subjects</p>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">8.5K+</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by subject, type, programming language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Type
              </Button>
              <Button variant="outline">
                <Code className="h-4 w-4 mr-2" />
                Language
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Files</TabsTrigger>
                <TabsTrigger value="lab-files">Lab Files</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="manuals">Manuals</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {practicalFiles.map((file) => {
                    const SubjectIcon = getSubjectIcon(file.subject);
                    return (
                      <Card key={file.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <SubjectIcon className="h-8 w-8 text-gray-600" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {file.title}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <Badge variant="outline">{file.subject}</Badge>
                                    <Badge variant="secondary">{file.semester}</Badge>
                                    <Badge className={getTypeColor(file.type)}>
                                      {file.type}
                                    </Badge>
                                    {file.verified && (
                                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-600 mb-2">
                                    <span>By {file.author}</span>
                                    <span className="mx-2">•</span>
                                    <span>{file.programs} programs</span>
                                    <span className="mx-2">•</span>
                                    <span>{file.pages} pages</span>
                                    <span className="mx-2">•</span>
                                    <span>{file.uploadDate}</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {file.technologies.map((tech, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center text-yellow-500 mb-2">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="ml-1 text-sm font-medium">{file.rating}</span>
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {file.downloads.toLocaleString()} downloads
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <button className="flex items-center hover:text-blue-600">
                                    <Eye className="h-4 w-4 mr-1" />
                                    Preview
                                  </button>
                                  <button className="flex items-center hover:text-blue-600">
                                    <Code className="h-4 w-4 mr-1" />
                                    View Code
                                  </button>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4 mr-1" />
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
                    );
                  })}
                </div>
              </TabsContent>
              
              <TabsContent value="programming" className="mt-6">
                <div className="space-y-4">
                  {practicalFiles.filter(file => file.type === "Programming").map((file) => (
                    <Card key={file.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {file.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{file.subject}</Badge>
                              <Badge className="bg-green-100 text-green-800">Programming</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{file.programs} programs included</p>
                          </div>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
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
            {/* Popular Lab Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  Popular Labs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {labStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{stat.name}</p>
                        <p className="text-xs text-gray-500">{stat.files} files</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {stat.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "C++", count: 85 },
                    { name: "Java", count: 67 },
                    { name: "Python", count: 54 },
                    { name: "C", count: 48 },
                    { name: "JavaScript", count: 32 }
                  ].map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{lang.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {lang.count}
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
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Lab File
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="h-4 w-4 mr-2" />
                  Browse by Language
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Cpu className="h-4 w-4 mr-2" />
                  Lab Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalFiles;
