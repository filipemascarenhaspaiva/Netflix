import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Participante } from './entities/participante.entity';

const lista = [];

@Injectable()
export class ParticipantesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createparticipanteDto: CreateParticipanteDto) {
    lista.push(createparticipanteDto);
    return `Add com sucesso participante: ${createparticipanteDto.nome}`;
  }

  async createPrisma(
    createparticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participantes.create({
      data: { ...createparticipanteDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Participante[]> {
    return await this.prisma.participantes.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Participante> {
    return await this.prisma.participantes.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} participante`;
  }

  async updatePrisma(
    id: number,
    updateparticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return await this.prisma.participantes.update({
      data: { ...updateparticipanteDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.participantes.delete({ where: { id } });
  }
}
