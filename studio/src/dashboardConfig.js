export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f96f515c9be40c22630b84",
                  title: "Sanity Studio",
                  name: "example-blog-studio",
                  apiId: "001f06b1-6f9d-4480-941a-096ffce48720",
                },
                {
                  buildHookId: "61f96f51da86830a4d37ddb0",
                  title: "Blog Website",
                  name: "example-blog-web",
                  apiId: "385e62dc-e975-4106-8dc0-00e61cb16fae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/robbiejdunne/example-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://example-blog-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
