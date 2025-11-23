import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "safari-browser",
    type: "registry:ui",
    title: "safari-browser",
    description: "A safari browser component.",
    files: [
      {
        path: "datthuui/safari-browser.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "ipad",
    type: "registry:ui",
    title: "ipad",
    description: "An iPad SVG component.",
    files: [
      {
        path: "datthuui/ipad.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "gradual-spacing-text",
    type: "registry:ui",
    title: "gradual-spacing-text",
    description: "A gradual spacing text component.",
    dependencies: ["motion", "react", "clsx"],
    files: [
      {
        path: "datthuui/gradual-spacing-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "macbook-pro",
    type: "registry:ui",
    title: "macbook-pro",
    description: "A MacBook Pro SVG component.",
    files: [
      {
        path: "datthuui/macbook-pro.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "fade-up-word",
    type: "registry:ui",
    title: "fade-up-word",
    description: "A fade-up-word component.",
    files: [
      {
        path: "datthuui/fade-up-word.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "gradient-slide-button",
    type: "registry:ui",
    title: "gradient-slide-button",
    description: "A gradient-slide-button component.",
    files: [
      {
        path: "datthuui/gradient-slide-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "squiggle-arrow",
    type: "registry:ui",
    title: "squiggle-arrow",
    description: "A squiggle arrow component.",
    files: [
      {
        path: "datthuui/squiggle-arrow.tsx",
        type: "registry:ui",
      },
    ],
  },
]
