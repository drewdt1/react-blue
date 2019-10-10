import componentRender from './componentRender.util';

const createComponentFiles = (components, zip) => {
  console.log('in createComponentFiles.util')
  return components.forEach((component) => {
    // zip.file(file name, file content)
    zip.file(
      `client/components/${component.name}.jsx`,
      componentRender(component, components));
  });
}

export default createComponentFiles;