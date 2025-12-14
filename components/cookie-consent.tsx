"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg text-foreground">Использование cookie</h3>
          <button onClick={handleDecline} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          Мы используем cookie для улучшения вашего опыта. Продолжая использовать сайт, вы соглашаетесь с нашей
          политикой конфиденциальности.
        </p>

        <div className="flex gap-3">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 transition-all duration-300"
          >
            Принять
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1 border-border hover:border-primary/50 transition-colors bg-transparent"
          >
            Отклонить
          </Button>
        </div>
      </div>
    </div>
  )
}
