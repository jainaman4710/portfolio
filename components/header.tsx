import { Mail } from "lucide-react"
import Link from "next/link"
import { GearIcon } from "./icons"

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-pink/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-semibold">
          <GearIcon className="h-5 w-5 text-pink" />
          <span>Aman Tater</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-pink"
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="text-sm text-muted-foreground transition-colors hover:text-pink"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-pink"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="mailto:amantater026@gmail.com"
            className="flex items-center gap-2 rounded-full border border-pink/30 bg-pink/10 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-pink/20"
            title="amantater026@gmail.com"
          >
            <Mail className="h-4 w-4 text-pink" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </header>
  )
}
