import React from "react";
import { render } from "react-dom";
import { App } from "app";

import * as worker from "./serviceWorker";

const RootComponent = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const rootElement = document.querySelector("#root");

render(<RootComponent />, rootElement);

worker.unregister();
