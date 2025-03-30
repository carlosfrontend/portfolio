import { B as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BqA62yoT.mjs';
import 'clsx';

const frontmatter = {
  "pagePosition": 6,
  "title": "Weather App",
  "description": "Aplicación del tiempo. Llamando a Weather API para obtener los datos. Cada vez que la vista cambia el fondo es actualizado.",
  "image": "/src/images/weatherApp.webp",
  "imageAlt": "Proyecto Weather App",
  "loading": "lazy",
  "codeLink": "https://github.com/carlosfrontend/weather-app/",
  "liveLink": "https://carlosfrontend.github.io/weather-app/",
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

const url = "src/content/projects/es/weather-app.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/weather-app.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/weather-app.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
