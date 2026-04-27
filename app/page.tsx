import ThemeToggle from "@/components/theme-toggle";
import { posts, projects } from "@/app/lib/content";

export default function HomePage() {
  const latestPosts = posts.slice(0, 5);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex min-h-[88svh] flex-col sm:min-h-[90svh]">
          <header className="flex items-center justify-between py-2">
            <a href="/" className="text-sm font-normal tracking-[0.01em]">
              Bhawani Singh
            </a>

            <nav className="flex items-center gap-7 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="/writing" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Writings
              </a>
              <a href="/projects" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                Projects
              </a>
              <ThemeToggle />
            </nav>
          </header>

          <section className="flex flex-1 items-center pb-16 pt-12 sm:pb-24 sm:pt-16">
            <div>
              <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                I help enterprises scale secure software and AI systems.
              </h1>

              <p className="mt-7 max-w-lg text-[16px] leading-7 text-neutral-700 dark:text-neutral-300">
                I work at the intersection of application security, engineering execution, and
                AI-driven software delivery. My focus is on helping organizations move from reactive
                security to systems that scale with modern development.
              </p>

              <p className="mt-5 max-w-lg text-[15px] text-neutral-600 dark:text-neutral-400">
                Open to conversations on application security, AI risk, and scaling secure software
                delivery.
              </p>
            </div>
          </section>
        </div>

        <section className="mb-24 mt-8 sm:mb-28 sm:mt-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Writings</h2>
            <a
              href="/writing"
              className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              View all
            </a>
          </div>

          <div className="space-y-9">
            {latestPosts.map((post) => (
              <a key={post.slug} href={`/writing/${post.slug}`} className="group block">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    {post.category}
                  </span>
                  <span className="text-lg font-normal leading-snug group-hover:underline">
                    {post.title}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {post.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 text-xl font-semibold">Projects</h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.title}>
                <p className="text-[16px] font-medium">{project.title}</p>
                <p className="mt-1 text-[14px] text-neutral-600 dark:text-neutral-400">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
