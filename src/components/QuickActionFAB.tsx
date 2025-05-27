
import { useState } from "react";
import { Plus, Upload, Brain, MessageSquare, ClipboardCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface QuickActionFABProps {
  onUpload: () => void;
  onLogin: () => void;
}

const QuickActionFAB = ({ onUpload, onLogin }: QuickActionFABProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      icon: Upload,
      label: "Upload Notes",
      action: onUpload,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Brain,
      label: "Create Flashcards",
      action: () => {},
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: ClipboardCheck,
      label: "Take Test",
      action: () => {},
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: MessageSquare,
      label: "Join Discussion",
      action: () => {},
      color: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, y: 10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="bg-white px-3 py-2 rounded-lg shadow-lg border">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {action.label}
                  </span>
                </div>
                <Button
                  size="sm"
                  className={`w-12 h-12 rounded-full shadow-lg ${action.color} text-white`}
                  onClick={action.action}
                >
                  <action.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isExpanded 
              ? "bg-red-600 hover:bg-red-700" 
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default QuickActionFAB;
