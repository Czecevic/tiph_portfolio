import {
  Share,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Copy,
} from "lucide-react";

export const NavBarSimulation = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gray-100 border-t border-gray-200 px-3 py-2 flex flex-col gap-2">
      <div className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 flex items-center justify-between text-[10px] text-gray-500">
        <span className="text-black">
          A<span className="text-sm">A</span>
        </span>
        <span className="text-gray-700 font-medium">nysos.com</span>
        <RotateCw className="w-3 h-3 text-gray-400" />
      </div>
      <div className="flex justify-between items-center px-2 text-blue-600">
        <ChevronLeft className="w-4 h-4" />
        <ChevronRight className="w-4 h-4 text-gray-300" />
        <Share className="w-3.5 h-3.5" />
        <BookOpen className="w-3.5 h-3.5" />
        <Copy className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};
