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
]
