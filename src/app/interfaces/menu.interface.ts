export interface DishI {
    name: string;
    ingredients: string[];
    price: number;
    section: string;
}

export interface MenuI {
    name: string;
    dishes?: DishI[];
}

export interface MenuListResponseI {
    menus: MenuI[];
}