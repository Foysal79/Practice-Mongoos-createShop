import express from 'express';
import { shopController } from './shop.controller';

const router = express.Router();

router.post('/create-product', shopController.createProduct);
router.get('/all-product', );
router.get('/single-product/:id', );
router.put('/update-product/:id', );
router.delete('/product-delate/:id');
router.get('/products?searchTerm=iphone', )

export const ShopRoutes = router