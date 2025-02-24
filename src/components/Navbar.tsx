
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#222222]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between font-['Poppins']">
        <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider">Taxonomist</div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
          <Button className="bg-[#89964e] hover:bg-[#89964e]/90 text-white">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
