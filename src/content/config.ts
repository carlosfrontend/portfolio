import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    codeLink: z.string(),
    liveLink: z.string(),
    loading: z.string(),
    tags: z.array(z.object(
      {
        name: z.string(),
        className: z.string()
      }
    ))
  })
});
export const collections = {
  'projects': projectsCollection,
};
