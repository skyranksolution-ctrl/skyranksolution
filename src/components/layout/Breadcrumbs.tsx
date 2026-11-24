import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "@/lib/schema/jsonld";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: "Home", url: "/" },
    ...items.map((i) => ({ name: i.label, url: i.href })),
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-50 border-b border-slate-200/80 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.href}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {isLast ? (
                  <span className="font-semibold text-slate-900 truncate max-w-[240px] sm:max-w-md" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors truncate max-w-[150px]">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
