class Category {
    id: number;
    name: string;
    icon: string
    amount: number

    constructor(id: number, name: string, icon: string, amount: number) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.amount = amount;
    }
}

export default Category;
