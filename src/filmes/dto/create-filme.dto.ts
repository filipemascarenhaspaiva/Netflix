import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  lancamento: string;

  @IsNotEmpty()
  @IsString()
  tempo: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;

  @IsNotEmpty()
  @IsString()
  participantes: string;

  @IsNotEmpty()
  @IsString()
  participantesid: number;
}
