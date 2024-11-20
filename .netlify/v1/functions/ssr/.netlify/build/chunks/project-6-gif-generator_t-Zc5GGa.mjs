import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_CzuhdN41.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gif Generator",
  "description": "Automatic generator and search engine for animated GIFs using the GIPPHY API.",
  "image": "/src/images/gifGenerator.webp",
  "imageAlt": "Gif generator project",
  "loading": "lazy",
  "codeLink": "https://github.com/carlosfrontend/gif-generator/",
  "liveLink": "https://carlosfrontend.github.io/gif-generator/",
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

const url = "src/content/projects/en/project-6-gif-generator.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-6-gif-generator.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-6-gif-generator.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
