import Category from "./Category"
import Expense from "./Expense"

class OverviewCategory {
    category: Category;
    expenses: Expense[];

    constructor(category: Category, expenses: Expense[]) {
        this.category = category;
        this.expenses = expenses;
    }
}

export default OverviewCategory;
