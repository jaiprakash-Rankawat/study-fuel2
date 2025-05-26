
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
  FileText, 
  Calendar,
  University,
  BookOpen
} from "lucide-react";

const QuestionPapers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const questionPapers = [
    {
      id: 1,
      title: "Computer Networks End Term Examination 2023",
      subject: "Computer Networks",
      semester: "6th Sem",
      branch: "CSE",
      university: "RTU Bikaner",
      year: 2023,
      examType: "End Term",
      downloads: 3456,
      rating: 4.8,
      uploadDate: "2024-01-22",
      verified: true,
      hasSolutions: true
    },
    {
      id: 2,
      title: "Data Structures & Algorithms Mid Term 2023",
      subject: "DSA",
      semester: "3rd Sem",
      branch: "CSE",
      university: "JNVU Jodhpur", 
      year: 2023,
      examType: "Mid Term",
      downloads: 2134,
      rating: 4.7,
      uploadDate: "2024-01-20",
      verified: true,
      hasSolutions: false
    },
    {
      id: 3,
      title: "Database Management System Final Paper 2022",
      subject: "DBMS",
      semester: "4th Sem",
      branch: "CSE",
      university: "MDS University",
      year: 2022,
      examType: "Final",
      downloads: 1876,
      rating: 4.6,
      uploadDate: "2024-01-18",
      verified: false,
      hasSolutions: true
    },
    {
      id: 4,
      title: "Operating Systems Sessional Test 2023",
      subject: "Operating Systems",
      semester: "5th Sem", 
      branch: "CSE",
      university: "Kota University",
      year: 2023,
      examType: "Sessional",
      downloads: 1245,
      rating: 4.5,
      uploadDate: "2024-01-15",
      verified: true,
      hasSolutions: false
    },
    {
      id: 5,
      title: "Software Engineering End Term 2023",
      subject: "Software Engineering",
      semester: "6th Sem",
      branch: "CSE",
      university: "RTU Bikaner",
      year: 2023,
      examType: "End Term",
      downloads: 2987,
      rating: 4.9,
      uploadDate: "2024-01-25",
      verified: true,
      hasSolutions: true
    }
  ];

  const examStats = [
    { university: "RTU Bikaner", papers: 156, downloads: 45000 },
    { university: "JNVU Jodhpur", papers: 134, downloads: 38000 },
    { university: "MDS University", papers: 98, downloads: 25000 },
    { university: "Kota University", papers: 87, downloads: 22000 }
  ];

  const getExamTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'end term': return 'bg-red-100 text-red-800';
      case 'mid term': return 'bg-yellow-100 text-yellow-800';
      case 'final': return 'bg-purple-100 text-purple-800';
      case 'sessional': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Previous Year Question Papers</h1>
          <p className="text-gray-600">Access verified question papers from top universities across India</p>
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
                  <p className="text-sm font-medium text-gray-600">Total Papers</p>
                  <p className="text-2xl font-bold text-gray-900">2,500+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <University className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Universities</p>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Subjects</p>
                  <p className="text-2xl font-bold text-gray-900">200+</p>
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
                  <p className="text-2xl font-bold text-gray-900">45K+</p>
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
                placeholder="Search by subject, university, year, or exam type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Year: 2023
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Papers</TabsTrigger>
                <TabsTrigger value="end-term">End Term</TabsTrigger>
                <TabsTrigger value="mid-term">Mid Term</TabsTrigger>
                <TabsTrigger value="sessional">Sessional</TabsTrigger>
                <TabsTrigger value="solutions">With Solutions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {questionPapers.map((paper) => (
                    <Card key={paper.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {paper.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <Badge variant="outline">{paper.subject}</Badge>
                              <Badge variant="secondary">{paper.semester}</Badge>
                              <Badge variant="secondary">{paper.branch}</Badge>
                              <Badge className={getExamTypeColor(paper.examType)}>
                                {paper.examType}
                              </Badge>
                              {paper.verified && (
                                <Badge className="bg-green-100 text-green-800">Verified</Badge>
                              )}
                              {paper.hasSolutions && (
                                <Badge className="bg-purple-100 text-purple-800">Solutions Included</Badge>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <University className="h-4 w-4 mr-1" />
                              <span className="mr-4">{paper.university}</span>
                              <Calendar className="h-4 w-4 mr-1" />
                              <span className="mr-4">{paper.year}</span>
                              <span>Uploaded: {paper.uploadDate}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-yellow-500 mb-2">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="ml-1 text-sm font-medium">{paper.rating}</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              {paper.downloads.toLocaleString()} downloads
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <button className="flex items-center hover:text-blue-600">
                              <Eye className="h-4 w-4 mr-1" />
                              Preview
                            </button>
                            {paper.hasSolutions && (
                              <span className="flex items-center text-purple-600">
                                <FileText className="h-4 w-4 mr-1" />
                                Solutions Available
                              </span>
                            )}
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="solutions" className="mt-6">
                <div className="space-y-4">
                  {questionPapers.filter(paper => paper.hasSolutions).map((paper) => (
                    <Card key={paper.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {paper.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{paper.subject}</Badge>
                              <Badge className="bg-purple-100 text-purple-800">Solutions Included</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{paper.university} • {paper.year}</p>
                          </div>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download with Solutions
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
            {/* University Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <University className="h-5 w-5 text-blue-600" />
                  Top Universities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{stat.university}</p>
                        <p className="text-xs text-gray-500">{stat.papers} papers</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {stat.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Subjects */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Computer Networks", count: 89 },
                    { name: "Data Structures", count: 76 },
                    { name: "Database Management", count: 65 },
                    { name: "Operating Systems", count: 58 },
                    { name: "Software Engineering", count: 52 }
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

            {/* Quick Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  Recent Papers (2023-2024)
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  CSE Branch Only
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  With Solutions
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Verified Papers Only
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPapers;
