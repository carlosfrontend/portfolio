import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, b as renderComponent, m as maybeRenderHead, e as renderSlot, f as renderHead, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML } from './astro/server_CzuhdN41.mjs';
import 'kleur/colors';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_CaGlhVAO.mjs';
import * as devalue from 'devalue';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://carlospulido.netlify.app");
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardProject;
  const {
    title,
    description,
    image,
    imageAlt,
    codeLink,
    liveLink,
    tags,
    loading
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<article id="project" class="w-full pb-14 border-solid"> ', ' <div class="flex justify-start pt-2 pb-4 gap-x-3"> <a', ' class="transition duration-150 ease-in-out hover:transform hover:scale-110" aria-label="Ver c\xF3digo del proyecto" target="_blank" rel="noreferrer noopener"><svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-gray-700 dark:text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a> <a', ' class="transition duration-150 ease-in-out hover:transform hover:scale-110" aria-label="Ver proyecto en vivo" target="_blank" rel="noreferrer noopener"><svg class="size-6 text-gray-700 dark:text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M17 4h4v4"></path><path d="M16 9l5 -5"></path></svg></a> </div> <h3 class="text-2xl pb-2 dark:text-white/80 text-slate-700 font-semibold"> ', ' </h3> <p class="w-full text-lg text-pretty font-normal dark:text-white/80 text-gray-700"> ', ' </p> <div class="flex flex-wrap gap-x-4 py-3"> ', ' </div> </article> <script type="module">\n  // CardProject transitions\n  const projects = [...document.querySelectorAll("#project")];\n\n  const effectIn = [\n      "transition-all",\n      "duration-150",\n      "delay-50",\n      "ease-in",\n      "opacity-90",\n      "bg-black",\n      "transform",\n      "scale-105",\n      "rotate-1",\n      "backward"\n    ];\n\n    const effectOut = [\n      "transition-all",\n      "duration-300",\n      "delay-0",\n      "ease-out",\n      "opacity-100",\n      "bg-black",\n      "transform",\n      "scale-100",\n      "rotate-0",\n      "forward"\n    ];\n\n\n  function handleEnter(e) {\n    const image = e.target.firstElementChild;\n    image.classList.add(...effectIn)\n    image.classList.remove(...effectOut)\n  }\n\n  function handleLeave(e) {\n    const image = e.target.firstElementChild;\n    image.classList.remove(...effectIn)\n    image.classList.add(...effectOut)\n  }\n\n\n  projects.forEach((project) =>\n    project.addEventListener("mouseenter", handleEnter)\n  );\n\n \n\n  projects.forEach(project =>\n    project.addEventListener("mouseleave", handleLeave)\n  );\n  \n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "id": "project-image", "class": "tablet:w-[380px] rounded-md shadow-xl dark:shadow-slate-300/20 shadow-slate-700/20 mb-4", "height": "450", "width": "800", "loading": loading, "src": image, "alt": imageAlt }), addAttribute(codeLink, "href"), addAttribute(liveLink, "href"), title, description, tags.map((tag) => renderTemplate`<div class="min-w-16 h-auto dark:bg-slate-700/60 dark:text-white/80 bg-slate-700 gap-x-1 px-2 p-1 rounded-sm flex justify-center items-center my-1 text-xs"> <i${addAttribute(`${tag["className"]}`, "class")}></i> ${tag["name"]} </div>`));
}, "/home/carlosfrontend/repos/portfolio/src/components/CardProject.astro", void 0);

