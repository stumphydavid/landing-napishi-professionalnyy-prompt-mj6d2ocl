"use client"

export function CryptoBackground() {
  const cryptoLogos = [
    "Arbitrum",
    "zkSync",
    "Scroll",
    "EigenLayer",
    "LayerZero",
    "Optimism",
    "StarkNet",
    "Celestia",
    "Bitcoin",
    "Ethereum",
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.08]">
        {cryptoLogos.map((logo, index) => (
          <div
            key={index}
            className="absolute text-6xl font-bold text-primary animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${index * 0.5}s`,
              filter: "blur(2px)",
            }}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
