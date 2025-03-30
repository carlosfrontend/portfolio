export const sortProjects = (projects) => {
  return projects.sort((a, b) => a.data.pagePosition - b.data.pagePosition);
};
