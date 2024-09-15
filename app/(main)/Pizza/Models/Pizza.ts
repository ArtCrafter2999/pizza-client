import { Tag } from "@/app/(main)/Pizza/Models/Tag";

export interface Pizza {
    name: string;
    ingredients: string[]
    sizes: {size: string, addPrice: number}[]
    variants: {variant: string, addPrice: number}[]
    weight: number;
    basePrice: number;
    tags: Tag[]
    allergens: Allergen[]
    urlName: string;
    image: string
}