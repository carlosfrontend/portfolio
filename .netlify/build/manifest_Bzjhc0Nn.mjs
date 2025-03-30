import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { x as NOOP_MIDDLEWARE_HEADER, y as decodeKey } from './chunks/astro/server_BqA62yoT.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/carlosfrontend/repos/portfolio/","cacheDir":"file:///home/carlosfrontend/repos/portfolio/node_modules/.astro/","outDir":"file:///home/carlosfrontend/repos/portfolio/dist/","srcDir":"file:///home/carlosfrontend/repos/portfolio/src/","publicDir":"file:///home/carlosfrontend/repos/portfolio/public/","buildClientDir":"file:///home/carlosfrontend/repos/portfolio/dist/","buildServerDir":"file:///home/carlosfrontend/repos/portfolio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"},{"type":"external","src":"/_astro/index.CwNyTNHz.css"}],"routeData":{"route":"/en/other-projects","isIndex":false,"type":"page","pattern":"^\\/en\\/other-projects\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"other-projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/other-projects.astro","pathname":"/en/other-projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"},{"type":"external","src":"/_astro/index.CwNyTNHz.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"},{"type":"external","src":"/_astro/index.CwNyTNHz.css"}],"routeData":{"route":"/es/otros-proyectos","isIndex":false,"type":"page","pattern":"^\\/es\\/otros-proyectos\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"otros-proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/otros-proyectos.astro","pathname":"/es/otros-proyectos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"},{"type":"external","src":"/_astro/index.CwNyTNHz.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CvQDmJwx.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://carlospulido.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/pages/en/other-projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/en/other-projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/pages/es/otros-proyectos.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/es/otros-proyectos@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/components/ThemeToggle.astro",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/components/Navigation.astro",{"propagation":"in-tree","containsHead":false}],["/home/carlosfrontend/repos/portfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/en/other-projects@_@astro":"pages/en/other-projects.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/otros-proyectos@_@astro":"pages/es/otros-proyectos.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bzjhc0Nn.mjs","/home/carlosfrontend/repos/portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/carlosfrontend/repos/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ziFPPEMG.mjs","/home/carlosfrontend/repos/portfolio/.astro/content-assets.mjs":"chunks/content-assets_DC_1Wgoo.mjs","/home/carlosfrontend/repos/portfolio/.astro/content-modules.mjs":"chunks/content-modules_DWpa_S39.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CI7rtRrr.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/battleship.mdx?astroPropagatedAssets":"chunks/battleship_DVb3lPTj.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/gif-generator.mdx?astroPropagatedAssets":"chunks/gif-generator_NcYK85i6.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/home-page.mdx?astroPropagatedAssets":"chunks/home-page_BEWsAeiD.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/memory-game.mdx?astroPropagatedAssets":"chunks/memory-game_EMphV9ct.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/shoppingcart.mdx?astroPropagatedAssets":"chunks/shoppingcart_BcmUILGm.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/todolist-app.mdx?astroPropagatedAssets":"chunks/todolist-app_Bw6rCmIe.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/weather-app.mdx?astroPropagatedAssets":"chunks/weather-app_BwXVD80b.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/tic-tac-toe.mdx?astroPropagatedAssets":"chunks/tic-tac-toe_BvC7Y3uo.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/battleship.mdx?astroPropagatedAssets":"chunks/battleship_pYyFOKdy.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/gif-generator.mdx?astroPropagatedAssets":"chunks/gif-generator_CNVgQiVN.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/home-page.mdx?astroPropagatedAssets":"chunks/home-page_CRAiFJRd.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/memory-game.mdx?astroPropagatedAssets":"chunks/memory-game_B4Ug6V2i.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/tic-tac-toe.mdx?astroPropagatedAssets":"chunks/tic-tac-toe_Dmp6mPHW.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/todolist-app.mdx?astroPropagatedAssets":"chunks/todolist-app_BKLhenB9.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/shoppingcart.mdx?astroPropagatedAssets":"chunks/shoppingcart_BHjZWcmt.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/weather-app.mdx?astroPropagatedAssets":"chunks/weather-app_JOJikTdV.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/battleship.mdx":"chunks/battleship_6A-FZ9A2.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/gif-generator.mdx":"chunks/gif-generator_Dx5JLCCE.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/home-page.mdx":"chunks/home-page_8kOuImDn.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/memory-game.mdx":"chunks/memory-game_DSO3ca8s.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/shoppingcart.mdx":"chunks/shoppingcart_BxoLxJO4.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/todolist-app.mdx":"chunks/todolist-app_BeRwvWdJ.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/weather-app.mdx":"chunks/weather-app_BhkvvosG.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/en/tic-tac-toe.mdx":"chunks/tic-tac-toe_FrQAOQDj.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/battleship.mdx":"chunks/battleship_DxDmGNWG.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/gif-generator.mdx":"chunks/gif-generator_CPURn_Up.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/home-page.mdx":"chunks/home-page_CT3_oI3e.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/memory-game.mdx":"chunks/memory-game_C1nIZKNF.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/tic-tac-toe.mdx":"chunks/tic-tac-toe_Ch-da-Qv.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/todolist-app.mdx":"chunks/todolist-app_CzJZovNP.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/shoppingcart.mdx":"chunks/shoppingcart_CbxXweKN.mjs","/home/carlosfrontend/repos/portfolio/src/content/projects/es/weather-app.mdx":"chunks/weather-app_KWK1j4_G.mjs","/home/carlosfrontend/repos/portfolio/src/components/LanguageSelector":"_astro/LanguageSelector.D4xv1ZqO.js","/home/carlosfrontend/repos/portfolio/src/components/ButtonToolTip.jsx":"_astro/ButtonToolTip.CftrcCXw.js","@astrojs/react/client.js":"_astro/client.Di_8Mrau.js","/home/carlosfrontend/repos/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/me.DlmcHYeu.webp","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/devicon.BwTrXM5G.ttf","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/gifGenerator.C2sP8Ssn.webp","/_astro/battleship.D3cwQJsm.webp","/_astro/homePage.CzKAoEgu.webp","/_astro/shoppingcart.BBD7SQLj.webp","/_astro/weatherApp.Sy7YCfuo.webp","/_astro/memoryCard.D1w7SDru.webp","/_astro/todoList.2H6q4uLX.webp","/_astro/ticTacToe.CdUnSNP6.webp","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/devicon.D0iwJE0M.woff","/_astro/devicon.DBhpxM3S.svg","/_astro/index.CvQDmJwx.css","/_astro/index.CwNyTNHz.css","/favicon.svg","/resume_en.pdf","/resume_es.pdf","/robots.txt","/_astro/ButtonToolTip.CftrcCXw.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/_astro/LanguageSelector.D4xv1ZqO.js","/_astro/client.Di_8Mrau.js","/_astro/index.BySGu9IW.css","/_astro/index.yBjzXJbu.js","/_astro/index.yGrMsBkE.js","/_astro/utils.B4hJXy5p.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Ni7oQwg+mJguv6eoTWJ0hVR55qKpfQw7FonRK2HZlyU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
