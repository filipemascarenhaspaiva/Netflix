import { Module } from '@nestjs/common';
import { generosService } from './genero.service';
import { GeneroController } from './genero.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GeneroController],
  providers: [generosService],
})
export class GeneroModule {}
