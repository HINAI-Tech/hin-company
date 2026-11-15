
"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { sortedBlogPosts } from "@/lib/blog-data"

const INITIAL_POSTS = 5

function formatDate(date: string) {
  // Format ISO: 2026-11-15
  const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? new Date(`${date}T00:00:00`)
    : new Date(date)

  if (Number.isNaN(isoDate.getTime())) {
    return date
  }

  return isoDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function BlogGrid() {
  const [showAll, setShowAll] = useState(false)

  const posts = useMemo(() => {
    return [...sortedBlogPosts]
  }, [])

  const visiblePosts = showAll
    ? posts
    : posts.slice(0, INITIAL_POSTS)

  return (
    <section className="w-full">

      {/* HEADER */}
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Recent Posts
        </h2>

        <p className="text-sm text-muted-foreground">
          Insight, tips, dan informasi terbaru dari HINAI Tech.
        </p>

        <p className="text-xs text-muted-foreground">
          Menampilkan {visiblePosts.length} dari {posts.length} artikel
        </p>
      </div>

      {/* ARTICLE GRID */}
      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {visiblePosts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-border/50 hover:shadow-xl transition"
            >
              <CardContent className="p-0">

                {/* IMAGE */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block aspect-[16/9] overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* CONTENT */}
                <div className="p-6 space-y-4">

                  <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">

                    <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>

                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>
              </CardContent>
            </Card>
          ))}

        </div>
      ) : (
        <div className="py-16 text-center text-muted-foreground">
          Belum ada artikel yang tersedia.
        </div>
      )}

      {/* SHOW ALL / SHOW LESS */}
      {posts.length > INITIAL_POSTS && (
        <div className="flex justify-center mt-14">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll((previous) => !previous)}
            className="px-10 rounded-full"
          >
            {showAll ? "Show Less" : "Read All Articles"}

            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform ${
                showAll ? "rotate-[-90deg]" : "rotate-90"
              }`}
            />
          </Button>
        </div>
      )}

    </section>
  )
}
