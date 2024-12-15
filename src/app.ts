import express, { Request, Response } from 'express';
import cors from 'cors'
import { ShopRoutes } from './modules/shop/shop.route';
const app = express()
// port = 3000

//* parser Middleware
app.use(cors());
app.use(express.json());

//* Router
app.use('/api/v1/shops', ShopRoutes)  
app.get('/', (req : Request , res : Response) => {
  res.send('shop ing website')
})

export default app;