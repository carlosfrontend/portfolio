import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_CzuhdN41.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_zLxRMGgS.mjs';
import 'clsx';

const frontmatter = {
  "title": "TodoList App",
  "description": "A to-do list application that stores data with localStorage. It allows you to create and delete projects, include tasks within each one, show the tasks that exist within them and edit each of them. Organize tasks by trays so you can sort them by proximity in time, Inbox, Today, Tomorrow, Next. To manage dates I have used the external library 'date-fns' as a project dependency.",
  "image": "/src/images/todoList.webp",
  "imageAlt": "TodoList project",
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

const url = "src/content/projects/en/project-1-todolist-app.mdx";
const file = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-1-todolist-app.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/carlosfrontend/repos/portfolio/src/content/projects/en/project-1-todolist-app.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
