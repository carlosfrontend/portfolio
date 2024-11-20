import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_CzuhdN41.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Memory Card",
  "description": "Juego de memoria en el que no puedes elegir la misma pareja de cartas dos veces. ¿Te atreves?. Obtiene las imágenes de una API externa. Cada vez que se hace click en una de las tarjetas estas son barajadas y colocadas aleatoriamente. Mantiene la puntuación actual y la mejor puntuación. Uso de ganchos useEffect y useState de ReactJS.",
  "image": "/src/images/memoryCard.webp",
  "imageAlt": "Proyecto Memory Card",
  "loading": "lazy",
  "codeLink": "https://github.com/carlosfrontend/memory-card/",
  "liveLink": "https://memory-card-roan.vercel.app/",
  "tags": [{
    "name": "HTML5",
    "className": "devicon-html5-plain colored"
  }, {
    "name": "CSS3",
    "className": "devicon-css3-plain colored"
  }, {
    "name": "Javascript",
    "className": "devicon-javascript-plain colored"
  }, {
    "name": "ReactJS",
    "className": "devicon-react-original colored"
  }, {
    "name": "Vite",
    "className": "devicon-vitejs-plain colored"
  }]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/projects/es/project-2-memory-game.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-2-memory-game.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-2-memory-game.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
