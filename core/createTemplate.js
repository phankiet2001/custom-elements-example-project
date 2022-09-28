export const createTemplate = (htmlString) => {
  const template = document.createElement("template");
  template.innerHtml = htmlString;
  return template.content.cloneNode(true);
};
