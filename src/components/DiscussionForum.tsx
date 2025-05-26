
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Reply, 
  Search,
  Plus,
  Clock,
  Eye,
  Star,
  TrendingUp,
  Users,
  BookOpen
} from "lucide-react";

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    reputation: number;
  };
  category: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  replies: number;
  views: number;
  timeAgo: string;
  isPinned?: boolean;
  isSolved?: boolean;
}

const DiscussionForum = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const forumPosts: ForumPost[] = [
    {
      id: 1,
      title: "How to approach Dynamic Programming problems effectively?",
      content: "I'm struggling with DP problems in my algorithms course. Can someone share their approach and practice strategy?",
      author: {
        name: "Alex Kumar",
        avatar: "",
        reputation: 245
      },
      category: "Study Help",
      tags: ["Algorithms", "Dynamic Programming", "Problem Solving"],
      upvotes: 23,
      downvotes: 2,
      replies: 15,
      views: 156,
      timeAgo: "2 hours ago",
      isPinned: true
    },
    {
      id: 2,
      title: "Best resources for Computer Networks preparation?",
      content: "Looking for good books, video lectures, and practice problems for Computer Networks. Any recommendations?",
      author: {
        name: "Priya Sharma",
        avatar: "",
        reputation: 189
      },
      category: "Resources",
      tags: ["Computer Networks", "Books", "Video Lectures"],
      upvotes: 18,
      downvotes: 0,
      replies: 12,
      views: 89,
      timeAgo: "5 hours ago",
      isSolved: true
    },
    {
      id: 3,
      title: "Study group for GATE 2025 preparation",
      content: "Starting a study group for GATE 2025. We'll meet every weekend for mock tests and discussion. DM if interested!",
      author: {
        name: "Rahul Verma",
        avatar: "",
        reputation: 156
      },
      category: "Study Groups",
      tags: ["GATE", "Study Group", "Mock Tests"],
      upvotes: 31,
      downvotes: 1,
      replies: 8,
      views: 234,
      timeAgo: "1 day ago"
    }
  ];

  const categories = [
    { id: "all", label: "All Discussions", count: 156 },
    { id: "study-help", label: "Study Help", count: 42 },
    { id: "resources", label: "Resources", count: 38 },
    { id: "study-groups", label: "Study Groups", count: 28 },
    { id: "exam-prep", label: "Exam Prep", count: 33 },
    { id: "general", label: "General", count: 15 }
  ];

  const trendingTopics = [
    { tag: "GATE 2025", posts: 45 },
    { tag: "Data Structures", posts: 38 },
    { tag: "Computer Networks", posts: 29 },
    { tag: "Algorithms", posts: 25 },
    { tag: "Database", posts: 22 }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || 
      post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              Discussion Forum
            </h1>
            <p className="text-gray-600 mt-2">Connect, learn, and grow with the StudyFuel community</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Discussion
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{category.label}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      #{topic.tag}
                    </Badge>
                    <span className="text-xs text-gray-500">{topic.posts}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Community Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Active Members</span>
                </div>
                <span className="font-semibold">2,547</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Total Discussions</span>
                </div>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Solved Questions</span>
                </div>
                <span className="font-semibold">856</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {activeCategory === "all" ? "All Discussions" : 
                 categories.find(c => c.id === activeCategory)?.label}
              </h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Latest</Button>
                <Button variant="ghost" size="sm">Most Upvoted</Button>
                <Button variant="ghost" size="sm">Most Replies</Button>
              </div>
            </div>

            {/* Discussion Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      {/* Author Avatar */}
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>

                      {/* Post Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              {post.isPinned && (
                                <Badge variant="secondary" className="text-xs">Pinned</Badge>
                              )}
                              {post.isSolved && (
                                <Badge className="text-xs bg-green-100 text-green-800">Solved</Badge>
                              )}
                              <Badge variant="outline" className="text-xs">{post.category}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                              {post.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Post Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{post.author.name}</span>
                            <span>•</span>
                            <span>{post.author.reputation} rep</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4 text-green-600" />
                              <span>{post.upvotes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Reply className="h-4 w-4 text-blue-600" />
                              <span>{post.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4 text-gray-400" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center py-6">
              <Button variant="outline">Load More Discussions</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionForum;
