import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-950 text-white px-4 py-20 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-6 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          404 Error • Page Not Found
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Page Does Not Exist
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The requested URL may have moved, been renamed, or is temporarily unavailable. Let&apos;s get you back to high-ranking territory.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 border border-slate-700 hover:bg-slate-900 transition-colors text-sm"
          >
            <Search className="w-4 h-4" />
            <span>Browse SEO Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
