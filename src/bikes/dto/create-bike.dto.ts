// src/bikes/dto/create-bike.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsString()
  type: string;
}
