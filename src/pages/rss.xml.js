import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "~/consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].data.draft) {
      posts.splice(i, 1);
    }
  }
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
      author: "me@errorcodezero.dev",
    })),
  });
}
