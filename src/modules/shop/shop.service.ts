import { TShop } from "./shop.interface";
import { shop } from "./shop.model";


const createProductFromDB = async (payload : TShop) => {
    const product = await shop.create(payload);
    return product;
}

const getAllProductFromDB = async () => {
   const result = await shop.find();
   return result;
}

const getSingleProductFromDB = async (id : string) => {
    const result = await shop.findById(id);
    return result;
}

const updateProductFromDB = async (productId : string,  payload : Partial<TShop>) => {
    const result = await shop.findByIdAndUpdate(productId, payload, {new : true});
    return result;
}
//* delate a product by ID
const delateProductById = async(id : string) => {
   const result = await shop.findByIdAndDelete(id);
   return result;
}

//* search by Product

const searchByProduct = async(searchTerm  : string | undefined) => {
    let products;
    if(searchTerm){
        const searchRegex = new RegExp(searchTerm as string, "i");

        products = await shop.find({
            $or : [
                {name : searchRegex},
                {description : searchRegex},
                {tags : searchRegex},
                {category : searchRegex},
            ]
        })
    }
    else {
        products = await shop.find();
    }
    return products;
}

export const shopServices = {
    createProductFromDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    delateProductById,
    searchByProduct
}