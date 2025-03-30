import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, $ as $$Image } from './_astro_assets_CodrhjZF.mjs';
import { A as AstroError, U as UnknownContentCollectionError, a as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, b as renderTemplate, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent, m as maybeRenderHead, e as renderSlot, c as createAstro, d as addAttribute, s as spreadAttributes, i as createTransitionScope, j as renderScript, k as renderHead } from './astro/server_BqA62yoT.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import '@astrojs/internal-helpers/remote';
import 'clsx';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
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
      const data = await import('./_astro_data-layer-content_CI7rtRrr.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
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
      const { default: imageAssetMap } = await import('./content-assets_DC_1Wgoo.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
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
        )} does not exist or is empty. Please check your content config file for errors.`
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
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DC_1Wgoo.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_CodrhjZF.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
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
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_DWpa_S39.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
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

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
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

const $$DescriptionProse = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prose-p:text-stone-700 dark:prose-p:text-white font-light prose-p:text-pretty text-xl "> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/DescriptionProse.astro", void 0);

const labels = {
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.language": "Idioma",
    "nav.aria.changeLanguage": "Cambiar el idioma",
    "nav.aria.changeEsLanguage": "Cambiar idioma a Español",
    "nav.aria.changeEnLanguage": "Cambiar idioma a Inglés",
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
    "projects.code": "Código",
    "projects.live": "Vista",
    "about.url": "#sobre-mi",
    "skills.url": "#habilidades",
    "hero.greeting": "Hey! 👋, soy",
    "hero.profession": "Desarrollador Front-End",
    "hero.location": "de Madrid, España.",
    "hero.haveSpent": "LLevo",
    "hero.timeOfStudy": "más de un año estudiando y programando",
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
    "about.learn": "aprender constantemente.",
    "about.start": "Empecé a programar allá por el año 2016 cuando todavía usabamos la palabra reservada",
    "about-var": "var",
    "about.define": "para definir variables en",
    "about.javascript": "Javascript",
    "about.health": "Recientemente vengo del mundo administrativo en el sector sanitario.",
    "about.want": "Quiero dar un",
    "about.trajectory": "salto en mi trayectoria profesional",
    "about.to": "hacia el",
    "about.frontend": "desarrollo frontend, ",
    "about.passion": " ya que es lo que realmente me apasiona.",
    "about.mountains": "En mi  tiempo libre me gusta salir a la montaña 🥾🌄🌲, ya que",
    "about.hiking": "me encanta hacer senderismo",
    "about.disconnect": "para desconectar y reconectar 🎒🏕️📸 ."
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.language": "Language",
    "nav.aria.changeLanguage": "Change the language",
    "nav.aria.changeEsLanguage": "Change to Spanish language",
    "nav.aria.changeEnLanguage": "Change to English language",
    "nav.aria.changeTheme": "Change the color theme",
    "header.title": "Available to work",
    "home.title": "Home",
    "projects.title": "Projects",
    "about.title": "About",
    "skills.title": "Skills",
    "home.id": "home",
    "projects.id": "projects",
    "projects.code": "Code",
    "projects.live": "Live",
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
    "hero.location": "from Madrid, Spain.",
    "hero.haveSpent": "I have spent",
    "hero.timeOfStudy": "more than a year studying and programming",
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
    "about.learn": "constantly learn.",
    "about.start": "I started programming back in 2016 when we still use the reserved word",
    "about-var": "var",
    "about.define": "to define variables in",
    "about.javascript": "Javascript",
    "about.health": "I recently came from the administrative world in the healthcare sector.",
    "about.want": "I want to take",
    "about.trajectory": "a leap in my career",
    "about.to": "towards",
    "about.frontend": "frontend development,",
    "about.passion": " since it is what I am really passionate about.",
    "about.mountains": "In my free time I like to go out to the mountains 🥾🌄🌲, since",
    "about.hiking": " I love hiking",
    "about.disconnect": "to disconnect and reconnect. 🎒🏕️📸 ."
  }
};

const defaultLang = "es";
function useTranslations(lang) {
  return function translate(key) {
    return labels[lang][key] || labels[defaultLang][key];
  };
}

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$8 = createAstro("https://carlospulido.netlify.app");
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardProject;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
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
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<article id="project" class="w-full pb-14 border-solid prose-violet"> ', ' <div class="flex justify-start pt-2 pb-4 gap-x-3"> <a', ' class="dark:bg-lime-400 bg-slate-700 dark:hover:ring-white dark:hover:ring-2 hover:ring-indigo-900 hover:ring-2 rounded flex gap-1 px-3 py-2 transition duration-150 ease-in-out hover:transform hover:scale-110"', ' target="_blank" rel="noreferrer noopener"><svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-indigo-300 dark:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg><span class="dark:text-black">', "</span></a> <a", ' class="dark:bg-lime-400 bg-slate-700 dark:hover:ring-white dark:hover:ring-2 hover:ring-indigo-900 hover:ring-2 rounded flex gap-1 px-3 py-2 transition duration-150 ease-in-out hover:transform hover:scale-110"', ' target="_blank" rel="noreferrer noopener"><svg class="size-6 text-indigo-300 dark:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9"></path><path d="M7 20l10 0"></path><path d="M9 16l0 4"></path><path d="M15 16l0 4"></path><path d="M17 4h4v4"></path><path d="M16 9l5 -5"></path></svg><span class="dark:text-black">', '</span></a> </div> <h3 class="text-2xl pb-2 dark:text-white text-slate-700 font-bold"> ', ' </h3> <div class="flex flex-wrap gap-x-4 py-3"> ', " </div> ", ` </article> <script type="module">
  // CardProject transitions
  const projects = [...document.querySelectorAll('#project')];

  const effectIn = [
    'transition-all',
    'duration-150',
    'delay-50',
    'ease-in',
    'opacity-90',
    'bg-black',
    'transform',
    'scale-105',
    'rotate-1',
    'backward'
  ];

  const effectOut = [
    'transition-all',
    'duration-300',
    'delay-0',
    'ease-out',
    'opacity-100',
    'bg-black',
    'transform',
    'scale-100',
    'rotate-0',
    'forward'
  ];

  function handleEnter(e) {
    const image = e.target.firstElementChild;
    image.classList.add(...effectIn);
    image.classList.remove(...effectOut);
    image.classList.add('dark:shadow-white/30');
    image.classList.add('shadow-slate-900/40');
  }

  function handleLeave(e) {
    const image = e.target.firstElementChild;
    image.classList.remove(...effectIn);
    image.classList.add(...effectOut);
    image.classList.remove('dark:shadow-white/30');
    image.classList.remove('shadow-slate-900/40');
  }

  projects.forEach((project) =>
    project.addEventListener('mouseenter', handleEnter)
  );

  projects.forEach((project) =>
    project.addEventListener('mouseleave', handleLeave)
  );
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "id": "project-image", "class": "tablet:w-[380px] rounded-md shadow-md mb-4", "height": "450", "width": "800", "loading": loading, "src": image, "alt": imageAlt }), addAttribute(codeLink, "href"), addAttribute(translateLabels("projects.code"), "aria-label"), translateLabels("projects.code"), addAttribute(liveLink, "href"), addAttribute(translateLabels("projects.live"), "aria-label"), translateLabels("projects.live"), title, tags.map((tag) => renderTemplate`<div class="min-w-18 min-h-7 dark:bg-black dark:text-sky-50 bg-slate-700 gap-x-1 px-2 py-1 rounded-sm flex justify-center items-center my-1 text-sm font-semibold mb-4"> <i${addAttribute(`${tag["className"]}`, "class")}></i> ${tag["name"]} </div>`), renderComponent($$result, "DescriptionProse", $$DescriptionProse, {}, { "default": ($$result2) => renderTemplate` <p> ${description} </p> ` }));
}, "/home/carlosfrontend/repos/portfolio/src/components/CardProject.astro", void 0);

