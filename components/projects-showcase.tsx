"use client"

import { useState } from "react"
import type { Project } from "@/lib/projects"

export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-mono uppercase rounded-full transition-colors"
              style={{
                fontSize: "10px",
                letterSpacing: "0.06em",
                padding: "6px 14px",
                border: isActive ? "1px solid #5C6BC0" : "1px solid #F8BBD9",
                background: isActive ? "#5C6BC0" : "#fff",
                color: isActive ? "#fff" : "#6b5b6e",
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <a
            key={p.id}
            href={`/projects/${p.id}`}
            className="relative block rounded-2xl no-underline transition-all"
            style={{ background: "#fff", border: "1px solid #F8BBD9", padding: "2rem" }}
          >
            <span className="absolute top-6 right-6" style={{ color: "#b0a0b4" }}>
              &#x2197;
            </span>
            <span
              className="font-mono uppercase inline-block rounded-full mb-4"
              style={{
                fontSize: "10px",
                color: "#006064",
                background: "#E0F7FA",
                border: "1px solid #80DEEA",
                padding: "3px 10px",
                letterSpacing: "0.06em",
              }}
            >
              {p.category}
            </span>
            <h3 className="font-serif font-normal mb-1 leading-snug" style={{ fontSize: "1.2rem", color: "#1a1a2e" }}>
              {p.title}
            </h3>
            <p className="font-mono mb-3" style={{ fontSize: "11px", color: "#b0a0b4" }}>
              {p.subtitle}
            </p>
            <p className="leading-[1.75] mb-6" style={{ fontSize: "13px", color: "#6b5b6e" }}>
              {p.description}
            </p>
            <div className="flex flex-wrap gap-5">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <span className="font-mono font-medium block" style={{ fontSize: "15px", color: "#006064" }}>
                    {s.value}
                  </span>
                  <span className="uppercase" style={{ fontSize: "10px", color: "#b0a0b4", letterSpacing: "0.05em" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
