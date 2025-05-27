import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Menu, 
  X, 
  Home, 
  BarChart3, 
  Brain, 
  MessageSquare, 
  FileText, 
  ClipboardCheck, 
  FolderOpen, 
  User, 
  Trophy,
  GraduationCap,
  Info,
  ChevronDown,
  Bell
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
  ];

  const studyToolsItems = [
    { path: "/flashcards", label: "Flashcards", icon: Brain },
    { path: "/mock-tests", label: "Mock Tests", icon: ClipboardCheck },
    { path: "/notes", label: "Notes", icon: FileText },
    { path: "/question-papers", label: "Question Papers", icon: FolderOpen },
  ];

  const communityItems = [
    { path: "/discussion", label: "Discussion", icon: MessageSquare },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  const otherItems = [
    { path: "/colleges", label: "Colleges", icon: GraduationCap },
    { path: "/about", label: "About Us", icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isDropdownActive = (items: any[]) => {
    return items.some(item => isActive(item.path));
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              StudyFuel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Primary Navigation */}
            {primaryNavItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      isActive(item.path) 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}

            {/* Study Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isDropdownActive(studyToolsItems) ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center space-x-2 transition-all duration-200 ${
                    isDropdownActive(studyToolsItems)
                      ? "bg-blue-600 text-white shadow-md" 
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <Brain className="h-4 w-4" />
                  <span>Study Tools</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                {studyToolsItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path}
                      className={`flex items-center space-x-2 w-full px-3 py-2 hover:bg-blue-50 transition-colors ${
                        isActive(item.path) ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Community Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isDropdownActive(communityItems) ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center space-x-2 transition-all duration-200 ${
                    isDropdownActive(communityItems)
                      ? "bg-blue-600 text-white shadow-md" 
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Community</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                {communityItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path}
                      className={`flex items-center space-x-2 w-full px-3 py-2 hover:bg-blue-50 transition-colors ${
                        isActive(item.path) ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Items */}
            {otherItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 transition-all duration-200 ${
                      isActive(item.path) 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}

            <DropdownMenuSeparator />

            {/* Search and Profile */}
            <div className="flex items-center space-x-2 ml-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Link to="/profile">
                <Button
                  variant={isActive("/profile") ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center space-x-2 transition-all duration-200 ${
                    isActive("/profile") 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-blue-100"
            >
              <div className="space-y-2">
                {/* All navigation items for mobile */}
                {[...primaryNavItems, ...studyToolsItems, ...communityItems, ...otherItems, { path: "/profile", label: "Profile", icon: User }].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        size="sm"
                        className={`w-full justify-start space-x-2 ${
                          isActive(item.path) 
                            ? "bg-blue-600 text-white" 
                            : "hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
