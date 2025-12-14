import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse-glow" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-2 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Не упустите предстоящие аирдропы</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Начните находить свои{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                аирдропы сегодня
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам пользователей, которые уже нашли невостребованные токены
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6 mt-4"
            >
              Получить Airdrop Radar Cloud
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
