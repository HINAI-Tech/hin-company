
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
    <div className="fixed bottom-6 right-6 z-50 isolate">

      {/* Efek Ping Lama */}
      <span className="
        absolute inset-0
        rounded-full
        bg-green-400
        opacity-70
        animate-ping
      " />

      {/* Liquid Water Ripple */}
      <span className="absolute -inset-2 rounded-full border-2 border-green-400/70 animate-[waterRipple_3s_ease-out_infinite]" />

      <span className="absolute -inset-2 rounded-full border-2 border-cyan-300/60 animate-[waterRipple_3s_ease-out_infinite_1.5s]" />

      {/* Liquid Rotating Orbit */}
      <div className="
        absolute
        -inset-3
        rounded-full
        animate-[orbitSpin_4s_linear_infinite]
        pointer-events-none
      ">
        <span className="
          absolute
          top-1/2
          left-0
          h-3
          w-3
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_4px_rgba(34,211,238,0.7)]
        " />

        <span className="
          absolute
          top-1/2
          right-0
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          bg-green-300
          shadow-[0_0_12px_4px_rgba(74,222,128,0.8)]
        " />
      </div>

      {/* Rotating Glow */}
      <span className="
        absolute
        -inset-1
        rounded-full
        bg-gradient-to-r
        from-green-400
        via-cyan-300
        to-green-500
        opacity-60
        blur-md
        animate-[orbitSpin_5s_linear_infinite]
      " />

      {/* Tombol WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="
          relative
          flex
          items-center
          justify-center
          rounded-full
          p-2
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
          animate-[float_3s_ease-in-out_infinite]
          cursor-pointer
        "
        aria-label="Chat via WhatsApp"
      >
        <Image
          src="/images/WA_HINAI_Tech.png"
          alt="WhatsApp HINAI Tech"
          width={64}
          height={64}
          priority
          className="
            relative
            z-10
            h-14
            w-14
            object-contain
            drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]
          "
        />
      </button>

      <style jsx>{`
        /* Floating Effect Lama */
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        /* Water Ripple */
        @keyframes waterRipple {
          0% {
            transform: scale(0.85);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        /* Liquid Orbit */
        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

    </div>
  )
}
