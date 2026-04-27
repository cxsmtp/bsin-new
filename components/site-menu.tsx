"use client";

import { Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";

type SiteMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const primaryItems = [
  { label: "Home", href: "/" },
  { label: "Writings", href: "/writing" },
  { label: "Projects", href: "/projects" },
];

const secondaryItems = [
  { label: "AppSec World", href: "/writing" },
  { label: "My Projects", href: "/projects" },
  { label: "Life of a Solution Engineer", href: "/writing" },
  { label: "Manager’s Playbook", href: "/writing" },
  { label: "Badminton", href: "/writing" },
];

const socialItems = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "Email", href: "mailto:", Icon: Mail },
];

export default function SiteMenu({ isOpen, onClose }: SiteMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 dark:bg-neutral-950 sm:px-10 sm:py-10">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="inline-flex items-center text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="pt-10 sm:pt-12">
        <nav className="space-y-7 sm:space-y-8" aria-label="Main menu">
          {primaryItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block text-3xl font-medium tracking-tight text-neutral-900 transition hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300 sm:text-4xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="mt-10 space-y-5 sm:mt-12 sm:space-y-6" aria-label="Secondary menu">
          {secondaryItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block text-lg text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mb-4 mt-14 flex items-center gap-5 sm:mt-16" aria-label="Social links">
          {socialItems.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              onClick={onClose}
              aria-label={label}
              className="text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
