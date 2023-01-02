import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Duy's Blog",
    description: "Personal blog",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
