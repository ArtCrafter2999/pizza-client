import React, { useState } from "react";
import { Pizza } from "@/app/(main)/Pizza/Models/Pizza";
import Image from "next/image";
import CheckboxButtonRow from "@/app/(main)/Pizza/CheckboxButtonRow";
import cn from "classnames";
import { buttonStyles } from "@/app/button-styles";

type Props = {
    pizza: Pizza
}

function displayIngredients(ingredients: string[]): string {
    function capitalize(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function uncapitalize(string: string): string {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    return ingredients.map((v, i) => i === 0 ? capitalize(v) : uncapitalize(v)).join(", ");
}

const PizzaCard = ({ pizza }: Props) => {
    const [size, setSize] = useState<{ size: string, addPrice: number }>();
    const [variant, setVariant] = useState<{ variant: string, addPrice: number }>();

    const price = pizza.basePrice + (size?.addPrice ?? 0) + (variant?.addPrice ?? 0);

    function onWantClick() {
        console.log("hurray")
    }

    function toColor(num: number) {
        num >>>= 0;
        const b = num & 0xFF,
            g = (num & 0xFF00) >>> 8,
            r = (num & 0xFF0000) >>> 16,
            a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
        return "rgba(" + [r, g, b, a].join(",") + ")";
    }

    return (
        <div
            className="w-80 h-[36rem] p-5 hover:border-primary-500 border-transparent border-[1.5px] rounded-xl
            shrink-0 relative">
            <div className="absolute top-1 left-1">
                {pizza.tags.map(t =>
                    <span
                        style={{border: `1px solid ${toColor(t.color)}`}}
                        className="px-2 rounded-xl select-none"
                    >
                        {t.name}
                    </span>
                )}
            </div>

            <div className="w-full flex justify-center">
                <Image width={300} height={300} src={pizza.image} alt={pizza.name} />
            </div>
            <div className="flex justify-between">
                <span className="text-2xl font-semibold">{pizza.name}</span>
                <span className="text-background-300 font-medium">{pizza.weight + " g"}</span>
            </div>
            <p className={"mt-5 text-background-300"}>
                {displayIngredients(pizza.ingredients)}
            </p>
            <CheckboxButtonRow
                variants={pizza.sizes.map(s => ({ value: s, display: s.size }))}
                required
                setValue={setSize}
                value={size}
                className="h-10 mt-4"
            />
            <CheckboxButtonRow
                variants={pizza.variants.map(v => ({ value: v, display: v.variant }))}
                setValue={setVariant}
                value={variant}
                className="h-7 mt-4 text-xs"
            />
            <div className="flex justify-between mt-5">
                <span className="text-2xl">{price} грн</span>
                <button
                    className={cn(
                        `rounded flex justify-center items-center px-4 h-7 text-black select-none`,
                        buttonStyles["accent-border"])}
                    onClick={onWantClick}
                >
                    Хочу
                </button>
            </div>
        </div>
    );
};

export default PizzaCard;