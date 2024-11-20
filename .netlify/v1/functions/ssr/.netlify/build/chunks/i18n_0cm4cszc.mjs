import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderSlot } from './astro/server_CzuhdN41.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { u as useTranslations } from './_astro_content_BLSSBTte.mjs';
import 'clsx';
import { appendForwardSlash, joinPaths } from '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import { A as AstroError, f as MissingLocale } from './astro/assets-service_CaGlhVAO.mjs';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    return appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    return joinPaths(...pathsToJoin);
  }
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}
function toFallbackType(routing) {
  if (routing === "manual") {
    return "rewrite";
  }
  return routing.fallbackType;
}

function ResumeIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
        /* @__PURE__ */ jsx("path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" }),
        /* @__PURE__ */ jsx("path", { d: "M9 9l1 0" }),
        /* @__PURE__ */ jsx("path", { d: "M9 13l6 0" }),
        /* @__PURE__ */ jsx("path", { d: "M9 17l6 0" })
      ]
    }
  );
}

function EmailIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" }),
        /* @__PURE__ */ jsx("path", { d: "M3 7l9 6l9 -6" }),
        /* @__PURE__ */ jsx("path", { d: "M16 22l5 -5" }),
        /* @__PURE__ */ jsx("path", { d: "M21 21.5v-4.5h-4.5" })
      ]
    }
  );
}

