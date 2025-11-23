import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "safari-browser-demo",
    type: "registry:example",
    title: "safari-browser-demo",
    description: "Example showing a safari-browser-demo component.",
    registryDependencies: ["@datthuui/safari-browser"],
    files: [
      {
        path: "example/safari-browser-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "ipad-demo",
    type: "registry:example",
    title: "ipad-demo",
    description: "Example showing a ipad-demo component.",
    registryDependencies: ["@datthuui/ipad"],
    files: [
      {
        path: "example/ipad-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "gradual-spacing-text-demo",
    type: "registry:example",
    title: "gradual-spacing-text-demo",
    description: "Example showing a gradual-spacing-text-demo component.",
    registryDependencies: ["@datthuui/gradual-spacing-text"],
    files: [
      {
        path: "example/gradual-spacing-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "macbook-pro-demo",
    type: "registry:example",
    title: "macbook-pro-demo",
    description: "Example showing a macbook-pro-demo component.",
    registryDependencies: ["@datthuui/macbook-pro"],
    files: [
      {
        path: "example/macbook-pro-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "fade-up-word-demo",
    type: "registry:example",
    title: "fade-up-word-demo",
    description: "Example showing a fade-up-word-demo component.",
    registryDependencies: ["@datthuui/fade-up-word"],
    files: [
      {
        path: "example/fade-up-word-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
