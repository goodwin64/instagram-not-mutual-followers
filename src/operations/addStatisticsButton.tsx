import { h, render } from 'preact';
import {App} from "~src/App";

export const selectors = {
  followersLink: '[href*="/followers/"]',
  followingLink: '[href*="/following/"]',
  instagramUsername: '.FPmhX',
  headerControlPanelContainer: '._47KiJ',
  headerControlButton: '.Fifk5',
  pageContainer: '.v9tJq.AAaSh.VfzDr',
  botControlButton: '#bot-control-button',
};

export function createBotControlButton() {
  const buttonContainer = document.createElement('div');
  const headerControlButtonClass = selectors.headerControlButton.replace('.', '');
  buttonContainer.classList.add(headerControlButtonClass);
  return buttonContainer;
}

export function addBotControlButton() {
  if (document.querySelector(selectors.botControlButton)) {
    return;
  }
  const buttonContainer = createBotControlButton();
  const controlPanel = document.querySelector(selectors.headerControlPanelContainer);
  if (!controlPanel) return;

  controlPanel.insertBefore(buttonContainer, controlPanel.firstChild);
  render(
      <App/>,
      buttonContainer
  );
}

export function addStatisticsButton() {
  setInterval(addBotControlButton, 1000);
}
