import { model, Schema } from "mongoose";
import { TInventory, TShop, TVariants } from "./shop.interface";

const VariantSchema =  new Schema<TVariants>({
    type : {type : String, required : true},
    value : {type : String, required : true}
})

const InventorySchema = new Schema<TInventory>({
    quantity : {type : Number, required : true},
    inStock : {type : Boolean, required : true}
})

const shopSchema = new Schema<TShop>({
    name : {type : String, required : true},
    description : {type : String, required : true},
    price : {type : Number, required : true},
    category : {type : String, required : true},
    tags : {type : [String], required : true},
    variants : {type : [VariantSchema], required : true},
    inventory : {type : InventorySchema, required : true},
})

export const shop = model<TShop>('shop', shopSchema)