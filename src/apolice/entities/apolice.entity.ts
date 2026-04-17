import { Transform, TransformFnParams, Type } from 'class-transformer';
import {
    IsDateString,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsOptional,
    IsPositive,
    Length,
    Min,
} from 'class-validator';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { NumericTransformer } from '../../util/numerictransformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Entity({ name: 'tb_apolices' })
export class Apolice {
    @ApiProperty({example: 1, description: 'Id único de apolice'})
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O tipo de dispositivo é Obrigatório. ' }) //Verifica se esta vazio
    @Length(5, 100, {
        message: 'O tipo de dispositivo deve ter entre 5 e 100 caracteres',
    })
    @Column({ length: 100, nullable: false })
    tipoDispositivo: string;
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'A Marca do dispositivo é Obrigatória. ' }) //Verifica se esta vazio
    @Length(5, 100, {
        message: 'A Marca do dispositivo deve ter entre 5 e 100 caracteres',
    })

    @ApiProperty()
    @Column({ length: 100, nullable: false })
    marca: string;
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O Modelo é Obrigatório. ' }) //Verifica se esta vazio
    @Length(5, 100, { message: 'O Modelo deve ter entre 5 e 100 caracteres' })
    @Column({ length: 100, nullable: false })
    modelo: string;
    
    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O número de série é Obrigatório.' }) //Verifica se esta vazio
    @Length(5, 20, {
        message: 'O Número de série deve ter entre 5 e 20 caracteres',
    })
    @Column({ length: 20, nullable: false })
    numeroSerie: string;
    
    @ApiProperty()
    @IsOptional()
    @IsInt()
    @Min(0)
    @Column({ type: 'int', default: 0 })
    anoFabricacao: number;
    
    @ApiProperty()
    @IsOptional()
    @IsInt()
    @Min(1990)
    @Column({ type: 'int', default: 1990 })
    anoAquisicao: number;
    
    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty({ message: 'O Valor do Aparelho é Obrigatório.' })
    @IsPositive()
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: new NumericTransformer(),
    })
    valorBase: number;
    
    
    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: new NumericTransformer(),
    })
    @IsOptional()
    valorDesconto: number;
    
    @ApiProperty()
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        transformer: new NumericTransformer(),
    })
    @IsOptional()
    valorFinal: number;
    
    @ApiProperty()
    @IsDateString()
    @Column({ type: 'timestamp', precision: 3, nullable: false })
    dataInicio: Date;
    
    @ApiProperty()
    @IsDateString()
    @Column({ type: 'timestamp', precision: 3, nullable: false })
    dataFim: Date;
    
    @ApiProperty({type: () => Cliente})
    @IsObject()
    @IsNotEmpty()
    @Type(() => Cliente)
    @ManyToOne(() => Cliente, (cliente) => cliente.apolices, {
        onDelete: 'CASCADE',
    })
    cliente: Cliente;
    
    
    @ApiProperty({type: () => Usuario})
    @IsObject()
    @IsNotEmpty()
    @Type(() => Usuario)
    @ManyToOne(() => Usuario, (usuario) => usuario.apolices, {
        onDelete: 'CASCADE',
    })
    usuario: Usuario;
}

