"use client"

import { useState } from "react"
import Link from "next/link"
import type { Project } from "@/lib/projects"

const DEFAULT_VISIBLE_COUNT = 6

export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const [active, setActive] = useState("All")
  const [expanded, setExpanded] = useState(false)

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)
  const visible = expanded ? filtered : filtered.slice(0, DEFAULT_VISIBLE_COUNT)
  const hasMore = filtered.length > DEFAULT_VISIBLE_COUNT

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              onClick={() => {
                setActive(cat)
                setExpanded(false)
              }}
              className={`font-mono uppercase rounded-full transition-colors border ${
                isActive ? "border-primary bg-primary text-white" : "border-border bg-card text-fore2"
              }`}
              style={{ fontSize: "10px", letterSpacing: "0.06em", padding: "6px 14px" }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((p) => (
          <Link
            key={p.id}
            href={`/projects/${p.id}`}
            className="relative block rounded-2xl no-underline transition-all bg-card border border-border"
            style={{ padding: "2rem" }}
          >
            <span className="absolute top-6 right-6 text-fore3">
              &#x2197;
            </span>
            <span
              className="font-mono uppercase inline-block rounded-full mb-4 text-teal-dark bg-teal-soft border border-teal-mid"
              style={{ fontSize: "10px", padding: "3px 10px", letterSpacing: "0.06em" }}
            >
              {p.category}
            </span>
            <h3 className="font-serif font-normal mb-1 leading-snug text-foreground" style={{ fontSize: "1.2rem" }}>
              {p.title}
            </h3>
            <p className="font-mono mb-3 text-fore3" style={{ fontSize: "11px" }}>
              {p.subtitle}
            </p>
            <p className="leading-[1.75] mb-6 text-fore2" style={{ fontSize: "13px" }}>
              {p.description}
            </p>
            <div className="flex flex-wrap gap-5">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <span className="font-mono font-medium block text-teal-dark" style={{ fontSize: "15px" }}>
                    {s.value}
                  </span>
                  <span className="uppercase text-fore3" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="font-mono uppercase rounded-full transition-colors border border-border bg-card text-fore2"
            style={{ fontSize: "10px", letterSpacing: "0.06em", padding: "8px 20px" }}
          >
            {expanded ? "Show Less" : `Show All ${filtered.length} Projects`}
          </button>
        </div>
      )}
    </div>
  )
}
