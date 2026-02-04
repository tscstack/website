import { createFileRoute } from "@tanstack/react-router";

import { Feed } from "feed";

import { source } from "~/libs/fumadocs/source";

const baseUrl = import.meta.env.BASE_URL;

export function getRSS() {
  // const feed = new Feed({
  //   title: "IndieShip",
  //   id: `${baseUrl}/blog`,
  //   link: `${baseUrl}/blog`,
  //   language: "en",

  //   image: `${baseUrl}/banner.png`,
  //   favicon: `${baseUrl}/icon.png`,
  //   copyright: "All rights reserved 2025, Fuma Nama"
  // });
  //

  const feed = new Feed({
    title: "IndieShip",
    id: `${baseUrl}`,
    link: `${baseUrl}`,
    language: "en"
  });

  for (const page of source.getPages()) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.lastModified || Date.now()),

      author: [
        {
          name: "IndieShip"
        }
      ]
    });
  }

  return feed.rss2();
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => new Response(getRSS())
    }
  }
});
