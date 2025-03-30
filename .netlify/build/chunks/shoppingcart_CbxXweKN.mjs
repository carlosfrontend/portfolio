import { B as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BqA62yoT.mjs';
import 'clsx';

const frontmatter = {
  "pagePosition": 1,
  "title": "Shopping Cart",
  "description": "Este proyecto es una tienda en línea creada con React, donde los usuarios pueden explorar productos y agregarlos a un carrito de compras dinámico. Usa React Router para la navegación y React Hooks para la gestión del estado. El diseño es responsivo y hace llamadas a una API para cargar productos en tiempo real.",
  "image": "/src/images/shoppingcart.webp",
  "imageAlt": "Proyecto Shopping Cart",
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

const url = "src/content/projects/es/shoppingcart.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/shoppingcart.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/shoppingcart.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
