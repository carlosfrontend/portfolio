import { B as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BqA62yoT.mjs';
import 'clsx';

const frontmatter = {
  "pagePosition": 4,
  "title": "Battleship (Versión de Escritorio)",
  "description": "El clásico juego de hundir la flota. Permite colocar barcos de forma manual y aleatoria en el tablero y competir contra la máquina. Todos los métodos y propiedades de la interfaz pública estan testados con JestJS.",
  "image": "/src/images/battleship.webp",
  "imageAlt": "Proyecto Battleship",
  "loading": "lazy",
  "codeLink": "https://github.com/carlosfrontend/battleship-game",
  "liveLink": "https://carlosfrontend.github.io/battleship-game/",
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
    "name": "Jest",
    "className": "devicon-jest-plain colored"
  }, {
    "name": "Webpack",
    "className": "devicon-webpack-plain colored"
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

const url = "src/content/projects/es/battleship.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/battleship.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/battleship.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
