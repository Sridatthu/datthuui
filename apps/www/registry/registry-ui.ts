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
]
