import { TShop } from "./shop.interface";
import { shop } from "./shop.model";


const createProductFromDB = async (payload : TShop) => {
    const product = await shop.create(payload);
    return product;
}

export const shopServices = {
    createProductFromDB
}