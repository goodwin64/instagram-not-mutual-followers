import { h, render } from 'preact';
import { App } from '~src/App';

const mountNode = document.getElementById('root');
if (mountNode) {
  render(
    <App />,
    mountNode,
  );
}
