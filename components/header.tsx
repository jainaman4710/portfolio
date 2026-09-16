import Link from "next/link"
import { GithubIcon, LinkedinIcon } from "./icons"

export function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
      style={{ borderBottom: "1px solid #F8BBD9", backgroundColor: "rgba(255,245,247,0.88)", height: "60px" }}
    >
      <div className="flex h-full items-center justify-between px-10">
        <Link
          href="/"
          className="font-serif font-semibold no-underline"
          style={{ fontSize: "1.15rem", color: "#1A237E" }}
        >
          Aman Tater
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {[
            { label: "Projects",  href: "/#projects"  },
            { label: "About",     href: "/#about"     },
            { label: "Education", href: "/#education" },
            { label: "Skills",    href: "/#skills"    },
            { label: "Contact",   href: "/#contact"   },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="no-underline transition-colors"
              style={{ fontSize: "13px", color: "#6b5b6e", letterSpacing: "0.03em" }}
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
            className="transition-colors"
            style={{ color: "#b0a0b4" }}
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/jainaman4710"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors"
            style={{ color: "#b0a0b4" }}
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:amantater026@gmail.com"
            className="font-mono no-underline transition-colors hidden md:inline"
            style={{ fontSize: "12px", color: "#b0a0b4" }}
          >
            amantater026@gmail.com
          </a>
        </div>
      </div>
    </header>
  )
}
