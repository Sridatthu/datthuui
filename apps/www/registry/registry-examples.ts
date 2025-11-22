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
]
