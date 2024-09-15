'use client'
import React from 'react';
import { Pizza } from "@/app/(main)/Pizza/Models/Pizza";
import PizzaCard from "@/app/(main)/Pizza/PizzaCard";

const defaultPizza: Pizza = {
    name: "Корнелія",
    ingredients: ["Соус вершковий", "сир моцарела", "салямі", "кукурудза"],
    sizes: [{ size: "30 см", addPrice: 0 }, { size: "40 см", addPrice: 80 }],
    variants: [
        { variant: "Сирний", addPrice: 58 },
        { variant: "Мисливський", addPrice: 58 },
        { variant: "Кунжутовий", addPrice: 13 },
    ],
    basePrice: 189,
    weight: 450,
    tags: [{ name: "м'ясо", color: -16711936 }],
    allergens: [{ name: "Молочні продукти", description: "В сирі молоко, очевидно ж ¯\\_(ツ)_/¯" }],
    urlName: "kornelia",
    image: "https://prontopizza.ua/ternopil/wp-content/uploads/sites/15/2021/07/salyamikukurudza-kopiya-500x500.webp",
}

const Page = () => {
    return (
        <div className="w-full px-[15%] flex flex-wrap justify-center mt-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => <PizzaCard key={i} pizza={defaultPizza} />)}
        </div>
    );
};

export default Page;