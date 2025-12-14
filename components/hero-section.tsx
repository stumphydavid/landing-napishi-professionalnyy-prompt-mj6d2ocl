import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const topAirdrops = [
    { name: "EIGEN", value: "$1,200", network: "Ethereum" },
    { name: "ARB", value: "$3,500", network: "Arbitrum" },
    { name: "ZK", value: "$1,800", network: "zkSync" },
    { name: "SCR", value: "$950", network: "Scroll" },
  ]

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-sm px-4 py-2">
            🎯 Найдено более 15,000+ невостребованных аирдропов
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            Автоматически{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              находите аирдропы
            </span>
            <br />в вашем кошельке
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Сканируйте свой кошелёк в 18+ сетях. Забирайте EIGEN, ARB, ZK, SCR и другие. Отслеживайте предстоящие дропы.
            Находите перспективные протоколы без токенов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg px-8 py-6"
            >
              Получить Airdrop Radar Cloud
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            {topAirdrops.map((airdrop, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="text-sm text-muted-foreground mb-1">{airdrop.network}</div>
                <div className="text-2xl font-bold text-primary">{airdrop.name}</div>
                <div className="text-lg text-foreground mt-1">{airdrop.value}</div>
              </div>
            ))}
          </div>

          <div className="relative mt-16 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/20">
            <div className="bg-gradient-to-br from-card to-muted p-8 md:p-12">
              <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                    <div className="w-12 h-12 border-4 border-background rounded-full border-t-transparent animate-spin" />
                  </div>
                  <p className="text-muted-foreground">Расширение Chrome в действии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
