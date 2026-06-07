"use client"

import Link from "next/link"
import { ArrowUpRight, BarChart3, Brain, Building2, Headset } from "lucide-react"
import type { Project } from "@/lib/projects"

const categoryConfig = {
  "Statistical Analysis": { icon: BarChart3, color: "bg-teal/10 border-teal/40 text-teal" },
  "Market Research": { icon: Headset, color: "bg-purple/10 border-purple/40 text-purple" },
  "Business Analytics": { icon: Building2, color: "bg-amber/10 border-amber/40 text-amber" },
  "Machine Learning": { icon: Brain, color: "bg-pink/10 border-pink/40 text-pink" },
}

export function ProjectCard({ project }: { project: Project }) {
  const config = categoryConfig[project.category as keyof typeof categoryConfig] || { icon: BarChart3, color: "bg-pink/10 border-pink/40 text-pink" }
  const Icon = config.icon

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-pink/20 bg-card transition-all duration-300 hover:border-pink/50 hover:shadow-lg hover:shadow-pink/10"
    >
      {/* Top accent gradient */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink via-purple to-teal" />

      <div className="p-6">
        {/* Category badge with icon */}
        <div className="mb-4 flex items-center justify-between">
          <span className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${config.color}`}>
            <Icon className="h-3 w-3" />
            {project.category}
          </span>
          <ArrowUpRight className="h-5 w-5 text-pink opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>

        {/* Title */}
        <h3 className="mb-1 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-pink">
          {project.title}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground">{project.subtitle}</p>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => {
            const tagColors = ["bg-pink/10 text-pink", "bg-teal/10 text-teal", "bg-purple/10 text-purple", "bg-amber/10 text-amber"]
            return (
              <span
                key={tag}
                className={`rounded-md px-2 py-1 font-mono text-xs ${tagColors[index % tagColors.length]}`}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>

      {/* Stats footer */}
      <div className="mt-auto flex gap-4 border-t border-pink/10 bg-secondary/50 px-6 py-4">
        {project.stats.map((stat, index) => {
          const statColors = ["text-pink", "text-teal", "text-purple"]
          return (
            <div key={stat.label} className="flex-1">
              <p className={`font-mono text-lg font-semibold ${statColors[index % statColors.length]}`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </Link>
  )
}
