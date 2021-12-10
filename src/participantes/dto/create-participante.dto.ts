/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @IsString()
    data_nascimento: string;

    @IsNotEmpty()
    @IsString()
    ator: string;
}
