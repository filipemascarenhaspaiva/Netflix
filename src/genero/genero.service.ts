import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class generosService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(creategeneroDto: CreateGeneroDto) {
    lista.push(creategeneroDto);
    return `Add com sucesso genero: ${creategeneroDto.nome}`;
  }

  async createPrisma(creategeneroDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      data: { ...creategeneroDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} genero`;
  }

  async updatePrisma(
    id: number,
    updategeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return await this.prisma.genero.update({
      data: { ...updategeneroDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.genero.delete({ where: { id } });
  }
}
