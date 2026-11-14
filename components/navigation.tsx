
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  DollarSign,
  Wrench,
  ExternalLink,
} from "lucide-react"

import { FaMoneyCheck, FaTools } from "react-icons/fa"

import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"

type NavigationIcon = LucideIcon | IconType

type SubMenuItem = {
  href: string
  label: string
  icon?: NavigationIcon
}

type NavItem = {
  href: string
  label: string
  icon?: NavigationIcon
  submenu?: SubMenuItem[]
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  const { language, setLanguage, t } = useLanguage()

  const navRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  // =========================================
  // NAVIGATION SCROLL CONTROL
  // =========================================

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", controlNavbar, { passive: true })

    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [])

  // =========================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdown(null)
        setMobileDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // =========================================
  // NAVIGATION ITEMS
  // =========================================

  const navItems: NavItem[] = [
    {
      href: "/",
      label: t("nav.home"),
      icon: Home,
    },
    {
      href: "/about",
      label: t("nav.about"),
      icon: User,
    },
    {
      href: "/why-choose-us",
      label: t("nav.whyChooseUs"),
      icon: Wrench,
    },
    {
      href: "https://pos.hinaitech.com",
      label: t("nav.products"),
      icon: FaMoneyCheck,
    },
    {
      href: "/blog",
      label: "Blogs",
    },
    {
      href: "/services",
      label: t("nav.services"),
      icon: FaTools,
      submenu: [
        {
          href: "/services/web",
          label: t("services.web"),
        },
        {
          href: "/services/landing-page",
          label: t("services.landingpage"),
        },
        {
          href: "/services/ar-development",
          label: t("Jasa Pembuatan Aplikasi AR"),
        },
        {
          href: "/services/applications",
          label: t("Jasa Pembuatan Aplikasi Mobile"),
        },
        {
          href: "/services/seo-articles",
          label: t("services.seo"),
        },
        {
          href: "/services/ai-ml",
          label: t("Jasa ML & Data Science"),
        },
        {
          href: "/services/design",
          label: t("services.design"),
        },
      ],
    },
    {
      href: "/resources",
      label: "Resources",
      icon: BookOpen,
      submenu: [
        {
          href: "/methodology",
          label: t("nav.methodology"),
          icon: BookOpen,
        },
        {
          href: "/portfolio",
          label: "Portfolio",
          icon: ExternalLink,
        },
        {
          href: "/career",
          label: t("nav.career"),
          icon: Briefcase,
        },
        {
          href: "/free-tools",
          label: "Free Tools",
          icon: Wrench,
        },
        {
          href: "/reseller-partner",
          label: t("nav.resellerPartner"),
          icon: DollarSign,
        },
      ],
    },
    {
      href: "/contact",
      label: t("nav.contact"),
      icon: Mail,
    },
  ]

  // =========================================
  // DROPDOWN HANDLERS
  // =========================================

  const handleDesktopDropdown = (label: string) => {
    setDesktopDropdown((prev) => (prev === label ? null : label))
  }

  const handleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label))
  }

  const renderIcon = (Icon: NavigationIcon | undefined) => {
    if (!Icon) return null

    return <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
  }

  // =========================================
  // LANGUAGE HANDLER
  // =========================================

  const handleLanguageChange = (selectedLanguage: "id" | "en") => {
    setLanguage(selectedLanguage)
  }

  // =========================================
  // LANGUAGE SELECTOR
  // =========================================

  const LanguageSelector = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={() => handleLanguageChange("id")}
        >
          Bahasa Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  // =========================================
  // GET STARTED BUTTON
  // =========================================

  const GetStartedButton = () => (
    <Button
      asChild
      className="bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <Link
        href={t("common.getStarted.link")}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("common.getStarted")}
      </Link>
    </Button>
  )

  // =========================================
  // DESKTOP NAVIGATION
  // =========================================

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className={`fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-20">
        <div className="flex h-20 w-full items-center justify-between lg:h-24">

          {/* LOGO */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="HINAI Tech Home"
          >
            <Image
              src="/HINAI_Tech_Logo.png"
              alt="HINAI Tech Logo"
              width={260}
              height={100}
              className="h-16 w-auto object-contain drop-shadow-md lg:h-20 xl:h-24"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={`${item.label}-${item.href}`}
                  className="relative"
                >
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          handleDesktopDropdown(item.label)
                        }
                        aria-expanded={desktopDropdown === item.label}
                        className="flex cursor-pointer items-center gap-2 font-medium text-foreground transition-colors duration-200 hover:text-primary"
                      >
                        {Icon && (
                          <Icon className="h-4 w-4 shrink-0" />
                        )}

                        <span>{item.label}</span>

                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            desktopDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {desktopDropdown === item.label && (
                        <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                          {item.submenu.map((subItem) => {
                            const SubIcon = subItem.icon

                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center gap-2 px-4 py-3 text-sm text-foreground transition-colors hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg"
                                onClick={() =>
                                  setDesktopDropdown(null)
                                }
                              >
                                {SubIcon && (
                                  <SubIcon className="h-4 w-4 shrink-0" />
                                )}

                                {subItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center space-x-2 font-medium text-foreground transition-colors duration-200 hover:text-primary"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0" />
                      )}

                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* DESKTOP CONTROLS */}

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <LanguageSelector />

            <ThemeToggle />

            <GetStartedButton />
          </div>

          {/* MOBILE CONTROLS */}

          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen((prev) => !prev)
                setMobileDropdown(null)
              }}
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        {isOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 border-t border-border bg-background px-2 pb-3 pt-2">

              {navItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={`${item.label}-${item.href}`}
                    className="relative"
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            handleMobileDropdown(item.label)
                          }
                          aria-expanded={mobileDropdown === item.label}
                          className="flex w-full items-center justify-between px-3 py-2 text-foreground transition-colors duration-200 hover:text-primary"
                        >
                          <div className="flex items-center space-x-2">
                            {Icon && (
                              <Icon className="h-4 w-4 shrink-0" />
                            )}

                            <span>{item.label}</span>
                          </div>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {mobileDropdown === item.label && (
                          <div className="space-y-1 pl-6">
                            {item.submenu.map((subItem) => {
                              const SubIcon = subItem.icon

                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                  onClick={() => {
                                    setMobileDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  {SubIcon && (
                                    <SubIcon className="h-4 w-4 shrink-0" />
                                  )}

                                  {subItem.label}
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("https://")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("https://")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center space-x-2 px-3 py-2 text-foreground transition-colors duration-200 hover:text-primary"
                        onClick={() => {
                          setIsOpen(false)
                          setMobileDropdown(null)
                        }}
                      >
                        {Icon && (
                          <Icon className="h-4 w-4 shrink-0" />
                        )}

                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                )
              })}

              {/* MOBILE FOOTER CONTROLS */}

              <div className="flex items-center justify-between px-3 py-2">
                <LanguageSelector />

                <GetStartedButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
