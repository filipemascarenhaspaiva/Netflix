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
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { ParticipantesService } from './participantes.service';

@Controller('participantes')
export class ParticipantesController {
  generoService: any;
  ParticipantesService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly GeneroService: ParticipantesService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createGeneroDto: CreateParticipanteDto) {
    return this.ParticipantesService.createPrisma(CreateParticipanteDto);
  }

  @Get()
  findAll() {
    return this.ParticipantesService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ParticipantesService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.ParticipantesService.updatePrisma(+id, UpdateParticipanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ParticipantesService.removePrisma(+id);
  }
}
