"use client"

import { useState } from "react"
import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "./icons"

const NAV_LINKS = [
  { label: "Projects",  href: "/#projects"  },
  { label: "About",     href: "/#about"     },
  { label: "Education", href: "/#education" },
  { label: "Skills",    href: "/#skills"    },
  { label: "Contact",   href: "/#contact"   },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md border-b border-border bg-background/88"
    >
      <div className="flex h-[60px] items-center justify-between px-4 sm:px-10">
        <Link
          href="/"
          className="font-serif font-semibold no-underline text-indigo-dark"
          style={{ fontSize: "1.15rem" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Aman Tater
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="no-underline transition-colors text-fore2"
              style={{ fontSize: "13px", letterSpacing: "0.03em" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/aman-tater"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors text-fore3"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/jainaman4710"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors text-fore3"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:amantater026@gmail.com"
            className="font-mono no-underline transition-colors hidden md:inline text-fore3"
            style={{ fontSize: "12px" }}
          >
            amantater026@gmail.com
          </a>

          {/* Mobile menu toggle — only shown below the `sm` breakpoint */}
          <button
            type="button"
            className="flex items-center justify-center sm:hidden text-indigo"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col sm:hidden border-t border-border bg-background"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-fore2 border-b border-border"
              style={{ fontSize: "14px", padding: "14px 20px" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
