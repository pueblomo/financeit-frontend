class Expense {
    id?: number;
    date: Date;
    description: string;
    price: number;
    categoryId: number

    constructor(id: number, date: Date, description: string, price: number, categoryId: number) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.price = price;
        this.categoryId = categoryId;
    }
}

export default Expense;
