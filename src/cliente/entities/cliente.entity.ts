import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';


@Entity({ name: 'tb_clientes' })
export class Cliente {

  @PrimaryGeneratedColumn ()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @IsEmail()
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @MinLength(8)
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 50, nullable: false })
  senha: string;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataNascimento: Date;

  @Column({
    type: 'varchar',
    length: 500,
    default: 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'
  })
  foto: string;
  
  @Transform(({ value }: TransformFnParams) => value?.trim())  
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())  
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 11, nullable: false })
  telefone: string;

}