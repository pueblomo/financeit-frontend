import React from "react";
import TotalAmount from "../../../components/categories-page/Total-amount"
import Category from "../../../models/Category"
import {mount} from 'enzyme';

describe("<TotalAmount/>", () => {
    test("should display the correct amount", () => {
        const categories: Category[] = [
            new Category(1, "test", "cart", 100.01),
            new Category(2, "test", "cart", 100),
            new Category(3, "test", "cart", 100.01),
            new Category(4, "test", "cart", 100),
            new Category(5, "test", "cart", 100),
        ];

        const wrapper = mount(<TotalAmount categories={categories}/>);
        const spanText: string = wrapper.find('span').text();
        expect(spanText).toBe("500.02 €");
    })

    test("should display 0.00 € on no categories", () => {
        const categories: Category[] = [];
        const wrapper = mount(<TotalAmount categories={categories}/>);
        const spanText: string = wrapper.find('span').text();
        expect(spanText).toBe("0 €");

    })
})
