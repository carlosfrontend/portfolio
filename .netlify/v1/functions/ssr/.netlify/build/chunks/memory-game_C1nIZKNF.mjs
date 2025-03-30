import { B as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BqA62yoT.mjs';
import 'clsx';

const frontmatter = {
  "pagePosition": 7,
  "title": "Memory Card",
  "description": "Juego de memoria en el que no puedes elegir la misma pareja de cartas dos veces. ¿Te atreves?. Uso de ganchos useEffect y useState de ReactJS.",
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

const url = "src/content/projects/es/memory-game.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/memory-game.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/memory-game.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
