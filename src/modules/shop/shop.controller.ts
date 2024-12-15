import { Request, Response } from "express";
import { shopServices } from "./shop.service";

//* create a product
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
//* get all product
const getAllProduct = async (req : Request, res :Response) => {
  try{
    const result = await shopServices.getAllProductFromDB();
    res.json({
      success : true,
      message : "All Product List",
      data : result
    })
  } catch(err){
    res.json({
      success : false,
      message : "Error fetching product",
      data : err
    })
  }
}

const getSingleProduct = async(req : Request, res : Response) => {
  try{
    const {id} = req.params;
    const result = await shopServices.getSingleProductFromDB(id);
    if(!result) {
      res.json({
        success : false,
        message : "Product not found",
      })
      return ;
    }
    res.json({
      success : true,
      message : "one Product Details",
      data : result
    })
  } catch(err) {
    res.json({
      success : false,
      message : "Error fetching product",
      data : err
    })
  }
}
//* update a product
const updateProductById = async (req : Request, res : Response) => {
 try {
  const {id} = req.params;
  const updateData = req.body;

  const updateProduct = await shopServices.updateProductFromDB(id, updateData);
  if(!updateProduct){
    res.status(404).json({
      success : false,
      message : "Product Not Found",
    })
    return ;
  }
  res.json({
    success : true,
    message : "Product Updated",
    data : updateProduct
  })

 } catch(err) {
  res.json({
    success : false,
    message : "Error updating product",
    data : err
  })
 }
}
//* delate product by ID
const delateProductByID = async ( req : Request, res : Response) => {
 try{
  const {id} = req.params;
  const result = await shopServices.delateProductById(id);
  res.json({
    success : true,
    message : "Product Deleted",
    
  })
 } catch(err) {
  res.json({
    success : false,
    message : "Error deleting product",
    data : err
  })
 }
}

//* search By Product
const searchByProductController = async(req : Request, res : Response) => {
  try {
    const {searchTerm } = req.query;
    if (typeof searchTerm !== "string" || searchTerm.trim() === "") {
      return res.status(400).json({ message: "Invalid or missing search term" });
    }
    
    const result = await shopServices.searchByProduct(searchTerm as string);
    res.json({
      success : true,
      message : "Product Found",
      data : result
  })
} catch(err) {
  res.json({
    success : false,
    message : "Error searching product",
    data : err
  })
}

}

export const shopController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProductById,
    delateProductByID,
    searchByProductController
}