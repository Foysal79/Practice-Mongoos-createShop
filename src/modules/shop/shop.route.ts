import express from 'express';
import { shopController } from './shop.controller';

const router = express.Router();

router.post('/create-product', shopController.createProduct);
router.get('/all-product', shopController.getAllProduct);
router.get('/single-product/:id', shopController.getSingleProduct);
router.put('/update-product/:id', shopController.updateProductById);
router.delete('/product-delate/:id', shopController.delateProductByID);
router.get('/products', shopController.searchByProductController)

export const ShopRoutes = router