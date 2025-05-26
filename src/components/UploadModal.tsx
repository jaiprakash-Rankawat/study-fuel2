
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    resourceType: "",
    subject: "",
    semester: "",
    branch: "",
    university: "",
    file: null as File | null
  });

  const { toast } = useToast();

  const resourceTypes = [
    "Question Papers",
    "Handwritten Notes", 
    "Practical Files",
    "Assignments",
    "Lab Manuals",
    "Competitive Exam Papers"
  ];

  const branches = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering"
  ];

  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadData({ ...uploadData, file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!uploadData.title || !uploadData.resourceType || !uploadData.file) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a file.",
        variant: "destructive"
      });
      return;
    }

    // Simulate upload process
    toast({
      title: "Upload Successful!",
      description: "Your resource has been uploaded and is pending verification. You'll earn points once it's approved!",
    });

    // Reset form and close modal
    setUploadData({
      title: "",
      description: "",
      resourceType: "",
      subject: "",
      semester: "",
      branch: "",
      university: "",
      file: null
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Study Resource
          </DialogTitle>
          <DialogDescription>
            Share your notes, question papers, or practical files to help fellow students. 
            Earn points and recognition for quality contributions!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Resource Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Computer Networks Previous Year Papers 2023"
                value={uploadData.title}
                onChange={(e) => setUploadData({ ...uploadData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of the resource, any special notes..."
                value={uploadData.description}
                onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
              />
            </div>
          </div>

          {/* Resource Classification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Resource Type *</Label>
              <Select 
                value={uploadData.resourceType} 
                onValueChange={(value) => setUploadData({ ...uploadData, resourceType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {resourceTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Subject</Label>
              <Input
                placeholder="e.g., Data Structures, Computer Networks"
                value={uploadData.subject}
                onChange={(e) => setUploadData({ ...uploadData, subject: e.target.value })}
              />
            </div>

            <div>
              <Label>Branch</Label>
              <Select 
                value={uploadData.branch} 
                onValueChange={(value) => setUploadData({ ...uploadData, branch: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Semester</Label>
              <Select 
                value={uploadData.semester} 
                onValueChange={(value) => setUploadData({ ...uploadData, semester: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((sem) => (
                    <SelectItem key={sem} value={sem}>{sem} Semester</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>University</Label>
            <Input
              placeholder="e.g., RTU Bikaner, JNVU Jodhpur"
              value={uploadData.university}
              onChange={(e) => setUploadData({ ...uploadData, university: e.target.value })}
            />
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="file">Upload File *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <Input
                id="file"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <Label htmlFor="file" className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-800">Choose file</span> or drag and drop
              </Label>
              <p className="text-sm text-gray-500 mt-1">
                PDF, DOC, DOCX, JPG, PNG (Max 10MB)
              </p>
              {uploadData.file && (
                <p className="text-sm text-green-600 mt-2">
                  Selected: {uploadData.file.name}
                </p>
              )}
            </div>
          </div>

          {/* Contributor Benefits */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-900">Contributor Benefits</span>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Earn 10-50 points based on resource quality</li>
              <li>• Get featured on contributor leaderboard</li>
              <li>• Build your reputation in the community</li>
              <li>• Help thousands of students succeed</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Upload Resource
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
