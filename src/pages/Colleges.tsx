
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  MapPin, 
  Users, 
  GraduationCap, 
  Search, 
  Filter,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  Building,
  Award,
  BookOpen
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Colleges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const colleges = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, MA",
      type: "Private",
      rating: 4.9,
      students: "22,000+",
      image: "/placeholder.svg",
      description: "One of the world's most prestigious universities with a rich history dating back to 1636.",
      courses: ["Computer Science", "Business", "Medicine", "Law", "Engineering"],
      fees: "$54,000/year",
      website: "harvard.edu",
      phone: "+1 (617) 495-1000",
      email: "admissions@harvard.edu",
      established: 1636,
      ranking: "#1 in USA"
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      type: "Private",
      rating: 4.8,
      students: "17,000+",
      image: "/placeholder.svg",
      description: "A leading research university known for innovation and entrepreneurship in Silicon Valley.",
      courses: ["Computer Science", "Engineering", "Business", "Medicine", "AI/ML"],
      fees: "$56,000/year",
      website: "stanford.edu",
      phone: "+1 (650) 723-2300",
      email: "admission@stanford.edu",
      established: 1885,
      ranking: "#2 in USA"
    },
    {
      id: 3,
      name: "MIT",
      location: "Cambridge, MA",
      type: "Private",
      rating: 4.8,
      students: "11,000+",
      image: "/placeholder.svg",
      description: "World-renowned for science, technology, and engineering excellence.",
      courses: ["Computer Science", "Engineering", "Physics", "Mathematics", "Robotics"],
      fees: "$53,000/year",
      website: "mit.edu",
      phone: "+1 (617) 253-1000",
      email: "admissions@mit.edu",
      established: 1861,
      ranking: "#3 in USA"
    },
    {
      id: 4,
      name: "University of Oxford",
      location: "Oxford, UK",
      type: "Public",
      rating: 4.7,
      students: "24,000+",
      image: "/placeholder.svg",
      description: "The oldest university in the English-speaking world with over 900 years of history.",
      courses: ["Philosophy", "Literature", "Medicine", "Law", "Sciences"],
      fees: "£9,250/year",
      website: "ox.ac.uk",
      phone: "+44 1865 270000",
      email: "admissions@ox.ac.uk",
      established: 1096,
      ranking: "#1 in UK"
    },
    {
      id: 5,
      name: "University of Cambridge",
      location: "Cambridge, UK",
      type: "Public",
      rating: 4.7,
      students: "19,000+",
      image: "/placeholder.svg",
      description: "A collegiate research university known for academic excellence and notable alumni.",
      courses: ["Mathematics", "Natural Sciences", "Engineering", "Medicine", "Computer Science"],
      fees: "£9,250/year",
      website: "cam.ac.uk",
      phone: "+44 1223 337733",
      email: "admissions@cam.ac.uk",
      established: 1209,
      ranking: "#2 in UK"
    },
    {
      id: 6,
      name: "IIT Delhi",
      location: "New Delhi, India",
      type: "Public",
      rating: 4.6,
      students: "8,000+",
      image: "/placeholder.svg",
      description: "Premier engineering institute in India, known for technical excellence.",
      courses: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Civil"],
      fees: "₹2,50,000/year",
      website: "iitd.ac.in",
      phone: "+91 11 2659 1333",
      email: "admissions@iitd.ac.in",
      established: 1961,
      ranking: "#1 in India"
    }
  ];

  const filters = [
    { id: "all", label: "All Colleges" },
    { id: "private", label: "Private" },
    { id: "public", label: "Public" },
    { id: "usa", label: "USA" },
    { id: "uk", label: "UK" },
    { id: "india", label: "India" }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" ||
                         (selectedFilter === "private" && college.type === "Private") ||
                         (selectedFilter === "public" && college.type === "Public") ||
                         (selectedFilter === "usa" && college.location.includes("USA") || college.location.includes("MA") || college.location.includes("CA")) ||
                         (selectedFilter === "uk" && college.location.includes("UK")) ||
                         (selectedFilter === "india" && college.location.includes("India"));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Top Colleges</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's best universities and colleges. Find detailed information about programs, fees, and admission requirements.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search colleges by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                    className="transition-all duration-200"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Colleges Grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-black">
                        {college.ranking}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                        <CardDescription className="flex items-center text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {college.location}
                        </CardDescription>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{college.rating}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{college.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">Type: {college.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-600">{college.students} students</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="text-gray-600">Est. {college.established}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-indigo-600 mr-2" />
                        <span className="text-gray-600">{college.fees}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Popular Courses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {college.courses.slice(0, 3).map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                        {college.courses.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{college.courses.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Globe className="h-4 w-4 mr-1" />
                        Visit Website
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredColleges.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No colleges found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Colleges;
