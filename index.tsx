import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';

const render = (Component: () => JSX.Element) => ReactDOM.render(
  <Component />,
  document.getElementById('root')
);

render(App);

if (module.hot) {
  module.hot.accept('./src/App.tsx', () => {
    const NextApp = require('./src/App').default;
    render(NextApp);
  });
}
