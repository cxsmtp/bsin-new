import { projects } from "@/app/lib/content";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-neutral-600 dark:text-neutral-400">
            A curated set of focus areas and ongoing work across application security, AI, and
            solution engineering leadership.
          </p>
        </header>

        <section className="space-y-6">
          {projects.map((project) => (
            <div key={project.title}>
              <p className="text-[16px] font-medium">{project.title}</p>
              <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
                {project.desc}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}