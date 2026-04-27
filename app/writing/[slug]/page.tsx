import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Heart, MessageCircle } from "lucide-react";
import { getPostBySlug, posts } from "@/app/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const currentIndex = posts.findIndex((post) => post.slug === article.slug);
  const nextArticle = currentIndex >= 0 ? posts[currentIndex + 1] : undefined;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-12">
          <a
            href="/writing"
            className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Writing
          </a>

          <p className="mb-4 text-xs font-normal tracking-[0.08em] text-neutral-400 dark:text-neutral-500">
            {article.category}
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-[3.25rem]">
            {article.title}
          </h1>

          <p className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">{article.date}</p>

          {article.excerpt ? (
            <p className="mt-7 max-w-xl text-[19px] leading-9 text-neutral-700 dark:text-neutral-300">
              {article.excerpt}
            </p>
          ) : null}
        </header>

        {article.coverImage ? (
          <figure className="mb-14 overflow-hidden rounded-lg">
            <img
              src={article.coverImage}
              alt={article.title}
              className="h-[240px] w-full object-cover sm:h-[360px]"
            />
          </figure>
        ) : null}

        <article className="max-w-none">
          {article.content.map((section, index) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className="mb-5 mt-16 text-2xl font-semibold tracking-tight sm:mt-20"
                >
                  {section.content}
                </h2>
              );
            }

            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mb-8 text-[18px] leading-9 text-neutral-800 dark:text-neutral-200"
                >
                  {section.content}
                </p>
              );
            }

            if (section.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="my-12 border-l border-neutral-300 pl-5 text-[21px] font-normal italic leading-9 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                >
                  {section.content}
                </blockquote>
              );
            }

            if (section.type === "callout") {
              return (
                <div
                  key={index}
                  className="my-10 border-l border-neutral-300 py-1 pl-5 text-[17px] leading-8 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                >
                  {section.content}
                </div>
              );
            }

            return null;
          })}
        </article>

        <section className="mt-20 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              <Heart className="h-4 w-4" />
              12
            </button>
          </div>
        </section>

        <section className="mt-12 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <div className="mb-6 flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <h3 className="text-lg font-semibold">Comments</h3>
          </div>

          <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
            Comments are reviewed before they appear publicly.
          </p>

          <form className="mb-12 space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-neutral-200 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:focus:border-neutral-600"
            />
            <textarea
              placeholder="Share your thoughts"
              rows={5}
              className="w-full rounded-md border border-neutral-200 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:focus:border-neutral-600"
            />
            <button
              type="submit"
              className="inline-flex rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-950"
            >
              Submit for approval
            </button>
          </form>

          <div className="space-y-7">
            <div className="border-l border-neutral-300 pl-4 dark:border-neutral-700">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-sm font-medium">Amit</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">2 days ago</p>
              </div>
              <p className="text-[15px] leading-7 text-neutral-700 dark:text-neutral-300">
                Strong framing. The shift from visibility to decisioning is where many programs
                are struggling today.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-20 flex items-center justify-between border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <a
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Writing
          </a>

          {nextArticle ? (
            <a
              href={`/writing/${nextArticle.slug}`}
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Next article
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
        </footer>
      </div>
    </main>
  );
}