const $$Astro$4 = createAstro("https://carlospulido.netlify.app");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { id, title, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(title, "title")}${addAttribute(`w-full bg-white/0 h-auto relative py-6 px-12 tablet:w-8/12 desktop:w-8/12 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/SectionContainer.astro", void 0);

const labels = {
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.aria.changeEsLanguage": "Cambiar idioma a Español",
    "nav.aria.changeEnlanguage": "Cambiar idioma a Inglés",
    "nav.aria.changeTheme": "Cambiar el tema de color",
    "header.title": "Disponible para trabajar",
    "home.title": "Inicio",
    "projects.title": "Proyectos",
    "about.title": "Sobre mí",
    "skills.title": "Habilidades",
    "home.id": "inicio",
    "projects.id": "proyectos",
    "about.id": "sobre-mi",
    "skills.id": "habilidades",
    "projects.button": "Ver más",
    "home.url": "",
    "home.anchor": "#inicio",
    "projects.url": "#proyectos",
    "about.url": "#sobre-mi",
    "skills.url": "#habilidades",
    "hero.greeting": "Hey! 👋, soy",
    "hero.profession": "Desarrollador Front-End",
    "hero.location": "de Madrid, España 🇪🇸.",
    "hero.timeOfStudy": "LLevo ➕ de un año 📅",
    "hero.studying": "estudiando",
    "hero.and": "y",
    "hero.programming": "programando",
    "hero.thanks": "gracias a los maravillosos recursos del proyecto de Open Source",
    "hero.optionsText": "Desde aquí 👇 puedes:",
    "hero.cvButton": "Ver mi Currículum",
    "hero.sendEmail": "Envíame un correo",
    "hero.copyEmail": "Copiar mi correo",
    "hero.copyEmail.ToastMessage": "Correo copiado!",
    "otherProjects.id": "#otros-proyectos",
    "otherProjects.name": "Otros Proyectos",
    "about.bring": "Aporto",
    "about.softSkills": "habilidades analíticas y organizativas,",
    "about.knowledge": "y utilizo mis conocimientos para crear",
    "about.webInterfaces": "interfaces web",
    "about.combine": "que combinan",
    "about.design": "diseño intuitivo y funcionalidad",
    "about.curiosity": "Mi curiosidad y dedicación me impulsan a",
    "about.learn": "aprender constantemente",
    "about.connect": "y a conectar con las necesidades de las personas a través de la tecnologías."
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.aria.changeEsLanguage": "Change to Spanish language",
    "nav.aria.changeEnlanguage": "Change to English language",
    "nav.aria.changeTheme": "Change the color theme",
    "header.title": "Available to work",
    "home.title": "Home",
    "projects.title": "Projects",
    "about.title": "About",
    "skills.title": "Skills",
    "home.id": "home",
    "projects.id": "projects",
    "about.id": "about",
    "skills.id": "skills",
    "projects.button": "See more",
    "home.url": "",
    "home.anchor": "#home",
    "projects.url": "#projects",
    "about.url": "#about",
    "skills.url": "#skills",
    "hero.greeting": "Hey! 👋, I am",
    "hero.profession": "Front-End Developer",
    "hero.location": "from Madrid, Spain 🇪🇸.",
    "hero.timeOfStudy": "I have spent ➕ than a year 📅",
    "hero.studying": "studying",
    "hero.and": "and",
    "hero.programming": "programming",
    "hero.thanks": "thanks to the wonderful resources of the Open Source project",
    "hero.optionsText": "From here 👇 you can:",
    "hero.cvButton": "See my Resume",
    "hero.sendEmail": "Send me an email",
    "hero.copyEmail": "Copy my email",
    "hero.copyEmail.ToastMessage": "Email copied!",
    "otherProjects.id": "#other-projects",
    "otherProjects.name": "Other Projects",
    "about.bring": "I bring",
    "about.softSkills": "analytical and organizational skills,",
    "about.knowledge": "and use my knowledge to create",
    "about.webInterfaces": "web interfaces",
    "about.combine": "that combine",
    "about.design": "intuitive design and functionality",
    "about.curiosity": "My curiosity and dedication drive me to",
    "about.learn": "constantly learn",
    "about.connect": "and connect with people's needs through technology."
  }
};

const defaultLang = "es";
function useTranslations(lang) {
  return function translate(key) {
    return labels[lang][key] || labels[defaultLang][key];
  };
}

const $$Astro$3 = createAstro("https://carlospulido.netlify.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  return renderTemplate`${maybeRenderHead()}<footer class="px-8 py-7  dark:bg-neutral-900 tablet:flex tablet:justify-between tablet:flex-wrap tablet:gap-y-4 tablet:px-48 tablet:items-center relative bottom-0 w-full h-auto mt-8 desktop:w-8/12 desktop:self-center bg-white border-2 dark:border-0 desktop:rounded-t-xl desktop:border-transparent"> <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© ${currentYear} <a class="transition duration-150
    hover:border-b-[1px] hover:pb-1 hover:border-slate-700 hover:text-slate-700
    hover:dark:border-b-[1px] hover:dark:pb-1 hover:dark:border-yellow-200 hover:dark:text-yellow-200"${addAttribute(`/${currentLang}/${translateLabels("home.anchor")}`, "href")}>Carlos Pulido.</a> </span> <div class="flex mt-4 tablet:mt-0 items-center md:mt-0 space-x-5 rtl:space-x-reverse"> <a href="https://discord.gg/2wyag2pN6q" target="_blank" rel="noreferrer noopener" class="text-slate-600 dark:text-white/80 transform transition duration-150 hover:scale-125"> <svg class="size-6" aria-hidden="true" fill="currentColor" viewBox="0 0 21 16"> <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path> </svg> <span class="sr-only">Discord</span> </a> <a href="https://github.com/carlosfrontend" target="_blank" rel="noreferrer noopener" class="text-slate-600 size-6 transform transition duration-150 hover:scale-125 hover:text-white-400/80 dark:text-white/80"> <svg viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path></svg> <span class="sr-only">GitHub</span> </a> <a class="text-slate-600 size-6 transform transition duration-150 hover:scale-125 hover:text-white-400/80 dark:text-white/80" href="https://www.linkedin.com/in/carlosfrontend/" target="_blank" rel="noreferrer noopener"><span class="[&>svg]:h-6 [&>svg]:w-6"> <svg fill="currentColor" viewBox="0 0 448 512"> <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path> </svg> </span> <span class="sr-only">Linkedin</span> </a> <a href="https://x.com/CarlosFrontEnd" target="_blank" rel="noreferrer noopener" class="text-slate-600 size-6 transform transition duration-150 hover:scale-125 hover:text-white-400/80 dark:text-white/80"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> <span class="sr-only">Twitter</span> </a> <a class="text-slate-600 size-6 transform transition duration-150 hover:scale-125 hover:text-white-400/80 dark:text-white/80" href="mailto:carlosfrontend@hotmail.com"><svg viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path></svg> <span class="sr-only">${translateLabels("hero.sendEmail")}</span></a> </div> </footer>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Footer.astro", void 0);

const ThemeIcons = ({ currentLang }) => {
  const translateLabels = useTranslations(currentLang);
  useEffect(() => {
    const theme = (() => {
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })();
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, []);
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleToggleClick,
      id: "themeToggle",
      "aria-label": translateLabels("nav.aria.changeTheme"),
      className: "transition duration-150 ease-in-out hover:scale-110 hover:rotate-[-20deg]",
      children: /* @__PURE__ */ jsxs("svg", { width: "25.5px", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "sun",
            fillRule: "evenodd",
            d: "M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "moon",
            fillRule: "evenodd",
            d: "M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
          }
        )
      ] })
    }
  );
};

function SpainIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "w-5 h-5",
      enableBackground: "new 0 0 512 512",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z",
            fill: "#ffda44"
          }
        ),
        /* @__PURE__ */ jsxs("g", { fill: "#d80027", children: [
          /* @__PURE__ */ jsx("path", { d: "m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z" }),
          /* @__PURE__ */ jsx("path", { d: "m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z" })
        ] }),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {})
      ]
    }
  );
}

function UnitedKingdomIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "w-5 h-5",
      enableBackground: "new 0 0 512 512",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "256", cy: "256", fill: "#f0f0f0", r: "256" }),
        /* @__PURE__ */ jsxs("g", { fill: "#0052b4", children: [
          /* @__PURE__ */ jsx("path", { d: "m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z" }),
          /* @__PURE__ */ jsx("path", { d: "m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z" }),
          /* @__PURE__ */ jsx("path", { d: "m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z" }),
          /* @__PURE__ */ jsx("path", { d: "m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z" }),
          /* @__PURE__ */ jsx("path", { d: "m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z" }),
          /* @__PURE__ */ jsx("path", { d: "m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z" }),
          /* @__PURE__ */ jsx("path", { d: "m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z" }),
          /* @__PURE__ */ jsx("path", { d: "m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z" })
        ] }),
        /* @__PURE__ */ jsxs("g", { fill: "#d80027", children: [
          /* @__PURE__ */ jsx("path", { d: "m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z" }),
          /* @__PURE__ */ jsx("path", { d: "m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z" }),
          /* @__PURE__ */ jsx("path", { d: "m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z" }),
          /* @__PURE__ */ jsx("path", { d: "m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z" }),
          /* @__PURE__ */ jsx("path", { d: "m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z" })
        ] }),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {}),
        /* @__PURE__ */ jsx("g", {})
      ]
    }
  );
}

