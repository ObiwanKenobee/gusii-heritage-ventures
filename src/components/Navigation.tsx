
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Abagusii Heritage Archive</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#clans" className="hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Clans Directory
              </a>
              <a href="#simulator" className="hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Business Simulator
              </a>
              <a href="#timeline" className="hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Timeline
              </a>
              <a href="#archive" className="hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Oral Archive
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-50 hover:bg-amber-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-amber-800">
              <a href="#home" className="block hover:bg-amber-800 px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#clans" className="block hover:bg-amber-800 px-3 py-2 rounded-md text-base font-medium">
                Clans Directory
              </a>
              <a href="#simulator" className="block hover:bg-amber-800 px-3 py-2 rounded-md text-base font-medium">
                Business Simulator
              </a>
              <a href="#timeline" className="block hover:bg-amber-800 px-3 py-2 rounded-md text-base font-medium">
                Timeline
              </a>
              <a href="#archive" className="block hover:bg-amber-800 px-3 py-2 rounded-md text-base font-medium">
                Oral Archive
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
