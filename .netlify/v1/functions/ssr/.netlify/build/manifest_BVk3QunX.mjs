import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_CzuhdN41.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/carlosfrontend/repos/portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"},{"type":"external","src":"/_astro/index.BGhLk201.css"}],"routeData":{"route":"/en/other-projects","isIndex":false,"type":"page","pattern":"^\\/en\\/other-projects\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"other-projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/other-projects.astro","pathname":"/en/other-projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"},{"type":"external","src":"/_astro/index.BGhLk201.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"},{"type":"external","src":"/_astro/index.BGhLk201.css"}],"routeData":{"route":"/es/otros-proyectos","isIndex":false,"type":"page","pattern":"^\\/es\\/otros-proyectos\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"otros-proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/otros-proyectos.astro","pathname":"/es/otros-proyectos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"},{"type":"external","src":"/_astro/index.BGhLk201.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DC6O3eMY.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://carlospulido.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/carlosfrontend/repos/portfolio/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/carlosfrontend/repos/portfolio/src/pages/en/other-projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/carlosfrontend/repos/portfolio/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/carlosfrontend/repos/portfolio/src/pages/es/otros-proyectos.astro",{"propagation":"in-tree","containsHead":true}],["/home/carlosfrontend/repos/portfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/other-projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/otros-proyectos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/en/other-projects@_@astro":"pages/en/other-projects.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/otros-proyectos@_@astro":"pages/es/otros-proyectos.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BVk3QunX.mjs","/home/carlosfrontend/repos/portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-1-todolist-app.mdx?astroContentCollectionEntry=true":"chunks/project-1-todolist-app_UGWrbIV6.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-2-memory-game.mdx?astroContentCollectionEntry=true":"chunks/project-2-memory-game_D-6z_Y-d.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-3-battleship.mdx?astroContentCollectionEntry=true":"chunks/project-3-battleship_BT4jCIK9.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-4-home-page.mdx?astroContentCollectionEntry=true":"chunks/project-4-home-page_Cu8Tea6p.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-5-tic-tac-toe.mdx?astroContentCollectionEntry=true":"chunks/project-5-tic-tac-toe_DswbQqGH.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-6-gif-generator.mdx?astroContentCollectionEntry=true":"chunks/project-6-gif-generator_B_F2Q2Uq.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-7-weather-app.mdx?astroContentCollectionEntry=true":"chunks/project-7-weather-app_DP-n4V4P.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-1-todolist-app.mdx?astroContentCollectionEntry=true":"chunks/project-1-todolist-app_D1B9gv7B.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-2-memory-game.mdx?astroContentCollectionEntry=true":"chunks/project-2-memory-game_DYUg7ysa.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-3-battleship.mdx?astroContentCollectionEntry=true":"chunks/project-3-battleship_BjzVEAe4.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-4-home-page.mdx?astroContentCollectionEntry=true":"chunks/project-4-home-page_oAf8prYx.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-5-tic-tac-toe.mdx?astroContentCollectionEntry=true":"chunks/project-5-tic-tac-toe_CKEvjlPZ.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-6-gif-generator.mdx?astroContentCollectionEntry=true":"chunks/project-6-gif-generator_BDy_wJlP.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-7-weather-app.mdx?astroContentCollectionEntry=true":"chunks/project-7-weather-app_CHaqVw9a.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-1-todolist-app.mdx?astroPropagatedAssets":"chunks/project-1-todolist-app_yUCAKfjT.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-2-memory-game.mdx?astroPropagatedAssets":"chunks/project-2-memory-game_Bvmc9FSi.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-3-battleship.mdx?astroPropagatedAssets":"chunks/project-3-battleship_CqQvBzSx.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-4-home-page.mdx?astroPropagatedAssets":"chunks/project-4-home-page_3Bp-bw73.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-5-tic-tac-toe.mdx?astroPropagatedAssets":"chunks/project-5-tic-tac-toe_DJYj2OJw.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-6-gif-generator.mdx?astroPropagatedAssets":"chunks/project-6-gif-generator_CbO7U8oR.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-7-weather-app.mdx?astroPropagatedAssets":"chunks/project-7-weather-app_CHRv1mVV.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-1-todolist-app.mdx?astroPropagatedAssets":"chunks/project-1-todolist-app_CEDGIpZI.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-2-memory-game.mdx?astroPropagatedAssets":"chunks/project-2-memory-game_D-_cQ-1r.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-3-battleship.mdx?astroPropagatedAssets":"chunks/project-3-battleship_CiHLsIB0.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-4-home-page.mdx?astroPropagatedAssets":"chunks/project-4-home-page_CTSVsdFk.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-5-tic-tac-toe.mdx?astroPropagatedAssets":"chunks/project-5-tic-tac-toe_C-FoT3Eu.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-6-gif-generator.mdx?astroPropagatedAssets":"chunks/project-6-gif-generator_YeDV4E-d.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-7-weather-app.mdx?astroPropagatedAssets":"chunks/project-7-weather-app_yXEUKLR9.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-1-todolist-app.mdx":"chunks/project-1-todolist-app_BYUyfSu_.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-2-memory-game.mdx":"chunks/project-2-memory-game_DrQ8Wofn.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-3-battleship.mdx":"chunks/project-3-battleship_Dcy7Z95L.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-4-home-page.mdx":"chunks/project-4-home-page_BXnvOI3X.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-5-tic-tac-toe.mdx":"chunks/project-5-tic-tac-toe_DYcTVOwJ.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-6-gif-generator.mdx":"chunks/project-6-gif-generator_t-Zc5GGa.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-7-weather-app.mdx":"chunks/project-7-weather-app_Dk-bZsMc.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-1-todolist-app.mdx":"chunks/project-1-todolist-app_C7v4DjF8.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-2-memory-game.mdx":"chunks/project-2-memory-game_BChQjBpM.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-3-battleship.mdx":"chunks/project-3-battleship_D7LP5phT.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-4-home-page.mdx":"chunks/project-4-home-page_o3LieEIZ.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-5-tic-tac-toe.mdx":"chunks/project-5-tic-tac-toe_C4a1aAWI.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-6-gif-generator.mdx":"chunks/project-6-gif-generator_Drp-GMUh.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-7-weather-app.mdx":"chunks/project-7-weather-app_CUw9IEp3.mjs","/home/carlosfrontend/repos/portfolio/src/components/ThemeIcons":"_astro/ThemeIcons.CBzS5jvn.js","/home/carlosfrontend/repos/portfolio/src/components/ButtonToolTip.jsx":"_astro/ButtonToolTip.DAleljtY.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/me.DlmcHYeu.webp","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/devicon.BwTrXM5G.ttf","/_astro/devicon.D0iwJE0M.woff","/_astro/todoList.2H6q4uLX.webp","/_astro/battleship.D3cwQJsm.webp","/_astro/memoryCard.D1w7SDru.webp","/_astro/ticTacToe.CdUnSNP6.webp","/_astro/gifGenerator.C2sP8Ssn.webp","/_astro/homePage.CzKAoEgu.webp","/_astro/weatherApp.Sy7YCfuo.webp","/_astro/devicon.DBhpxM3S.svg","/_astro/index.DC6O3eMY.css","/_astro/index.BGhLk201.css","/favicon.svg","/resume_en.pdf","/resume_es.pdf","/robots.txt","/_astro/ButtonToolTip.DAleljtY.js","/_astro/ThemeIcons.CBzS5jvn.js","/_astro/client.BIGLHmRd.js","/_astro/hoisted.2daoxv0f.js","/_astro/index.DhYZZe0J.js","/_astro/index.EhwktGfT.css","/_astro/utils.BMVrJjQt.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"EymfoflW2woHukL5bhNUhskjdF6ag6txeUNmNTrJbt8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
