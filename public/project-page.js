import { projectDetails } from './projects.js';

const renderDetails = projectDetails[document.body.dataset.project];
if (renderDetails) {
  document.querySelector('#project-details').replaceChildren(...renderDetails());
}
