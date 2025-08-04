import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getAllProducts() : string {
        return 'products';
    }

    @Post()
    addProduct(@Body() product){
        return product;
    }
}
