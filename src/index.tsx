import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelperButton from './HelperButton';
import { selectors } from './operations/addStatisticsButton';


function renderBotButton() {
  const isAlreadyRendered = document.querySelector(selectors.botControlButton);
  if (isAlreadyRendered) {
    return;
  }
  const controlPanelContainer = document.querySelector(selectors.headerControlPanelContainer);
  if (!controlPanelContainer) {
    return;
  }
  const placeToRenderHelperButton = document.createElement('div');
  placeToRenderHelperButton.classList.add(selectors.headerControlButton.replace('.', ''));
  controlPanelContainer.insertBefore(placeToRenderHelperButton, controlPanelContainer.firstChild);

  ReactDOM.render(
    <React.StrictMode>
      <HelperButton />
    </React.StrictMode>,
    placeToRenderHelperButton,
  );
}

setTimeout(renderBotButton, 500);
