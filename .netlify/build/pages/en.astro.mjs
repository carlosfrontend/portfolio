/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BqA62yoT.mjs';
import 'kleur/colors';
import { u as useTranslations, g as getCollection, s as sortProjects, $ as $$Layout, a as $$SectionContainer, b as $$CardProject } from '../chunks/sortProjects_CfUhczUY.mjs';
import { $ as $$ProjectsIcon, a as $$Header, b as $$Hero, c as $$Skills, g as getRelativeLocaleUrl } from '../chunks/i18n_q_4gA9AM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const sections = [
    { id: translateLabels("projects.id"), name: translateLabels("projects.title"), icon: $$ProjectsIcon },
    { id: translateLabels("about.id"), name: translateLabels("about.title"), icon: $$ProjectsIcon },
    { id: translateLabels("skills.id"), name: translateLabels("skills.title"), icon: $$ProjectsIcon }
  ];
  const projectEntries = await getCollection("projects", ({ id }) => {
    return id.startsWith(currentLang);
  });
  const sortedProjects = sortProjects(projectEntries).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carlos Pulido's Portfolio Web and Programming Developer - Home page.", "description": "Hire Carlos Pulido to create web and mobile applications." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative pt-4 w-full desktop:w-8/12 desktop:self-center"> ${renderComponent($$result2, "Header", $$Header, { "id": translateLabels("home.id") })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "className": "pt-10" }, { "default": async ($$result3) => renderTemplate`  ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} ${sections.map((section) => renderTemplate`${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": section.id, "className": "pt-36" }, { "default": async ($$result3) => renderTemplate`${section.name === translateLabels("projects.title") ? renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-14 font-bold dark:text-lime-400 text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg> </span> ${section.name} </h3>` : section.name === translateLabels("about.title") ? renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-4 font-bold dark:text-lime-400 text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path> <path d="M15 19l2 2l4 -4"></path> </svg> </span> ${section.name} </h3>
              <p class="pb-3 text-xl font-normal text-pretty dark:text-white text-gray-700">${translateLabels("about.start")} <i class="dark:text-yellow-200 text-neutral-900 font-bold">${translateLabels("about-var")}</i> ${translateLabels("about.define")} <strong class="dark:text-yellow-200">${translateLabels("about.javascript")}</strong>.</p>

<p class="pb-3 text-xl font-normal text-pretty dark:text-white text-gray-700">${translateLabels("about.health")}</p>

<p class="pb-3 text-xl font-normal text-pretty dark:text-white text-gray-700">${translateLabels("about.want")} <strong class="dark:text-yellow-200">${translateLabels("about.trajectory")}</strong> ${translateLabels("about.to")} <strong class="dark:text-yellow-200">${translateLabels("about.frontend")}</strong>${translateLabels("about.passion")}</p>

 <p class="pb-3 text-xl font-normal text-pretty dark:text-white text-gray-700"> ${translateLabels("about.bring")} <strong class="dark:text-yellow-200 text-slate-700 font-bold">${translateLabels("about.softSkills")}</strong> ${translateLabels("about.knowledge")} <strong class="dark:text-yellow-200 text-slate-700 font-bold">${translateLabels("about.webInterfaces")}</strong> ${translateLabels("about.combine")} <strong class="dark:text-yellow-200 text-slate-700 font-bold">${translateLabels("about.design")}</strong>.
</p>
<p class="pb-3 text-xl font-normal text-pretty dark:text-white text-slate-700"> ${translateLabels("about.curiosity")} <span class="dark:text-yellow-200 text-slate-700 font-bold">${translateLabels("about.learn")}</span> </p>

<p class="pb-3 text-xl font-normal text-pretty dark:text-white text-slate-700"> ${translateLabels("about.mountains")} <strong class="dark:text-yellow-200">${translateLabels("about.hiking")}</strong> ${translateLabels("about.disconnect")} </p>` : renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-4 font-bold dark:text-lime-400 text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tools"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path> <path d="M14.5 5.5l4 4"></path> <path d="M12 8l-5 -5l-4 4l5 5"></path> <path d="M7 8l-1.5 1.5"></path> <path d="M16 12l5 5l-4 4l-5 -5"></path> <path d="M16 17l-1.5 1.5"></path> </svg> </span> ${translateLabels("skills.title")} </h3>
            ${renderComponent($$result3, "Skills", $$Skills, {})}`}${section.name === translateLabels("projects.title") && sortedProjects.map((project) => renderTemplate`${renderComponent($$result3, "CardProject", $$CardProject, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "imageAlt": project.data.imageAlt, "loading": project.data.loading, "codeLink": project.data.codeLink, "liveLink": project.data.liveLink, "tags": project.data.tags })}`)}${section.name === translateLabels("projects.title") && renderTemplate`<a${addAttribute(getRelativeLocaleUrl(currentLang, translateLabels("otherProjects.id").slice(1)), "href")} class="flex h-10 items-center justify-center dark:bg-cyan-700 text-slate-100 bg-slate-950 rounded-sm w-36 px-2 gap-x-2 transition duration-300 ease-in-out hover:scale-105 hover:dark:bg-cyan-600 hover:bg-slate-800"> <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"></path><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path><path d="M2.541 5.594a13.487 13.487 0 0 1 2.46 -1.427"></path><path d="M14 3.458c1.32 .354 2.558 .902 3.685 1.612"></path></svg> ${translateLabels("projects.button")} </a>`}` })}`)} </main> ` })}`;
}, "/home/carlosfrontend/repos/portfolio/src/pages/en/index.astro", void 0);

const $$file = "/home/carlosfrontend/repos/portfolio/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
