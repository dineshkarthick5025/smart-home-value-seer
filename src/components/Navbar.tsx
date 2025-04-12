
import React from 'react';
import { Home, LogIn, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-estate-blue" />
          <h1 className="text-xl font-bold text-estate-darkBlue">SmartHome ValueSeer</h1>
        </div>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-estate-blue font-medium">Home</a>
          <a href="#features" className="text-gray-600 hover:text-estate-blue font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-estate-blue font-medium">How It Works</a>
          <Button className="bg-estate-blue hover:bg-estate-darkBlue">
            <LogIn className="mr-2 h-4 w-4" />
            Start Predicting
          </Button>
        </div>
        
        {/* Mobile hamburger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-10">
                <a href="#" className="text-gray-600 hover:text-estate-blue font-medium py-2">Home</a>
                <a href="#features" className="text-gray-600 hover:text-estate-blue font-medium py-2">Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-estate-blue font-medium py-2">How It Works</a>
                <Button className="bg-estate-blue hover:bg-estate-darkBlue w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  Start Predicting
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
