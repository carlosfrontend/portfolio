/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CzuhdN41.mjs';
import 'kleur/colors';
import { g as getCollection, u as useTranslations, $ as $$SectionContainer, a as $$CardProject, b as $$Layout } from '../chunks/_astro_content_BLSSBTte.mjs';
import { $ as $$ProjectsIcon, a as $$Header, b as $$Hero, c as $$Skills, g as getRelativeLocaleUrl } from '../chunks/i18n_0cm4cszc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const spanishProjectEntries = await getCollection("projects", ({ id }) => {
    return id.startsWith("es/");
  });
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(currentLang);
  const sections = [
    { id: translateLabels("projects.id"), name: translateLabels("projects.title"), icon: $$ProjectsIcon },
    { id: translateLabels("about.id"), name: translateLabels("about.title"), icon: $$ProjectsIcon },
    { id: translateLabels("skills.id"), name: translateLabels("skills.title"), icon: $$ProjectsIcon }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Carlos Pulido Desarrollador y Programador Web - P\xE1gina principal.", "description": "Contrata a Carlos Pulido para crear aplicaciones web o m\xF3viles." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative pt-4 w-full desktop:w-8/12 desktop:self-center"> ${renderComponent($$result2, "Header", $$Header, { "id": translateLabels("home.id") })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "className": "pt-10" }, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} ${sections.map((section) => renderTemplate`${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": section.id, "className": "pt-36" }, { "default": ($$result3) => renderTemplate`${section.name === translateLabels("projects.title") ? renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-14 font-bold dark:text-white text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg> </span> ${section.name} </h3>` : section.name === translateLabels("about.title") ? renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-4 font-bold dark:text-white text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path> <path d="M15 19l2 2l4 -4"></path> </svg> </span> ${section.name} </h3>
             <p class="text-xl font-normal text-pretty dark:text-white/80 text-gray-700"> ${translateLabels("about.bring")} <strong class="dark:text-yellow-200/80 text-slate-700 font-bold">${translateLabels("about.softSkills")}</strong> ${translateLabels("about.knowledge")} <strong class="dark:text-yellow-200/80 text-slate-700 font-bold">${translateLabels("about.webInterfaces")}</strong> ${translateLabels("about.combine")} <strong class="dark:text-yellow-200/80 text-slate-700 font-bold">${translateLabels("about.design")}</strong>.
</p>
        <p class="text-xl font-normal text-pretty dark:text-white/80 text-slate-700"> ${translateLabels("about.curiosity")} <span class="dark:text-yellow-200/80 text-slate-700 font-bold">${translateLabels("about.learn")}</span> ${translateLabels("about.connect")} </p>` : renderTemplate`<h3 class="text-3xl flex items-center gap-x-2 pb-4 font-bold dark:text-white text-slate-800"> <span> <svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tools"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path> <path d="M14.5 5.5l4 4"></path> <path d="M12 8l-5 -5l-4 4l5 5"></path> <path d="M7 8l-1.5 1.5"></path> <path d="M16 12l5 5l-4 4l-5 -5"></path> <path d="M16 17l-1.5 1.5"></path> </svg> </span> ${translateLabels("skills.title")} </h3>
            ${renderComponent($$result3, "Skills", $$Skills, {})}`}${section.name === translateLabels("projects.title") && spanishProjectEntries.slice(0, 3).map(
    (project) => renderTemplate`${renderComponent($$result3, "CardProject", $$CardProject, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "imageAlt": project.data.imageAlt, "loading": project.data.loading, "codeLink": project.data.codeLink, "liveLink": project.data.liveLink, "tags": project.data.tags })}`
  )}${section.name === translateLabels("projects.title") && renderTemplate`<a${addAttribute(getRelativeLocaleUrl(currentLang, translateLabels("otherProjects.id").slice(1)), "href")} class="flex h-10 items-center justify-center dark:bg-cyan-950 text-slate-100 bg-slate-950 rounded-sm w-36 px-2 transition duration-300 ease-in-out hover:scale-105 hover:dark:bg-cyan-700 hover:bg-slate-800"> ${translateLabels("projects.button")} </a>`}` })}`)} </main> ` })}`;
}, "/home/carlosfrontend/repos/portfolio/src/pages/es/index.astro", void 0);

const $$file = "/home/carlosfrontend/repos/portfolio/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
