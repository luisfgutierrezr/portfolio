import { getPosts } from "@/utils/utils";
import { baseURL } from "@/resources";

export default async function sitemap() {
  const routes = [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/work`,
      lastModified: new Date(),
    },
  ];

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [...routes, ...works];
}
