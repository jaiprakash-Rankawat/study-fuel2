
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface SearchFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const SearchFilters = ({ activeFilter, onFilterChange }: SearchFiltersProps) => {
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [selectedSemesters, setSelectedSemesters] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState([4]);

  const branches = [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Chemical Engineering"
  ];

  const semesters = [
    "1st Semester",
    "2nd Semester", 
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
    "8th Semester"
  ];

  const resourceTypes = [
    { id: "question-papers", label: "Question Papers" },
    { id: "notes", label: "Handwritten Notes" },
    { id: "practical-files", label: "Practical Files" },
    { id: "competitive", label: "Competitive Exams" },
    { id: "assignments", label: "Assignments" },
    { id: "lab-manuals", label: "Lab Manuals" }
  ];

  const handleBranchChange = (branch: string, checked: boolean) => {
    if (checked) {
      setSelectedBranches([...selectedBranches, branch]);
    } else {
      setSelectedBranches(selectedBranches.filter(b => b !== branch));
    }
  };

  const handleSemesterChange = (semester: string, checked: boolean) => {
    if (checked) {
      setSelectedSemesters([...selectedSemesters, semester]);
    } else {
      setSelectedSemesters(selectedSemesters.filter(s => s !== semester));
    }
  };

  const resetFilters = () => {
    setSelectedBranches([]);
    setSelectedSemesters([]);
    setRatingRange([4]);
    onFilterChange("all");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Resource Type */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Resource Type</Label>
            <div className="space-y-2">
              {resourceTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={type.id} 
                    checked={activeFilter === type.id}
                    onCheckedChange={() => onFilterChange(type.id)}
                  />
                  <Label 
                    htmlFor={type.id} 
                    className="text-sm font-normal cursor-pointer"
                  >
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Branch */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Branch</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch} value={branch}>
                    {branch}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Semester */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Semester</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* University */}
          <div>
            <Label className="text-sm font-medium mb-3 block">University</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select University" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rtubikaner">RTU Bikaner</SelectItem>
                <SelectItem value="jnvu">JNVU Jodhpur</SelectItem>
                <SelectItem value="mds">MDS University Ajmer</SelectItem>
                <SelectItem value="kota">Kota University</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rating Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">
              Minimum Rating: {ratingRange[0]}.0+
            </Label>
            <Slider
              value={ratingRange}
              onValueChange={setRatingRange}
              max={5}
              min={1}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Verification Status */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Verification</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="verified" />
                <Label htmlFor="verified" className="text-sm font-normal cursor-pointer">
                  Verified Only
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="recent" />
                <Label htmlFor="recent" className="text-sm font-normal cursor-pointer">
                  Recent Uploads (Last 30 days)
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchFilters;
