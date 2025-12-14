"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({ networks: 0, airdrops: 0, value: 0 })

  useEffect(() => {
    const targets = { networks: 18, airdrops: 250, value: 45 }
    const duration = 2000
    const steps = 60
    const increment = {
      networks: targets.networks / steps,
      airdrops: targets.airdrops / steps,
      value: targets.value / steps,
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        networks: Math.min(Math.floor(increment.networks * step), targets.networks),
        airdrops: Math.min(Math.floor(increment.airdrops * step), targets.airdrops),
        value: Math.min(Math.floor(increment.value * step), targets.value),
      })
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { label: "Поддерживаемых сетей", value: `${counts.networks}+`, suffix: "" },
    { label: "Обнаруженных аирдропов", value: `${counts.airdrops}+`, suffix: "" },
    { label: "Найденной стоимости", value: `$${counts.value}M+`, suffix: "" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-muted border border-border rounded-2xl p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
