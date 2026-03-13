import { Apolice } from './../entities/apolice.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm';
import { Between, DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ApoliceService {
  constructor(
		@InjectRepository(Apolice)
		private apoliceRepository: Repository<Apolice>
	) {}

  async create(apolice: Apolice): Promise<Apolice> {
    // if(!apolice.cliente)
    //   throw new HttpException("Os dados do cliente não foram informados!", HttpStatus.BAD_REQUEST)

    // await this.clienteService.findById(apolice.cliente.id)

    calcularDesconto(apolice)
  
    return this.apoliceRepository.save(apolice);
  }

  async  findAll():Promise<Apolice[]>{
   return await this.apoliceRepository.find({
			relations: {
				// cliente: true,
				// usuario: true,
			},
		});

  }

  async findById(id:number):Promise<Apolice>   {
    const apolice = await this.apoliceRepository.findOne({
      where:{
        id 
      },
			// relations: {
			// 	cliente: true,
			// 	usuario: true,
			// },
    })
    if (!apolice) throw new HttpException('Apolice não encontrada!', HttpStatus.NOT_FOUND)

    return apolice;
  }

   async update(apolice:Apolice): Promise<Apolice> {
    if  (!apolice.id || apolice.id <=0)
      throw new HttpException(' O ID da apolice é invalido!', HttpStatus.NOT_FOUND)

    await this.findById(apolice.id)
    
    // if(!apolice.cliente) throw new HttpException('Os dados do cliente não foram encontrados.', HttpStatus.BAD_REQUEST)

    // await this.clienteRepository.findById(apolice.cliente.id)

    calcularDesconto(apolice)

    return await this.apoliceRepository.save(apolice);
  }

  async delete(id: number): Promise<DeleteResult>{
    if (!id) throw new HttpException("O id do seguro não foi informado!", HttpStatus.NOT_FOUND)

    await this.findById(id);
    return this.apoliceRepository.delete(id);
  }

  async findByFaixaDeValores(min: number, max: number): Promise<Apolice[]> {
    return this.apoliceRepository.find({
      where: { 
        valorFinal: Between(min, max) 
      },
      order: { 
        valorFinal: 'ASC' 
      },
     // relations: {
			// 	cliente: true,
			// 	usuario: true,
			// },
    });
  }

  async findByTipoDispositivo(tipoDispositivo: string): Promise<Apolice[]>{
    return this.apoliceRepository.find({
      where: {
        tipoDispositivo: ILike(`%${tipoDispositivo}%`)
      },
			// relations: {
			// 	cliente: true,
			// 	usuario: true,
			// },
    })
  }  

}
 function calcularDesconto(apolice:Apolice):void { 
    const anoAtual=new Date().getFullYear()
    const anosDeUso=anoAtual-apolice.anoAquisição
    if (anosDeUso > 3) {
      apolice.valorDesconto = apolice.valorBase * 0.3
    } else {
      apolice.valorDesconto = 0
    }
    apolice.valorFinal = apolice.valorBase - apolice.valorDesconto 
  }
