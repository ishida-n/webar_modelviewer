// Handles loading the events for <model-viewer>'s slotted progress bar

//const modelViewerScale = document.querySelector("model-viewer#scale");

const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

//const updateScale = () => {
//  modelViewerScale.scale = 0.5,0.5,0.5;
//  modelViewerScale.updateFraming();
//};

document.querySelector('model-viewer').addEventListener('progress', onProgress);