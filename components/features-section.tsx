import { Scan, Bell, Search, MousePointerClick } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Scan,
      title: "Мультисетевое сканирование",
      description: "Автоматическая проверка 18+ блокчейн-сетей на невостребованные аирдропы",
    },
    {
      icon: Bell,
      title: "Отслеживание аирдропов в реальном времени",
      description: "Будьте в курсе предстоящих распределений токенов и дедлайнов",
    },
    {
      icon: Search,
      title: "Поиск протоколов без токенов",
      description: "Находите перспективные протоколы до запуска их токенов",
    },
    {
      icon: MousePointerClick,
      title: "Клейм в один клик",
      description: "Лёгкий доступ к страницам клейма для токенов EIGEN, ARB, ZK, SCR и других",
    },
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мощные возможности для{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              охотников за аирдропами
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно для обнаружения и получения криптовалютных аирдропов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                style={{
                  transform: index % 2 === 0 ? "translateY(20px)" : "translateY(-20px)",
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