const $$Astro$7 = createAstro("https://carlospulido.netlify.app");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { id, title, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(title, "title")}${addAttribute(`w-full h-auto relative py-6 px-12 tablet:w-8/12 desktop:w-8/12 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/SectionContainer.astro", void 0);

const $$Astro$6 = createAstro("https://carlospulido.netlify.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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

const LanguageSelector = ({ currentLang }) => {
  const translateLabels = useTranslations(currentLang);
  function handleBigSelector(e) {
    e.stopPropagation();
    const themesMenu = document.getElementById("themes-menu");
    const dropDownDefault = document.querySelector("#dropdownDefaultButton");
    const dropdownMenu = document.querySelector("#dropdown");
    if (e.currentTarget === dropDownDefault) {
      themesMenu.classList.remove("open");
      dropdownMenu.classList.toggle("visible");
    }
  }
  function handleSmallSelector(e) {
    e.stopPropagation();
    const themesMenu = document.getElementById("themes-menu");
    const dropDownDefault = document.querySelector(
      "#dropdownDefaultButtonSmartphone"
    );
    const dropdownMenu = document.querySelector("#dropdownSmartphone");
    if (e.currentTarget === dropDownDefault) {
      themesMenu.classList.remove("open");
      dropdownMenu.classList.toggle("visible");
    }
  }
  return /* @__PURE__ */ jsxs("div", { id: "dropdownContainer", className: "relative inline-block", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        "transition:persist": "true",
        title: translateLabels("nav.aria.changeLanguage"),
        onClick: handleBigSelector,
        id: "dropdownDefaultButton",
        className: "w-30 text-black bg-white/90 focus:outline-none font-medium text-sm tablet:text-lg px-3 py-1 text-center inline-flex items-center justify-baseline dark:bg-neutral-900 dark:text-white/80",
        type: "button",
        children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
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
                /* @__PURE__ */ jsx("path", { d: "M4 5h7" }),
                /* @__PURE__ */ jsx("path", { d: "M9 3v2c0 4.418 -2.239 8 -5 8" }),
                /* @__PURE__ */ jsx("path", { d: "M5 9c0 2.144 2.952 3.908 6.7 4" }),
                /* @__PURE__ */ jsx("path", { d: "M12 20l4 -9l4 9" }),
                /* @__PURE__ */ jsx("path", { d: "M19.1 18h-6.2" })
              ]
            }
          ),
          translateLabels("nav.language"),
          " ",
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-2.5 h-2.5 ms-3",
              "aria-hidden": "true",
              fill: "none",
              viewBox: "0 0 10 6",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "m1 1 4 4 4-4"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        "transition:persist": "true",
        onClick: handleSmallSelector,
        id: "dropdownDefaultButtonSmartphone",
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
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
              /* @__PURE__ */ jsx("path", { d: "M4 5h7" }),
              /* @__PURE__ */ jsx("path", { d: "M9 3v2c0 4.418 -2.239 8 -5 8" }),
              /* @__PURE__ */ jsx("path", { d: "M5 9c0 2.144 2.952 3.908 6.7 4" }),
              /* @__PURE__ */ jsx("path", { d: "M12 20l4 -9l4 9" }),
              /* @__PURE__ */ jsx("path", { d: "M19.1 18h-6.2" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "dropdown",
        "transition:persist": "true",
        className: "z-10 hidden rounded-md  bg-white/90 top-4 w-full shadow-md dark:bg-gray-700 border-gray-500/20 border-[1.5px]",
        children: /* @__PURE__ */ jsxs(
          "ul",
          {
            className: "rounded-md p-1 w-full dark:bg-neutral-900 dark:text-white/90 text-sm text-black",
            "aria-labelledby": "dropdownDefaultButton",
            children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/es/",
                  className: "hover:bg-neutral-400/40 hover:text-black block px-4 py-2 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm",
                  children: currentLang === "es" ? "Español" : "Spanish"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/en/",
                  className: "hover:bg-neutral-400/40 hover:text-black block px-4 py-2 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm",
                  children: currentLang !== "es" ? "English" : "Inglés"
                }
              ) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "dropdownSmartphone",
        "transition:persist": "true",
        className: "z-10 hidden bg-white top-4 right-0 w-[110px] dark:bg-gray-700 rounded-md",
        children: /* @__PURE__ */ jsxs(
          "ul",
          {
            className: " py-0 w-full dark:bg-neutral-900 dark:text-white/90 border-gray-500/20 border-[1.5px] text-sm text-gray-900 rounded-md",
            "aria-labelledby": "dropdownDefaultButton",
            children: [
              /* @__PURE__ */ jsx("li", { className: "p-1", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/es/",
                  className: "hover:bg-gray-500/20 hover:text-black block px-4 py-1 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm",
                  children: currentLang === "es" ? "Español" : "Spanish"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { className: "p-1", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/en/",
                  className: "hover:bg-gray-500/20 hover:text-black block px-4 py-1 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm",
                  children: currentLang !== "es" ? "English" : "Inglés"
                }
              ) })
            ]
          }
        )
      }
    )
  ] });
};

const $$Astro$5 = createAstro("https://carlospulido.netlify.app");
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/icons/Sun.astro", void 0);

const $$Astro$4 = createAstro("https://carlospulido.netlify.app");
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/icons/Moon.astro", void 0);

const $$Astro$3 = createAstro("https://carlospulido.netlify.app");
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/icons/System.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  let THEMES = ["Claro", "Oscuro", "Sistema"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-neutral-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', '> <ul class="theme-menu-items" data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  let remove = null;\n  const matchMediaResult = window.matchMedia("(prefers-color-scheme: dark)");\n  const themesMenu = document.getElementById("themes-menu");\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system";\n    }\n\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  };\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0";\n    });\n  };\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove();\n    }\n    matchMediaResult.addEventListener("change", updateTheme);\n    remove = () => {\n      matchMediaResult.removeEventListener("change", updateTheme);\n    };\n\n    const themePreference = getThemePreference();\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMediaResult.matches);\n\n    updateIcon(themePreference);\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n  };\n\n  updateTheme();\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"));\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation();\n    const currentLang = document.documentElement.getAttribute("lang");\n    const themesMenuOptions = document.querySelectorAll(".themes-menu-option");\n    for (let i = 0; i <= 2; i++) {\n      if (currentLang === "en") {\n        const THEMES = ["Light", "Dark", "System"];\n        themesMenuOptions[i].textContent = THEMES[i];\n      } else {\n        const THEMES = ["Claro", "Oscuro", "Sistema"];\n        themesMenuOptions[i].textContent = THEMES[i];\n      }\n    }\n    const isClosed = !themesMenu.classList.contains("open");\n    themesMenu.classList[isClosed ? "add" : "remove"]("open");\n    if (themesMenu.classList.contains("open")) {\n      document.querySelector("#dropdown").classList.remove("visible");\n      document.querySelector("#dropdownSmartphone").classList.remove("visible");\n    }\n  });\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      const currentLang = document.documentElement.getAttribute("lang");\n      let option = e.target.textContent;\n\n      if (currentLang === "es" && option === "Claro") {\n        option = "light";\n        localStorage.setItem("theme", option);\n        updateTheme();\n      } else if (currentLang === "es" && option === "Oscuro") {\n        option = "dark";\n        localStorage.setItem("theme", option);\n        updateTheme();\n      } else if (currentLang === "es" && option === "Sistema") {\n        option = "system";\n        localStorage.setItem("theme", option);\n      }\n\n      if (currentLang !== "es") {\n        localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());\n        updateTheme();\n      }\n    });\n  });\n\n  document.addEventListener("astro:after-swap", () => {\n    updateTheme();\n    window.scrollTo({ left: 0, top: 0, behavior: "instant" });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/carlosfrontend/repos/portfolio/src/components/ThemeToggle.astro", "self");

const $$Astro$2 = createAstro("https://carlospulido.netlify.app");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLang = Astro2.currentLocale || "es";
  const translateLabels = useTranslations(
    currentLang
  );
  const buttonTransition = "transition transform duration-100 ease-in-out delay-50  hover:text-slate-950 hover:font-medium hover:scale-115 dark:text-white/80 dark:hover:text-white dark:text-white text-[15px] text-xs tablet:text-lg";
  const primaryNavItems = [
    {
      title: translateLabels("nav.home"),
      url: `/${currentLang}/${translateLabels("home.anchor")}`,
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
  return renderTemplate`${maybeRenderHead()}<nav class="fixed h-14 w-screen top:0 z-20 nav-links flex-wrap gap-x-8 flex flex-col align-center justify-center dark:text-white text-slate-600 dark:bg-[#121212f0] bg-white/95 tablet:w-screen tablet:h-auto tablet:mx-auto desktop:w-8/12 desktop:self-center desktop:rounded-b-xl desktop:border-transparent"> <div class="flex justify-evenly items-center text-xs py-2 px-2"> ${primaryNavItems.map((link) => renderTemplate`<a${addAttribute(`${link.class}`, "class")}${addAttribute(link.url, "href")}> ${link.title} </a>`)} ${renderComponent($$result, "LanguageSelector", LanguageSelector, { "currentLang": currentLang, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/carlosfrontend/repos/portfolio/src/components/LanguageSelector", "client:component-export": "default" })} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </nav>`;
}, "/home/carlosfrontend/repos/portfolio/src/components/Navigation.astro", void 0);

const $$Astro$1 = createAstro("https://carlospulido.netlify.app");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/carlosfrontend/repos/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/carlosfrontend/repos/portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://carlospulido.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLang = Astro2.currentLocale || "es";
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><link rel="sitemap" href="/sitemap-index.xml"><meta charset="UTF-8"><meta name="title"', '><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", "", "</head> <body> ", " ", " ", '  </body> <script>\n  // Close the language selector dropdown when the window is clicked in other place\n  window.addEventListener("click", (e) => {\n    const dropdownContainer = document.querySelector("#dropdownDefaultButton");\n    const dropdown = document.querySelector("#dropdown");\n    if (!dropdownContainer.contains(e.target)) {\n      dropdown.classList.remove("visible");\n    }\n  });\n\n  window.addEventListener("click", (e) => {\n    const dropdownSmartphone = document.querySelector("#dropdownSmartphone");\n    if (!dropdownContainer.contains(e.target)) {\n      dropdownSmartphone.classList.remove("visible");\n    }\n  });\n<\/script></html>'])), addAttribute(currentLang, "lang"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/carlosfrontend/repos/portfolio/src/layouts/Layout.astro", "self");

const sortProjects = (projects) => {
  console.log(projects);
  return projects.sort((a, b) => a.data.pagePosition - b.data.pagePosition);
};

export { $$Layout as $, $$SectionContainer as a, $$CardProject as b, getCollection as g, sortProjects as s, useTranslations as u };
