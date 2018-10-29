import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./css/main.scss";
import ComponentsHandler from "./components/ComponentsHandler";
declare let module: any;

ReactDOM.render(<ComponentsHandler compiler="Typescript" framework="React" bundler="Webpack 4" />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}