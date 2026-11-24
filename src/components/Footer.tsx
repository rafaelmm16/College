import { FolderGit2, GraduationCap } from "lucide-react";
import { AUTHOR } from "@/data/disciplines";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div className="flex items-center gap-2.5 text-sm text-slate-600">
          <GraduationCap className="h-4 w-4 text-indigo-600" />
          <span>
            <strong className="font-semibold text-slate-900">
              {AUTHOR.name}
            </strong>{" "}
            • {AUTHOR.role}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>Construído com Next.js & Tailwind CSS</span>
          <span>•</span>
          <a
            href={AUTHOR.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-indigo-600"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            Código fonte
          </a>
        </div>
      </div>
    </footer>
  );
}
