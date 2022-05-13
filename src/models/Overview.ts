import OverviewCategory from "./OverviewCategory"

class Overview {
    date: Date;
    categories: OverviewCategory[];

    constructor(date: Date, categories: OverviewCategory[]) {
        this.date = date;
        this.categories = categories;
    }
}

export default Overview;
