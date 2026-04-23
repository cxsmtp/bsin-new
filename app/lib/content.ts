export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  coverImage?: string;
  content: Array<
    | { type: "paragraph"; content: string }
    | { type: "heading"; content: string }
    | { type: "quote"; content: string }
    | { type: "callout"; content: string }
  >;
};

export type Project = {
  title: string;
  desc: string;
};

export const posts: Post[] = [
  {
    slug: "appsec-models-ai-era",
    title: "Why Traditional AppSec Models Are Breaking in the AI Era",
    date: "April 2026",
    category: "AppSec World",
    excerpt:
      "AI is accelerating software delivery, but it is also exposing the limits of security models built for a slower world.",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    content: [
      {
        type: "paragraph",
        content:
          "A large enterprise recently accelerated its development using AI-assisted tooling. Pull requests increased, code velocity improved, and teams started shipping faster than they had in years.",
      },
      {
        type: "paragraph",
        content:
          "At the same time, their security dashboards started filling up. More findings, more alerts, more signals. The AppSec team responded the way most programs are designed to respond — by increasing scan coverage and pushing more results into the system.",
      },
      {
        type: "quote",
        content: "Detection scales easily. Decisioning does not.",
      },
      {
        type: "heading",
        content: "The Real Shift: AI Is Not Just Accelerating Code",
      },
      {
        type: "paragraph",
        content:
          "AI is not just increasing the amount of code being written. It is exposing the assumptions behind how security programs operate.",
      },
      {
        type: "callout",
        content:
          "What changed was not the presence of vulnerabilities. It was the pace at which they appeared and the inability of the existing system to absorb them.",
      },
      {
        type: "heading",
        content: "From Detection to Decisioning",
      },
      {
        type: "paragraph",
        content:
          "AppSec needs to move from a detection-first model to a decision-first model. That means building systems that prioritize based on real risk, integrate into developer workflows, and support faster release decisions.",
      },
    ],
  },
  {
    slug: "detection-does-not-scale",
    title: "Why vulnerability detection alone does not scale",
    date: "April 2026",
    category: "AppSec World",
    excerpt: "Detection creates inventory. It does not automatically create reduction in risk.",
    content: [
      {
        type: "paragraph",
        content:
          "Security programs often look healthy on paper because they detect a lot. Dashboards are full, scans are running, and findings are constantly generated.",
      },
      {
        type: "paragraph",
        content:
          "But detection by itself does not create reduction in risk. It creates inventory.",
      },
    ],
  },
  {
    slug: "solution-engineering-translation",
    title: "Good solution engineering is not product knowledge",
    date: "April 2026",
    category: "Life of a Solution Engineer",
    excerpt: "The real job of a solution engineer is translation.",
    content: [
      {
        type: "paragraph",
        content:
          "A lot of people assume the role of a solution engineer is mainly to explain products well. Product knowledge matters, but it is not the actual job.",
      },
    ],
  },
  {
    slug: "managing-teams-clarity",
    title: "Managing technical teams is not about control",
    date: "April 2026",
    category: "Manager’s Playbook",
    excerpt: "Technical teams perform better when priorities are clear.",
    content: [
      {
        type: "paragraph",
        content:
          "One of the easiest mistakes for a manager to make is to confuse oversight with control.",
      },
    ],
  },
  {
    slug: "badminton-consistency",
    title: "What badminton keeps teaching me about consistency",
    date: "April 2026",
    category: "Badminton",
    excerpt: "Progress is rarely built on motivation alone.",
    content: [
      {
        type: "paragraph",
        content:
          "Badminton has a way of exposing the difference between intensity and consistency.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise AppSec Programs",
    desc: "Helping organizations align application security with modern engineering workflows.",
  },
  {
    title: "AI in Secure Software Delivery",
    desc: "Exploring how AI can accelerate development without weakening control systems.",
  },
  {
    title: "Solution Engineering Leadership",
    desc: "Building disciplined, high-impact solution engineering practices across regions.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}