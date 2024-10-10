// src/bikes/bikes.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch all bikes' })
  findAll() {
    return this.bikeService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Add a new bike' })
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch a single bike by ID' })
  findOne(@Param('id') id: string) {
    return this.bikeService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing bike' })
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikeService.update(id, updateBikeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a bike' })
  remove(@Param('id') id: string) {
    return this.bikeService.remove(id);
  }
}
