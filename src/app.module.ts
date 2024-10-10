// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModule } from './bikes/bikes.module'; // Ensure this is the correct import
import { Bike } from './bikes/entities/bike.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bike_library.db',
      entities: [Bike],
      synchronize: true, // Automatically creates DB schema, avoid in production
    }),
    BikeModule, // Ensure this is correctly named
  ],
})
export class AppModule {}
