import { Wallet, ScanLine, Gift } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Wallet,
      title: "Подключите кошелёк",
      description: "Установите расширение и подключите ваш Web3 кошелёк",
    },
    {
      icon: ScanLine,
      title: "Автоматическое сканирование",
      description: "Radar сканирует 18+ сетей на наличие невостребованных аирдропов",
    },
    {
      icon: Gift,
      title: "Заберите токены",
      description: "Получите ссылки для клейма и заберите свои аирдропы в один клик",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
          <p className="text-xl text-muted-foreground">Три простых шага до ваших аирдропов</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
