import React from 'react';
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import CategoriesPage from "./pages/Categories-page"


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const iconList = Object.keys(Icons).filter(key => key !== "fas" && key !== "prefix").map(icon => Icons[icon])
library.add(...iconList);

function App() {
    return (
        <div className="App">
            <CategoriesPage/>
        </div>
    );
}

export default App;