const $$Astro$2 = createAstro("https://carlospulido.netlify.app");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  const buttonTransition = "transition transform duration-100 ease-in-out delay-50  hover:text-slate-950 hover:scale-125 hover:font-semibold dark:text-slate-300";
  const primaryNavItems = [
    {
      title: translateLabels("nav.home"),
      url: `/${currentLang}/${translateLabels("home.url")}`,
      class: buttonTransition
    },
    {
      title: translateLabels("nav.projects"),
      url: `/${currentLang}/${translateLabels("projects.url")}`,
      class: buttonTransition
    },
    {
      title: translateLabels("nav.about"),
      url: `/${currentLang}/${translateLabels("about.url")}`,
      class: buttonTransition
    },
    {
      title: translateLabels("nav.skills"),
      url: `/${currentLang}/${translateLabels("skills.url")}`,
      class: buttonTransition
    }
  ];
  const secondaryNavItems = [
    {
      logo: SpainIcon,
      url: "/es/",
      label: translateLabels("nav.aria.changeEsLanguage")
    },
    {
      logo: UnitedKingdomIcon,
      url: "/en/",
      label: translateLabels("nav.aria.changeEnlanguage")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top:0 w-full z-20 nav-links flex-wrap gap-x-8 flex flex-col align-center justify-center text-slate-600 dark:bg-neutral-900 bg-white border-2 dark:border-0 md:w-full md:h-auto md:mx-auto desktop:w-8/12 desktop:self-center desktop:rounded-b-xl desktop:border-transparent"> <div class="divide-y-2 divide-gray-500 dark:divide-y-2 dark:divide-slate-100/40"> <div class="flex justify-evenly items-center text-xs py-2 px-2"> ${primaryNavItems.map((link) => renderTemplate`<a${addAttribute(`tablet:text-base ${link.class}`, "class")}${addAttribute(link.url, "href")}> ${link.title} </a>`)} </div> <div class="flex justify-end items-center gap-x-2 pr-6 py-2"> ${secondaryNavItems.map((link) => renderTemplate`<a class="flex gap-x-1 items-center transition duration-150 ease-in-out hover:font-bold hover:scale-110"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")}> <span class="text-xs dark:text-white/80"> ${link.url === "/en/" ? "EN" : "ES"} </span> ${renderTemplate`${renderComponent($$result, "link.logo", link.logo, {})}`} </a>`)} ${renderComponent($$result, "ThemeIcons", ThemeIcons, { "currentLang": currentLang, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/carlosfrontend/repos/portfolio/src/components/ThemeIcons", "client:component-export": "default" })} </div> </div> </nav>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("https://carlospulido.netlify.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/carlosfrontend/repos/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLang = Astro2.currentLocale || "es";
  const { title, description } = Astro2.props;
  return renderTemplate`<html${addAttribute(currentLang, "lang")}> <head><link rel="sitemap" href="/sitemap-index.xml"><meta charset="UTF-8"><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "/home/carlosfrontend/repos/portfolio/src/layouts/Layout.astro", "self");

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://carlospulido.netlify.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/en/project-1-todolist-app.mdx": () => import('./project-1-todolist-app_UGWrbIV6.mjs'),"/src/content/projects/en/project-2-memory-game.mdx": () => import('./project-2-memory-game_D-6z_Y-d.mjs'),"/src/content/projects/en/project-3-battleship.mdx": () => import('./project-3-battleship_BT4jCIK9.mjs'),"/src/content/projects/en/project-4-home-page.mdx": () => import('./project-4-home-page_Cu8Tea6p.mjs'),"/src/content/projects/en/project-5-tic-tac-toe.mdx": () => import('./project-5-tic-tac-toe_DswbQqGH.mjs'),"/src/content/projects/en/project-6-gif-generator.mdx": () => import('./project-6-gif-generator_B_F2Q2Uq.mjs'),"/src/content/projects/en/project-7-weather-app.mdx": () => import('./project-7-weather-app_DP-n4V4P.mjs'),"/src/content/projects/es/project-1-todolist-app.mdx": () => import('./project-1-todolist-app_D1B9gv7B.mjs'),"/src/content/projects/es/project-2-memory-game.mdx": () => import('./project-2-memory-game_DYUg7ysa.mjs'),"/src/content/projects/es/project-3-battleship.mdx": () => import('./project-3-battleship_BjzVEAe4.mjs'),"/src/content/projects/es/project-4-home-page.mdx": () => import('./project-4-home-page_oAf8prYx.mjs'),"/src/content/projects/es/project-5-tic-tac-toe.mdx": () => import('./project-5-tic-tac-toe_CKEvjlPZ.mjs'),"/src/content/projects/es/project-6-gif-generator.mdx": () => import('./project-6-gif-generator_BDy_wJlP.mjs'),"/src/content/projects/es/project-7-weather-app.mdx": () => import('./project-7-weather-app_CHaqVw9a.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects":{"type":"content","entries":{"en/project-1-todolist-app":"/src/content/projects/en/project-1-todolist-app.mdx","en/project-2-memory-game":"/src/content/projects/en/project-2-memory-game.mdx","en/project-3-battleship":"/src/content/projects/en/project-3-battleship.mdx","en/project-4-home-page":"/src/content/projects/en/project-4-home-page.mdx","en/project-5-tic-tac-toe":"/src/content/projects/en/project-5-tic-tac-toe.mdx","en/project-6-gif-generator":"/src/content/projects/en/project-6-gif-generator.mdx","en/project-7-weather-app":"/src/content/projects/en/project-7-weather-app.mdx","es/project-1-todolist-app":"/src/content/projects/es/project-1-todolist-app.mdx","es/project-2-memory-game":"/src/content/projects/es/project-2-memory-game.mdx","es/project-3-battleship":"/src/content/projects/es/project-3-battleship.mdx","es/project-4-home-page":"/src/content/projects/es/project-4-home-page.mdx","es/project-5-tic-tac-toe":"/src/content/projects/es/project-5-tic-tac-toe.mdx","es/project-6-gif-generator":"/src/content/projects/es/project-6-gif-generator.mdx","es/project-7-weather-app":"/src/content/projects/es/project-7-weather-app.mdx"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/en/project-1-todolist-app.mdx": () => import('./project-1-todolist-app_yUCAKfjT.mjs'),"/src/content/projects/en/project-2-memory-game.mdx": () => import('./project-2-memory-game_Bvmc9FSi.mjs'),"/src/content/projects/en/project-3-battleship.mdx": () => import('./project-3-battleship_CqQvBzSx.mjs'),"/src/content/projects/en/project-4-home-page.mdx": () => import('./project-4-home-page_3Bp-bw73.mjs'),"/src/content/projects/en/project-5-tic-tac-toe.mdx": () => import('./project-5-tic-tac-toe_DJYj2OJw.mjs'),"/src/content/projects/en/project-6-gif-generator.mdx": () => import('./project-6-gif-generator_CbO7U8oR.mjs'),"/src/content/projects/en/project-7-weather-app.mdx": () => import('./project-7-weather-app_CHRv1mVV.mjs'),"/src/content/projects/es/project-1-todolist-app.mdx": () => import('./project-1-todolist-app_CEDGIpZI.mjs'),"/src/content/projects/es/project-2-memory-game.mdx": () => import('./project-2-memory-game_D-_cQ-1r.mjs'),"/src/content/projects/es/project-3-battleship.mdx": () => import('./project-3-battleship_CiHLsIB0.mjs'),"/src/content/projects/es/project-4-home-page.mdx": () => import('./project-4-home-page_CTSVsdFk.mjs'),"/src/content/projects/es/project-5-tic-tac-toe.mdx": () => import('./project-5-tic-tac-toe_C-FoT3Eu.mjs'),"/src/content/projects/es/project-6-gif-generator.mdx": () => import('./project-6-gif-generator_YeDV4E-d.mjs'),"/src/content/projects/es/project-7-weather-app.mdx": () => import('./project-7-weather-app_yXEUKLR9.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { $$SectionContainer as $, $$CardProject as a, $$Layout as b, getCollection as g, useTranslations as u };
