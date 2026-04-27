import { posts } from "@/app/lib/content";
import Link from "next/link";

export default function WritingPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Writings</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-400">
            A collection of short notes and longer articles on application security, AI,
            leadership, and the ideas shaping how I think about building and scaling systems.
          </p>
        </header>

        <section className="space-y-9">
          {posts.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`} className="group block">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  {post.category}
                </span>
                <span className="text-lg font-normal leading-snug transition group-hover:underline">
                  {post.title}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
