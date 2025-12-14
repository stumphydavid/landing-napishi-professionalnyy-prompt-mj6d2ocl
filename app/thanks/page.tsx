import { CryptoBackground } from "@/components/crypto-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Twitter, MessageCircle, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThanksPage() {
  const nextSteps = [
    "1. Установите расширение Airdrop Radar в Chrome",
    "2. Подключите ваш Web3 кошелёк",
    "3. Запустите первое сканирование",
    "4. Заберите найденные аирдропы",
  ]

  return (
    <main className="relative min-h-screen">
      <CryptoBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary animate-in zoom-in duration-500">
              <CheckCircle2 className="w-14 h-14 text-primary-foreground" />
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Спасибо!
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-xl mx-auto text-balance">
                Вы успешно подписались на Airdrop Radar Cloud
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-left space-y-6 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <h2 className="text-2xl font-bold text-foreground text-center">Дальнейшие шаги</h2>

              <ul className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{step.replace(`${index + 1}. `, "")}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
                >
                  Установить расширение
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 rounded-2xl p-8 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
              <h3 className="text-xl font-bold mb-4 text-foreground">Поделитесь с друзьями</h3>
              <p className="text-muted-foreground mb-6">Помогите своим друзьям найти невостребованные аирдропы</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Поделиться
                </Button>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  ← Вернуться на главную
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
