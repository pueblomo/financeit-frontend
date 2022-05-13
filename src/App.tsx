import React from 'react';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import CategoriesPage from "./pages/Categories-page"
import NotFound from "./pages/Not-found"
import CategoriesAddPage from "./pages/Categories-add-page"
import ExpenseAddPage from "./pages/Expense-add-page"
import ExpensesPage from "./pages/Expenses-page"
import OverviewPage from "./pages/Overview-page"
import Menu from "./components/ui/Menu"


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const iconList = Object.keys(Icons).filter(key => key !== "fas" && key !== "prefix").map(icon => Icons[icon])
library.add(...iconList);

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/categories"/>}/>
                <Route path="/categories" element={<CategoriesPage/>}/>
                <Route path="/categories/addCategory" element={<CategoriesAddPage/>}/>
                <Route path="/categories/:catId/addExpense" element={<ExpenseAddPage/>}/>
                <Route path="/categories/:catId/expenses" element={<ExpensesPage/>}/>
                <Route path="/overview" element={<OverviewPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Menu/>
        </div>

    );
}

export default App;
