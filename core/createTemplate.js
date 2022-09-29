export const createTemplate = (htmlString) => {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content.cloneNode(true);
};
