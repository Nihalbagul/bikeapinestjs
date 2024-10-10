// src/bikes/bikes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';
import { BikeService } from './bikes.service';
import { BikeController } from './bikes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
