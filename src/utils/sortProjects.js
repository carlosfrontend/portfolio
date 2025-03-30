export const sortProjects = (projects) => {
  console.log(projects);
  return projects.sort((a, b) => a.data.pagePosition - b.data.pagePosition);
};
