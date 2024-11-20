import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_CzuhdN41.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import 'clsx';

const frontmatter = {
  "title": "TodoList App",
  "description": "Una aplicación de lista de tareas que almacena los datos con localStorage. Permite crear y borrar proyectos, incluir tareas dentro de cada uno, mostrar las tareas que existen dentro de ellos y editar cada una de ellas. Organiza las tareas por bandejas para poder ordenarlas por proximidad en el tiempo, Inbox, Today, Tomorrow, Next. Para manejar las fechas he utilizado la librería externa 'date-fns' como dependencia del proyecto.",
  "image": "/src/images/todoList.webp",
  "imageAlt": "Proyecto TodoList",
  "codeLink": "https://github.com/carlosfrontend/todo-list/",
  "liveLink": "https://carlosfrontend.github.io/todo-list/",
  "loading": "eager",
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

const url = "src/content/projects/es/project-1-todolist-app.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-1-todolist-app.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/es/project-1-todolist-app.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
