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
    registryDependencies: ["@eldoraui/gradual-spacing-text"],
    files: [
      {
        path: "example/gradual-spacing-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
