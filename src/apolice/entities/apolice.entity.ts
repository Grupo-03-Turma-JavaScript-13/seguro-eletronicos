import { Transform, TransformFnParams } from "class-transformer";
import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, Length, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NumericTransformer } from "../../util/numerictransformer";

@Entity({ name: "tb_apolices" })
export class Apolice {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O tipo de dispositivo é Obrigatório. '}) //Verifica se esta vazio
    @Length(5, 100, { message: "O tipo de dispositivo deve ter entre 5 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    tipoDispositivo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'A Marca do dispositivo é Obrigatória. '}) //Verifica se esta vazio
    @Length(5, 100, { message: "A Marca do dispositivo deve ter entre 5 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    marca: string;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O Modelo é Obrigatório. '}) //Verifica se esta vazio
    @Length(5, 100, { message: "O Modelo deve ter entre 5 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    modelo: string;


    @Transform(({ value }: TransformFnParams) => value?.trim()) //Retira os espaços vazios
    @IsNotEmpty({ message: 'O número de série é Obrigatório.'}) //Verifica se esta vazio
    @Length(5, 20, { message: "O Número de série deve ter entre 5 e 20 caracteres" })
    @Column({ length: 20, nullable: false })
    numeroSerie: string;

	@IsOptional()
	@IsInt()
	@Min(0)
    @Column({ type: "int", default: 0 })
    anoFabricacao: number;

    @IsInt()
    @Min(0)
    @Column({type:"int",default:0})
    anoAquisição:number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty({ message: 'O Valor do Aparelho é Obrigatório.'})
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    valorBase: number;


    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty({ message: 'O Valor do Desconto é Obrigatório.'})
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    valorDesconto: number;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty({ message: 'O Valor final é Obrigatório.'})
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    valorFinal: number;

	@IsDateString()
    @Column({ type: "timestamp", precision: 3, nullable: false })
    dataInicio: Date;

	@IsDateString()
    @Column({ type: "timestamp", precision: 3, nullable: false })
    dataFim: Date;


    // cliente: Cliente;
    // usuario: Usuario;

}
