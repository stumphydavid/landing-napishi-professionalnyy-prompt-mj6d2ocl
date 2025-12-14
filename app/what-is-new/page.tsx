import { CryptoBackground } from "@/components/crypto-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Zap, Shield } from "lucide-react"

export default function WhatIsNewPage() {
  const updates = [
    {
      version: "v2.1.0",
      date: "15 января 2025",
      icon: Sparkles,
      changes: [
        "Добавлена поддержка Blast и Manta сетей",
        "Улучшенный алгоритм обнаружения аирдропов",
        "Новый UI для отображения найденных токенов",
        "Уведомления о новых аирдропах в реальном времени",
      ],
    },
    {
      version: "v2.0.0",
      date: "1 января 2025",
      icon: Zap,
      changes: [
        "Полностью переработанный интерфейс",
        "Добавлено 5 новых блокчейн-сетей",
        "Ускорение сканирования на 300%",
        "Интеграция с MetaMask Snaps",
      ],
    },
    {
      version: "v1.8.5",
      date: "20 декабря 2024",
      icon: Shield,
      changes: [
        "Улучшенная безопасность подключения кошельков",
        "Поддержка Ledger и Trezor",
        "Исправлены критические баги",
        "Оптимизация производительности",
      ],
    },
  ]

  return (
    <main className="relative min-h-screen">
      <CryptoBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-sm px-4 py-2 mb-6">
              История обновлений
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Что нового в{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Airdrop Radar
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следите за последними улучшениями и новыми возможностями
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => {
              const Icon = update.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h2 className="text-2xl font-bold text-foreground">Версия {update.version}</h2>
                        <span className="text-muted-foreground text-sm">{update.date}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 ml-16">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6"
            >
              Получить Airdrop Radar Cloud
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
