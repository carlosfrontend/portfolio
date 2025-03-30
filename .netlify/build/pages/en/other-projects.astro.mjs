/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BqA62yoT.mjs';
import 'kleur/colors';
import { u as useTranslations, g as getCollection, s as sortProjects, $ as $$Layout, a as $$SectionContainer, b as $$CardProject } from '../../chunks/sortProjects_CfUhczUY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$OtherProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OtherProjects;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  const section = {
    id: translateLabels("otherProjects.id"),
    name: translateLabels("otherProjects.name")
  };
  const projectEntries = await getCollection("projects", ({ id }) => {
    return id.startsWith(currentLang);
  });
  const sortedProjects = sortProjects(projectEntries).slice(3, 8);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carlos Pulido's Portfolio Web and Programming Developer - Other Projects..", "description": "Hire Carlos Pulido to create web and mobile applications." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative pt-4 w-full desktop:w-8/12 desktop:self-center"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": `${translateLabels("otherProjects.id")}`, "className": "pt-36" }, { "default": async ($$result3) => renderTemplate` <h3 class="text-3xl flex items-center gap-x-2 pb-14 font-bold dark:text-lime-300 text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg> </span> ${translateLabels("otherProjects.name")} </h3> ${section.name === translateLabels("otherProjects.name") && sortedProjects.map((project) => renderTemplate`${renderComponent($$result3, "CardProject", $$CardProject, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "imageAlt": project.data.imageAlt, "loading": project.data.loading, "codeLink": project.data.codeLink, "liveLink": project.data.liveLink, "tags": project.data.tags })}`)}` })} </main> ` })}`;
}, "/home/carlosfrontend/repos/portfolio/src/pages/en/other-projects.astro", void 0);

const $$file = "/home/carlosfrontend/repos/portfolio/src/pages/en/other-projects.astro";
const $$url = "/en/other-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OtherProjects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
