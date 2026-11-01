
import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import {
  MethodologyContent,
  HowWeWorkSection,
} from "@/components/methodology/methodology-content"

export const metadata: Metadata = {
  title: "Our Development Methodology | HINAI Tech",
  description:
    "Discover the HINAI Agile–RAD Development Framework: a structured approach combining Agile project management, rapid prototyping, iterative software engineering, quality assurance, and continuous improvement.",
  alternates: {
    canonical: "https://hinaitech.com/methodology",
  },
  openGraph: {
    title: "HINAI Agile–RAD Development Framework",
    description:
      "From business challenges to reliable digital solutions through Agile, RAD, quality engineering, and continuous improvement.",
    url: "https://hinaitech.com/methodology",
    siteName: "HINAI Tech",
    type: "website",
  },
}

export default function MethodologyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main>
          {/* HOW WE WORK — BAGIAN PALING ATAS */}
          <HowWeWorkSection />

          {/* DEVELOPMENT METHODOLOGY — SETELAH HOW WE WORK */}
          <MethodologyContent />
        </main>
      </div>
    </LanguageProvider>
  )
}
