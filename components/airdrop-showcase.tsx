import { Badge } from "@/components/ui/badge"

export function AirdropShowcase() {
  const airdrops = [
    { name: "Arbitrum", symbol: "ARB", value: "$3,500", status: "Доступен", network: "Arbitrum" },
    { name: "Optimism", symbol: "OP", value: "$2,200", status: "Доступен", network: "Optimism" },
    { name: "zkSync", symbol: "ZK", value: "$1,800", status: "Доступен", network: "zkSync" },
    { name: "Scroll", symbol: "SCR", value: "$950", status: "Доступен", network: "Scroll" },
    { name: "EigenLayer", symbol: "EIGEN", value: "$1,200", status: "Доступен", network: "Ethereum" },
    { name: "Celestia", symbol: "TIA", value: "$2,800", status: "Доступен", network: "Celestia" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные аирдропы</h2>
          <p className="text-xl text-muted-foreground">Реальные примеры найденных токенов</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{airdrop.name}</h3>
                  <p className="text-sm text-muted-foreground">{airdrop.symbol}</p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">{airdrop.status}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Сеть:</span>
                  <span className="text-foreground font-medium">{airdrop.network}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Стоимость:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {airdrop.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
