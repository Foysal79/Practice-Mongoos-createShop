import { Request, Response } from "express";
import { shopServices } from "./shop.service";


const createProduct = async (req :Request , res: Response) => {
     try {
       const product = req.body;
       const result = await shopServices.createProductFromDB(product);
       res.json({
        success : true,
        message : "Product Created successfully",
        data : result
       })
     }
     catch(err : any) {
        res.json({
            success : false,
            message : "Error creating product",
            data :  err  
        })
     }
}

export const shopController = {
    createProduct
}