const $$Astro$1 = createAstro("https://carlospulido.netlify.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  return renderTemplate`${maybeRenderHead()}<h1 class="w-full text-4xl dark:text-4xl text-slate-800 dark:text-slate-300 font-bold"> ${translateLabels("hero.greeting")} <strong class="bg-clip-text text-transparent bg-gradient-to-r dark:from-sky-400 dark:to-sky-600 from-slate-800 to-slate-700 text-4xl font-bold">Carlos Pulido</strong> </h1> <h2 class="w-full mx-auto text-pretty font-normal dark:text-slate-300 text-gray-800 py-4 text-xl"> <strong class="dark:text-yellow-200 text-slate-700 font-bold">${translateLabels("hero.profession")}</strong> ${translateLabels("hero.location")} </h2> <p class="w-full mx-auto dark:text-slate-300 text-gray-800 py-1 text-xl"> ${translateLabels("hero.timeOfStudy")} <strong class="dark:text-yellow-200/70 text-slate-700 font-bold">${translateLabels("hero.studying")}</strong> ${translateLabels("hero.and")} <strong class="dark:text-yellow-200/70 text-slate-700 font-bold">${translateLabels("hero.programming")}</strong> ${translateLabels("hero.thanks")} <a class="text-slate-800/80 border-b-2 dark:text-white/80 dark:hover:text-white/90 dark:border-b-white/80 border-b-slate-800/80 hover:border-b-slate-900 dark:hover:border-b-white/90 hover:text-slate-900" href="https://www.theodinproject.com/" rel="noopener noreferrer" target="_blank">
The Odin Project.</a> </p> <p class="w-full mx-auto dark:text-slate-300 text-gray-800 py-1 text-xl"> ${translateLabels("hero.optionsText")} </p> <div class="flex w-full flex-wrap tablet:grid tablet:grid-cols-2 tablet:place-items-start tablet:w-[400px] tablet:gap-6 desktop:w-[400px] justify-start gap-4 pt-6"> <a class="flex w-[200px] h-10 items-center justify-center dark:bg-slate-800 border-2 dark:border-sky-400 dark:text-slate-300 bg-slate-700 text-sm gap-2 rounded-md"${addAttribute(currentLang === "es" ? "/resume_es.pdf" : "/resume_en.pdf", "href")} target="_blank"><span>${renderComponent($$result, "ResumeIcon", ResumeIcon, {})}</span>${translateLabels("hero.cvButton")}</a> <a class="flex w-[200px] h-10 items-center justify-center dark:bg-slate-800 border-2 dark:border-amber-400 dark:text-slate-300 bg-slate-700 text-sm gap-2 rounded-md" href="mailto:carlosfrontend@hotmail.com">${renderComponent($$result, "EmailIcon", EmailIcon, {})}${translateLabels("hero.sendEmail")}</a> <div id="email" class="flex w-[200px] text-center font-medium h-10 items-center justify-center dark:bg-slate-800 dark:text-slate-300 bg-slate-700 text-slate-100 border-2 border-slate-800 dark:border-slate-300 text-[.8rem] rounded-md" aria-describedby="#copyEmailButton">carlosfrontend@hotmail.com
</div> ${renderComponent($$result, "ButtonToolTip", null, { "currentLang": Astro2.currentLocale || "es", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/carlosfrontend/repos/portfolio/src/components/ButtonToolTip.jsx", "client:component-export": "default" })} </div>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Hero.astro", void 0);

const $$ProjectsIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/ProjectsIcon.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-4 place-items-center gap-3 tablet:grid-cols-4 tablet:gap-4 tablet:w-full/12 desktop:w-6/12 desktop:h-4/6 tablet:place-items-center rounded-md dark:bg-neutral-800/30 bg-slate-800 py-4 px-3 tablet:w-8/12"> <svg class="size-10" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#f47421"></circle><circle cx="50" cy="50" r="21.8" fill="none" stroke="#fff" stroke-width="8.6"></circle><g id="a"><circle cx="19.4" cy="50" r="8.4" fill="#f47421"></circle><path stroke="#f47421" stroke-width="3.2" d="M67 50h10"></path><circle cx="19.4" cy="50" r="6" fill="#fff"></circle></g><use xlink:href="#a" transform="rotate(120 50 50)"></use><use xlink:href="#a" transform="rotate(240 50 50)"></use></svg> <svg class="size-10" viewBox="0 0 256 254" preserveAspectRatio="xMidYMid"><defs><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path id="a" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"></path></defs><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#0065A9" d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z"></path><path fill="#007ACC" d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z"></path><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z"></path><path fill="url(#c)" fill-opacity=".25" d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z"></path></svg> ${renderComponent($$result, "Image", $$Image, { "width": "40", "height": "40", "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", "alt": "Vite logo" })} <svg class="size-10" viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg> <svg class="size-10" viewBox="0 0 452 520"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg> <svg viewBox="0 0 256 154" class="size-10" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg> <svg class="size-10" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg> <svg class="size-10" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg> <svg class="size-10" viewBox="0 0 256 250" fill="#fff" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg> <svg class="size-10" viewBox="0 0 256 228" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg> ${renderComponent($$result, "Image", $$Image, { "width": "40", "height": "40", "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg", "alt": "Webpack logo" })} <svg class="size-10" preserveAspectRatio="xMidYMid" viewBox="0 0 256 283"> <path d="M240 139a26 26 0 0 0-29-26L247 6H93l36 107a26 26 0 0 0-28 26c0 12 8 22 19 25a115 115 0 0 1-58 49c-16-8-23-27-17-43l3-5a26 26 0 1 0-21-4c-7 14-16 30-19 48-4 21 0 44 18 57 44 30 91-18 140-31 18-4 38-3 54-13 12-6 20-18 22-31 2-12-1-25-9-35 4-5 7-11 7-17" fill="#99425B"></path> <path d="M236 190c-2 11-9 21-19 27-10 5-21 7-33 9l-19 3c-17 4-34 12-50 20-32 16-59 30-85 12-19-13-18-38-16-51 2-12 8-24 13-35l3-5 8 2c-5 18 3 37 21 47l3 1 2-1c15-5 28-13 39-24 8-7 14-15 20-24a33 33 0 0 0 37-28h21a33 33 0 0 0 51 23c4 7 5 16 4 24ZM42 119a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm66 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Zm83-24c-5 4-8 10-9 15h-23c-1-6-5-11-10-15l21-42 21 42ZM102 13h136l-32 94-4 1-32-64-32 64-4-1-32-94Zm131 126a20 20 0 0 1-20 20 20 20 0 1 1 20-20Zm13 0c0-16-12-29-27-32L256 0H84l37 107a33 33 0 0 0-11 60 110 110 0 0 1-47 39c-12-8-17-21-12-33l1-1 1-2a33 33 0 1 0-34-8l-4 8c-5 11-11 24-14 38-4 28 3 51 22 63 11 8 22 11 34 11 21 0 43-11 64-21 15-8 31-16 47-19l18-4c13-1 26-3 37-10a51 51 0 0 0 18-72c3-5 5-11 5-17Z" fill="#FFF"></path> </svg> <svg class="size-10" viewBox="0 0 256 366" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg> ${renderComponent($$result, "Image", $$Image, { "width": "40", "height": "40", "src": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg", "alt": "EsLint logo" })} <svg class="size-10" viewBox="0 0 128 128"><path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z"></path></svg> <svg class="size-10" viewBox="0 0 210 210"><g fill="none" fill-rule="evenodd"><g transform="translate(0 200)"><rect width="60" height="10" x="150" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="70" height="10" x="70" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="60" height="10" fill="#EA5E5E" rx="5"></rect></g><g transform="translate(0 180)"><rect width="50" height="10" x="160" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="20" height="10" x="130" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="50" height="10" x="70" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="20" height="10" x="40" fill="#F7B93E" rx="5"></rect><rect width="30" height="10" fill="#56B3B4" rx="5"></rect></g><g transform="translate(0 160)"><rect width="100" height="10" x="110" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="30" height="10" x="70" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="60" height="10" fill="#BF85BF" rx="5"></rect></g><g transform="translate(0 140)"><rect width="30" height="10" x="180" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="30" height="10" x="140" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="100" height="10" x="30" fill="#F7B93E" rx="5"></rect><rect width="20" height="10" fill="#BF85BF" rx="5"></rect></g><g transform="translate(0 120)"><rect width="40" height="10" x="170" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="40" height="10" x="120" fill="#BF85BF" rx="5"></rect><rect width="50" height="10" x="60" fill="#EA5E5E" rx="5"></rect><rect width="50" height="10" fill="#56B3B4" rx="5"></rect></g><g transform="translate(0 100)"><rect width="30" height="10" x="180" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="90" height="10" x="80" fill="#56B3B4" rx="5"></rect><rect width="40" height="10" x="30" fill="#F7B93E" rx="5"></rect><rect width="20" height="10" fill="#EA5E5E" rx="5"></rect></g><g transform="translate(0 80)"><rect width="20" height="10" x="190" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="60" height="10" x="120" fill="#F7B93E" rx="5"></rect><rect width="40" height="10" x="70" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="60" height="10" fill="#BF85BF" rx="5"></rect></g><g transform="translate(0 60)"><rect width="20" height="10" x="190" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="60" height="10" x="120" fill="#EA5E5E" rx="5"></rect><rect width="40" height="10" x="70" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="20" height="10" x="40" fill="#56B3B4" rx="5"></rect><rect width="30" height="10" fill="#F7B93E" rx="5"></rect></g><g transform="translate(0 40)"><rect width="30" height="10" x="180" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="20" height="10" x="150" fill="#56B3B4" rx="5"></rect><rect width="50" height="10" x="90" fill="#BF85BF" rx="5"></rect><rect width="80" height="10" fill="#56B3B4" rx="5"></rect></g><g transform="translate(0 20)"><rect width="40" height="10" x="170" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="110" height="10" x="50" fill="#F7B93E" rx="5"></rect><rect width="40" height="10" fill="#EA5E5E" rx="5"></rect></g><rect width="70" height="10" x="140" fill="#4D616E" opacity=".5" rx="5"></rect><rect width="130" height="10" fill="#56B3B4" rx="5"></rect></g></svg> </article>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Skills.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-xs text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Badge.astro", void 0);

const meImage = new Proxy({"src":"/_astro/me.DlmcHYeu.webp","width":280,"height":280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/carlosfrontend/repos/portfolio/src/images/me.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(translateLabels("home.id"), "id")} class="relative w-full px-12 pt-24 flex items-center gap-x-4 tablet:w-8/12"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "class": "rounded-full size-11", "src": meImage, "alt": "Carlos Pulido" })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`<a aria-label="Enlace a Linkedin" href="https://www.linkedin.com/in/carlosfrontend/" rel="noopener noreferrer" target="_blank">${translateLabels("header.title")}</a> ` })} </header>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Header.astro", void 0);

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", site: "https://carlospulido.netlify.app", trailingSlash: "ignore", i18n: { defaultLocale: "es", locales: ["es", "en"], routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true, fallbackType: "redirect" } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  domains,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

export { $$ProjectsIcon as $, $$Header as a, $$Hero as b, $$Skills as c, getRelativeLocaleUrl as g };