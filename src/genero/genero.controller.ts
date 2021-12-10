import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { generosService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('genero')
export class GeneroController {
  generoService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly GeneroService: generosService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.createPrisma(CreateGeneroDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.generoService.updatePrisma(+id, UpdateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.removePrisma(+id);
  }
}
