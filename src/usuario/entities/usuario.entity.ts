import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { Apolice } from '../../apolice/entities/apolice.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Entity({ name: 'tb_usuarios' })
export class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    //1
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    @Column({ type: 'varchar', length: 255, nullable: false })
    nome: string
    //João da Silva
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8, { message: "Senha precia ser com minimo de 8 caracteres" })
    @IsNotEmpty({ message: "Senha não pode ser vazio" })
    @Column({ type: 'varchar', length: 50, nullable: false })
    senha: string
    //12345678
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim())//Validação para retirar os espaços em branco no início e no final do campo
    @IsEmail({}, { message: "Formato de email inválido" })
    @IsNotEmpty({ message: "E-mail não pode ser vazio" })
    @Column({ type: 'varchar', length: 255, nullable: false })
    usuario: string
    //admin@gmail.com
    
    @ApiProperty()
    @Column({ length: 500, nullable: true, default: 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg' })
    @IsString({ message: "Foto precisa ser uma string" })
    foto: string
    //https://ik.imagekit.io/ntap4bpdo/di%20estefano.PES.PNG

    @Type(() => Apolice)
    @OneToMany(() => Apolice, (apolice) => apolice.usuario)
    apolices: Apolice[];

}
