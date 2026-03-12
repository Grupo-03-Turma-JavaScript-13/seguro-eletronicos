import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
// import { Apolice } from '../../apolice/entities/apolice.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;
    //1

    @Transform(({ value }: TransformFnParams) => value?.trim())//Validação para retirar os espaços em branco no início e no final do campo
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string
    //João da Silva

    @Transform(({ value }: TransformFnParams) => value?.trim())//Validação para retirar os espaços em branco no início e no final do campo
    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    senha: string
    //12345678

    @Transform(({ value }: TransformFnParams) => value?.trim())//Validação para retirar os espaços em branco no início e no final do campo
    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    usuario: string
    //admin@gmail.com

    @Column({ length: 500, nullable: true })
    foto: string
    //https://ik.imagekit.io/ntap4bpdo/di%20estefano.PES.PNG

    
    //   @OneToMany(() => Apolice, (apolice) => apolice.usuario)
    //   apolices: Apolice[];

}
