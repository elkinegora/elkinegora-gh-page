import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./css/main.scss";
import ComponentsHandler from "./components/ComponentsHandler";
declare let module: any;

ReactDOM.render(<ComponentsHandler />,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}