import { B as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BqA62yoT.mjs';
import 'clsx';

const frontmatter = {
  "pagePosition": 1,
  "title": "Shopping Cart",
  "description": "This project is an online store built with React, where users can browse products and add them to a dynamic shopping cart. Uses React Router for navigation and React Hooks for state management. The design is responsive and makes calls to an API to load products in real time.",
  "image": "/src/images/shoppingcart.webp",
  "imageAlt": "Shopping Cart Project",
  "loading": "lazy",
  "codeLink": "https://github.com/carlosfrontend/fake-store",
  "liveLink": "https://fake-store-1xz.pages.dev/",
  "tags": [{
    "name": "React",
    "className": "devicon-react-plain colored"
  }, {
    "name": "React Router",
    "className": "devicon-reactrouter-plain colored"
  }, {
    "name": "Tailwind",
    "className": "devicon-tailwindcss-original colored"
  }, {
    "name": "Vite",
    "className": "devicon-vitejs-plain colored"
  }, {
    "name": "Vitest",
    "className": "devicon-vitest-plain colored"
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

const url = "src/content/projects/en/shoppingcart.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/shoppingcart.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/shoppingcart.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
