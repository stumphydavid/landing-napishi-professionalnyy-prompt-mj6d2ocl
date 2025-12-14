import Link from "next/link"
import { Twitter, Github, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-background rounded-full border-t-transparent" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Airdrop Radar
              </span>
            </div>
            <p className="text-muted-foreground">Автоматическое обнаружение криптовалютных аирдропов</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Возможности
                </Link>
              </li>
              <li>
                <Link href="/what-is-new" className="text-muted-foreground hover:text-primary transition-colors">
                  Что нового
                </Link>
              </li>
              <li>
                <Link href="/thanks" className="text-muted-foreground hover:text-primary transition-colors">
                  Благодарность
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-foreground">Социальные сети</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Airdrop Radar. Все права защищены.</p>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
