
"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export function WhatsAppFloat() {
  const pathname = usePathname()

  // Jangan tampilkan pada halaman reseller
  if (pathname.startsWith("/reseller")) {
    return null
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "6282144137914"

    const message =
      "Halo! Saya tertarik dengan layanan HINAI Tech. Perkenalkan nama saya ... ingin berkonsultasi tentang ..."

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Ring Effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-70 animate-ping"></span>

      <button
        onClick={handleWhatsAppClick}
        className="
          relative
          flex items-center justify-center
          rounded-full
          p-2
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          animate-[float_3s_ease-in-out_infinite]
        "
        aria-label="Chat via WhatsApp"
      >
        <Image
          src="/images/WA_HINAI_Tech.png"
          alt="WhatsApp HINAI Tech"
          width={64}
          height={64}
          priority
          className="h-14 w-14 object-contain"
        />
      </button>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  )
}
