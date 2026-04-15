export const siteConfig = {
  name: "PandoraBox",
  tagline: "Apps, Websites & Digital Builds",
  description:
    "A curated showcase of apps, websites, tools, and digital projects built by an independent developer. Browse work, explore builds, and reach out for custom versions.",
  url: "https://pandorabox.dev", // Update with your actual domain
  author: {
    name: "PandoraBox",
    handle: "@pandorabox",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com", // Update with your actual link
    twitter: "https://twitter.com",
  },
  keywords: [
    "developer portfolio",
    "apps showcase",
    "digital products",
    "indie developer",
    "web projects",
    "tools",
    "custom development",
  ],
  /**
   * WhatsApp contact number in international format without + or spaces.
   * Example: "919876543210" for +91 98765 43210 (India)
   * Update this to your actual WhatsApp number before going live.
   */
  whatsappNumber: "919999999999",
} as const;

export type SiteConfig = typeof siteConfig;
