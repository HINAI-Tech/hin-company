
"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react"

import {
  X,
  Send,
  Minus,
  Sparkles,
  Headset,
  ChevronDown,
} from "lucide-react"

type ChatMessage = {
  id: number
  text: string
  sender: "bot" | "user"
}

const PHONE_NUMBER = "6282144137914"

const SERVICE_GROUPS = [
  {
    title: "Website & Digital Platform",
    services: [
      "Pembuatan Website",
      "Landing Page",
      "Company Profile",
      "Website Toko Online / E-Commerce",
      "Web Application",
      "Dashboard & Sistem Informasi",
      "Maintenance & Optimasi Website",
    ],
  },
  {
    title: "Aplikasi & Software",
    services: [
      "Aplikasi Android",
      "Aplikasi iOS",
      "Aplikasi Desktop Windows",
      "Aplikasi Desktop macOS",
      "Aplikasi Mobile",
      "Custom Software",
      "Aplikasi Sekolah & Pendidikan",
      "Sistem Manajemen Bisnis",
    ],
  },
  {
    title: "Artificial Intelligence & Data",
    services: [
      "AI Chatbot & AI Agent",
      "AI Automation",
      "Machine Learning",
      "Data Science & Data Analytics",
      "Integrasi API & Sistem",
      "Pengembangan Solusi AI",
    ],
  },
  {
    title: "Augmented Reality & Game",
    services: [
      "Aplikasi Augmented Reality (AR)",
      "AR Education",
      "Game Android",
      "Game iOS",
      "Game Desktop",
      "Game 2D & 3D",
      "Interactive Digital Experience",
    ],
  },
  {
    title: "SEO, Branding & Desain",
    services: [
      "Artikel SEO",
      "SEO Website",
      "Digital Branding",
      "Logo & Brand Identity",
      "Desain Grafis",
      "UI/UX Design",
      "Company Profile Design",
      "Social Media Design",
    ],
  },
  {
    title: "Animasi & Multimedia",
    services: [
      "Video Animasi 2D",
      "Video Animasi 3D",
      "Animasi Pembelajaran",
      "Video Pembelajaran",
      "Video Editing",
      "Motion Graphic",
      "Multimedia Interaktif",
    ],
  },
  {
    title: "Produk & Konsultasi",
    services: [
      "HINPOS - Aplikasi Kasir",
      "Digitalisasi UMKM",
      "Solusi Digital Perusahaan",
      "Solusi Digital Pendidikan",
      "Konsultasi Proyek Teknologi",
      "Kerja Sama & Kemitraan",
    ],
  },
]

