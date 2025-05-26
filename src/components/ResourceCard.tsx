
import { Download, Star, Eye, Calendar, Shield, Bookmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    type: string;
    subject: string;
    semester: string;
    branch: string;
    downloads: number;
    rating: number;
    uploadDate: string;
    verified: boolean;
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const formatDownloads = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Question Papers":
        return "bg-blue-100 text-blue-800";
      case "Notes":
        return "bg-green-100 text-green-800";
      case "Practical Files":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getTypeColor(resource.type)}>
                {resource.type}
              </Badge>
              {resource.verified && (
                <div className="flex items-center gap-1 text-green-600">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs font-medium">Verified</span>
                </div>
              )}
            </div>
            <CardTitle className="text-lg mb-1 hover:text-blue-600 cursor-pointer transition-colors">
              {resource.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm">
              <span>{resource.subject}</span>
              <span>•</span>
              <span>{resource.semester}</span>
              <span>•</span>
              <span>{resource.branch}</span>
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{formatDownloads(resource.downloads)} downloads</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{resource.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
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
  );
};

export default ResourceCard;
