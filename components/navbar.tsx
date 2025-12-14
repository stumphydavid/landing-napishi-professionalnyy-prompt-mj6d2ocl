"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <div className="w-6 h-6 border-2 border-background rounded-full border-t-transparent animate-spin" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Airdrop Radar
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link href="#features" className="text-foreground hover:text-primary transition-colors">
              Возможности
            </Link>
            <Link href="/what-is-new" className="text-foreground hover:text-primary transition-colors">
              Что нового
            </Link>
          </div>

          <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            Получить Airdrop Radar Cloud
          </Button>
        </div>
      </div>
    </nav>
  )
}