export function WhatsAppFloat() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [showServices, setShowServices] = useState(true)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Halo! 👋 Selamat datang di HINAI Tech.",
      sender: "bot",
    },
    {
      id: 2,
      text:
        "Kami siap membantu kebutuhan digital bisnis, pendidikan, dan teknologi Anda.",
      sender: "bot",
    },
    {
      id: 3,
      text: "Ada yang bisa kami bantu hari ini?",
      sender: "bot",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll otomatis ke pesan terbaru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

  // Sembunyikan pada halaman reseller
  // Tetap diletakkan setelah hooks agar urutan hooks konsisten.
  if (pathname.startsWith("/reseller")) {
    return null
  }

  // Pilih layanan sebagai template pesan pengunjung
  const handleSelectService = (service: string) => {
    setMessage(
      `Halo HINAI Tech, saya tertarik dengan layanan ${service}. Mohon informasi lebih lanjut mengenai layanan, proses pengerjaan, dan penawarannya. Terima kasih.`
    )
  }

  // Kirim HANYA pesan pengunjung ke WhatsApp
  const handleSendMessage = () => {
    const trimmedMessage = message.trim()

    if (!trimmedMessage) return

    // Tambahkan hanya pesan pengunjung ke tampilan chat
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmedMessage,
        sender: "user",
      },
    ])

    // PENTING:
    // Tidak mengambil messages.
    // Tidak mengambil pesan sambutan bot.
    // Tidak mengambil percakapan bawaan HINAI Tech.
    // Hanya mengambil isi input pengunjung.
    const whatsappMessage = trimmedMessage

    const whatsappUrl =
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`

    // Buka WhatsApp
    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    )

    // Kosongkan input
    setMessage("")
  }

  // Enter untuk mengirim, Shift + Enter untuk baris baru
  const handleKeyDown = (
    e: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* =====================================
          CHATBOT WINDOW
      ====================================== */}

      {isOpen && (
        <div
          className="
            fixed bottom-24 right-5 z-[100]
            flex flex-col
            w-[calc(100vw-40px)]
            max-w-[390px]
            h-[min(650px,calc(100dvh-120px))]
            overflow-hidden
            rounded-2xl
            border border-gray-200
            bg-white
            shadow-2xl
            animate-[chatAppear_0.3s_ease-out]
          "
        >
          {/* HEADER */}
          <div
            className="
              relative flex items-center justify-between
              bg-gradient-to-r
              from-[#075E54] to-[#128C7E]
              px-4 py-4
              text-white
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  border border-white/30
                  bg-white/15
                "
              >
                <Image
                  src="/images/WA_HINAI_Tech.png"
                  alt="HINAI Tech"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              </div>

              <div>
                <h3 className="text-base font-bold">
                  HINAI Tech
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-green-100">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  Siap membantu Anda
                </div>
              </div>

            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition hover:bg-white/20"
                aria-label="Minimize chatbot"
              >
                <Minus size={19} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition hover:bg-white/20"
                aria-label="Tutup chatbot"
              >
                <X size={20} />
              </button>

            </div>
          </div>

          {/* CHAT BODY */}
          <div
            className="
              flex-1 overflow-y-auto
              bg-[#efeae2]
              px-3 py-4
              space-y-3
            "
          >

            {/* WELCOME CARD */}
            <div
              className="
                mx-auto max-w-[90%]
                rounded-xl bg-white/95
                p-3 text-center shadow-sm
              "
            >
              <div className="mb-2 flex justify-center">
                <Sparkles
                  className="text-green-600"
                  size={22}
                />
              </div>

              <p className="text-sm font-bold text-gray-800">
                Selamat datang di HINAI Tech!
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Solusi Digital Inovatif untuk Bisnis,
                Pendidikan, dan Masa Depan Anda.
              </p>
            </div>

            {/* CHAT MESSAGES */}
            {messages.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-xl
                    px-3 py-2
                    text-sm leading-relaxed
                    shadow-sm
                    whitespace-pre-wrap
                    ${
                      item.sender === "user"
                        ? "rounded-tr-none bg-[#d9fdd3] text-gray-800"
                        : "rounded-tl-none bg-white text-gray-800"
                    }
                  `}
                >
                  {item.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />

          </div>

          {/* =====================================
              ALL HINAI TECH SERVICES
          ====================================== */}

          <div className="border-t border-gray-100 bg-white">

            <button
              type="button"
              onClick={() => setShowServices(!showServices)}
              className="
                flex w-full items-center
                justify-between
                px-4 py-3
                text-left
                transition hover:bg-gray-50
              "
            >
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Layanan HINAI Tech
                </p>

                <p className="mt-0.5 text-[10px] text-gray-400">
                  Pilih layanan untuk membuat template pesan
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`
                  text-gray-500 transition-transform
                  ${showServices ? "rotate-180" : ""}
                `}
              />
            </button>

            {showServices && (
              <div
                className="
                  max-h-[175px]
                  overflow-y-auto
                  px-3 pb-3
                  space-y-3
                "
              >
                {SERVICE_GROUPS.map((group) => (
                  <div key={group.title}>

                    <p className="
                      mb-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-gray-400
                    ">
                      {group.title}
                    </p>

                    <div className="flex flex-wrap gap-1.5">

                      {group.services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() =>
                            handleSelectService(service)
                          }
                          className="
                            rounded-full
                            border border-green-200
                            bg-white
                            px-2.5 py-1.5
                            text-[11px]
                            font-medium
                            text-green-700
                            transition
                            hover:bg-green-50
                            hover:border-green-400
                            active:scale-95
                          "
                        >
                          {service}
                        </button>
                      ))}

                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* =====================================
              INPUT MESSAGE
          ====================================== */}

          <div
            className="
              flex items-end gap-2
              border-t border-gray-100
              bg-white
              px-3 py-3
            "
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tulis pesan Anda..."
              rows={1}
              className="
                max-h-24 min-h-11
                flex-1 resize-none
                rounded-xl
                border border-gray-200
                bg-gray-50
                px-3 py-3
                text-sm text-gray-800
                outline-none
                transition
                focus:border-green-500
                focus:bg-white
              "
            />

            <button
              type="button"
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="
                flex h-11 w-11
                shrink-0
                items-center justify-center
                rounded-xl
                bg-[#128C7E]
                text-white
                shadow-md
                transition
                hover:bg-[#075E54]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
              aria-label="Kirim pesan ke WhatsApp"
            >
              <Send size={19} />
            </button>
          </div>

          {/* FOOTER */}
          <div
            className="
              flex items-center justify-center gap-1
              bg-white pb-2
              text-[10px] text-gray-400
            "
          >
            <Headset size={12} />
            <span>
              Terhubung dengan tim HINAI Tech melalui WhatsApp
            </span>
          </div>

        </div>
      )}

      {/* =====================================
          FLOATING WHATSAPP BUTTON
      ====================================== */}

      <div className="fixed bottom-6 right-6 z-[90] isolate">

        {/* PING EFFECT LAMA */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-green-400
            opacity-70
            animate-ping
          "
        />

        {/* LIQUID WATER RIPPLE */}
        <span
          className="
            absolute -inset-2
            rounded-full
            border-2 border-green-400/70
            animate-[waterRipple_3s_ease-out_infinite]
          "
        />

        <span
          className="
            absolute -inset-2
            rounded-full
            border-2 border-cyan-300/60
            animate-[waterRipple_3s_ease-out_infinite_1.5s]
          "
        />

        {/* LIQUID ROTATING ORBIT */}
        <div
          className="
            absolute -inset-3
            rounded-full
            animate-[orbitSpin_4s_linear_infinite]
            pointer-events-none
          "
        >
          <span
            className="
              absolute top-1/2 left-0
              h-3 w-3
              -translate-y-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_12px_4px_rgba(34,211,238,0.7)]
            "
          />

          <span
            className="
              absolute top-1/2 right-0
              h-2 w-2
              -translate-y-1/2
              rounded-full
              bg-green-300
              shadow-[0_0_12px_4px_rgba(74,222,128,0.8)]
            "
          />
        </div>

        {/* ROTATING GLOW */}
        <span
          className="
            absolute -inset-1
            rounded-full
            bg-gradient-to-r
            from-green-400
            via-cyan-300
            to-green-500
            opacity-60
            blur-md
            animate-[orbitSpin_5s_linear_infinite]
          "
        />

        {/* MAIN BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative
            flex items-center justify-center
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
          aria-label={
            isOpen
              ? "Tutup chatbot HINAI Tech"
              : "Buka chatbot HINAI Tech"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-full
                bg-[#075E54]
                text-white
              "
            >
              <X size={28} />
            </div>
          ) : (
            <Image
              src="/images/WA_HINAI_Tech.png"
              alt="WhatsApp HINAI Tech"
              width={64}
              height={64}
              priority
              className="
                relative z-10
                h-14 w-14
                object-contain
                drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]
              "
            />
          )}
        </button>

      </div>

      {/* =====================================
          GLOBAL ANIMATIONS
      ====================================== */}

      <style jsx global>{`
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

        @keyframes orbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes chatAppear {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-\\[float_3s_ease-in-out_infinite\\],
          .animate-\\[waterRipple_3s_ease-out_infinite\\],
          .animate-\\[waterRipple_3s_ease-out_infinite_1\\.5s\\],
          .animate-\\[orbitSpin_4s_linear_infinite\\],
          .animate-\\[orbitSpin_5s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}
