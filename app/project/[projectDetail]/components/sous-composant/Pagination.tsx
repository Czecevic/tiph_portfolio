import { ArrowRight } from "lucide-react";

export const Pagination = () => (
  <div className="flex items-center justify-center gap-3">
    <button className="border px-1">1</button>
    <button>2</button>
    <button>3</button>
    <button>
      <ArrowRight />
    </button>
  </div>
);
