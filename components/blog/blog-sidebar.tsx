
"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Search,
  Tag,
  BookOpen,
  FolderOpen,
} from "lucide-react"

import { sortedBlogPosts } from "@/lib/blog-data"

export function BlogSidebar() {
  const categories = Array.from(
    new Set(sortedBlogPosts.map((post) => post.category))
  ).map((name) => ({
    name,
    count: sortedBlogPosts.filter(
      (post) => post.category === name
    ).length,
  }))

  const tags = [
    "Website",
    "Landing Page",
    "SEO",
    "Google Ranking",
    "AI Automation",
    "UMKM",
    "Cyber Security",
    "Digital Marketing",
    "Bandar Lampung",
    "Website Bisnis",
  ]

  const recentPosts = sortedBlogPosts.slice(0, 6)

  return (
    <aside className="space-y-6">

      {/* SEARCH */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="h-5 w-5" />
            Cari Artikel
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              type="text"
              placeholder="Cari artikel..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* CATEGORIES */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FolderOpen className="h-5 w-5" />
            Kategori
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">

            <Button
              asChild
              variant="ghost"
              className="w-full justify-between"
            >
              <Link href="/blog">
                <span>Semua Artikel</span>
                <span>{sortedBlogPosts.length}</span>
              </Link>
            </Button>

            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between px-4 py-2 text-sm"
              >
                <span>{category.name}</span>
                <span className="text-muted-foreground">
                  {category.count}
                </span>
              </div>
            ))}

          </div>
        </CardContent>
      </Card>

      {/* RECENT POSTS */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5" />
            Artikel Terbaru
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">

            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border-b border-border/50 pb-4 last:border-0 last:pb-0"
              >
                <h4 className="font-medium text-foreground transition-colors hover:text-primary">
                  {post.title}
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  {new Date(
                    post.date + "T00:00:00"
                  ).toLocaleDateString("id-ID")}
                </p>
              </Link>
            ))}

          </div>
        </CardContent>
      </Card>

      {/* TAGS */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="h-5 w-5" />
            Topik Populer
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">

            {tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="bg-transparent text-xs hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Button>
            ))}

          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6 text-center">
          <h3 className="mb-2 text-lg font-bold">
            Butuh Website Profesional?
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">
            Konsultasikan kebutuhan website, landing page,
            SEO, atau AI Automation bersama tim HINAI Tech.
          </p>

          <Button asChild className="w-full">
            <Link
              href="https://wa.me/6282144137914"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Gratis
            </Link>
          </Button>
        </CardContent>
      </Card>

    </aside>
  )
}
