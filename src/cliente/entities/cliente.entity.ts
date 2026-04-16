import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty, IsEmail, MinLength, IsString, Length } from 'class-validator';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { Apolice } from '../../apolice/entities/apolice.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity({ name: 'tb_clientes' })
export class Cliente {

  @ApiProperty()
  @PrimaryGeneratedColumn ()
  id: number;
  
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty({message:"Nome não pode ser vazio"})
  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;
  
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty({message:"E-mail não pode ser vazio"})
  @IsEmail({},{message:"Formato de email inválido"})
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;
  
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @MinLength(8,{message:"Senha precia ser com minimo de 8 caracteres"})
  @IsNotEmpty({message:"Senha não pode ser vazio"})
  @Column({ type: 'varchar', length: 50, nullable: false })
  senha: string;
  
  @ApiProperty()
  @IsNotEmpty({message:"Data de Nascimento não pode ser vazia"})
  @Column({ type: 'date', nullable: false })
  @Type(()=>Date)
  dataNascimento: Date;
  
  
  
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())  
  @IsNotEmpty({message:"CPF não pode ser vazio"})
  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;
  
  @ApiProperty()
  @Transform(({ value }: TransformFnParams) => value?.trim())  
  @IsNotEmpty({message:"Telefone não pode ser vazio"})
  @Length(11,11,{message:"Telefone precisa ser 11 digitos incluindo DDD"})
  @Column({ type: 'varchar', length: 11, nullable: false })
  telefone: string;
  
  @ApiProperty()
  @Column({
    type: 'varchar',
    length: 500,
    default: 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'
  })
  @IsString({message:"Foto precisa ser uma string"})
  foto: string;
  
  @Type(() => Apolice)
  @OneToMany(() => Apolice, (apolice) => apolice.cliente)
  apolices: Apolice[];

}