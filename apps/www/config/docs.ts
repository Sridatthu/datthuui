import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Templates",
      href: "https://pro.ui.datthu.site",
      event: "header_cta_clicked",
      label: "",
    },
    {
      title: "Showcase",
      href: "/showcase",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          title: "Safari Browser",
          href: "/docs/components/safari-browser",
          items: [],
        },
        {
          title: "iPad",
          href: "/docs/components/ipad",
          items: [],
          label: "New",
        },
        {
          title: "MacBook Pro",
          href: "/docs/components/macbook-pro",
          items: [],
          label: "New",
        },
      ],
    },
    {
      title: "Text Animations",
      items: [
        {
          title: "Gradual Spacing Text",
          href: "/docs/components/gradual-spacing-text",
          items: [],
        },
        {
          title: "Fade Up Word",
          href: "/docs/components/fade-up-word",
          items: [],
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Gradient Slide Button",
          href: "/docs/components/gradient-slide-button",
          items: [],
        },
      ],
    },
  ],
}
