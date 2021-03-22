export interface Produit {
    id?: number,
    name: string,
    quantity: number,
    price: number,
    selected?: boolean,
    promo?: boolean,
    createdAt?: Date
}

export enum ActionProduit{
    ALL,
    SELECTED,
    PROMO
}