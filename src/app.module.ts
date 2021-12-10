import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { GeneroModule } from './genero/genero.module';
import { ParticipantesModule } from './participantes/participantes.module';

@Module({
  imports: [FilmesModule, GeneroModule, ParticipantesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
