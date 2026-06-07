"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/projects"
import { GearIcon } from "./icons"

export function ProjectViewer({ project }: { project: Project }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-pink/20 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-pink"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Projects</span>
            </Link>
            <div className="hidden h-6 w-px bg-pink/20 sm:block" />
            <div className="flex items-center gap-2">
              <GearIcon className="h-4 w-4 text-pink" />
              <h1 className="text-sm font-medium text-foreground line-clamp-1">
                {project.title}
              </h1>
            </div>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-pink/30 bg-pink/10 px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-pink/20"
          >
            <ExternalLink className="h-3 w-3 text-pink" />
            <span className="hidden sm:inline">Open in New Tab</span>
          </a>
        </div>
      </header>

      {/* Iframe Container */}
      <div className="flex-1">
        <iframe
          src={project.href}
          className="h-full w-full border-0"
          style={{ minHeight: "calc(100vh - 56px)" }}
          title={project.title}
        />
      </div>
    </div>
  )
}
