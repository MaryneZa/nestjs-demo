import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb://root:example@localhost:27017/nestjsdb-example?authSource=admin' // authSource=admin avoid authen failed err
  ), ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

  // imports: [
  //   MongooseModule.forRoot(`mongodb://localhost:27017`, {
  //     user: 'root',
  //     pass: 'example',
  //     dbName: 'dbname',
  //   }),
  //   ProductsModule,
  // ],
