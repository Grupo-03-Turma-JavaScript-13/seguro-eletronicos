import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Apolice } from '../entities/apolice.entity';
import { InjectRepository  } from '@nestjs/typeorm';
import { Between, DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ApoliceService {
  constructor(
		@InjectRepository(Apolice)
		private apoliceRepository: Repository<Apolice>
		
	) {}

  async create(apolice:Apolice ) {
    return this.apoliceRepository.save(apolice);
  }

  async  findAll():Promise<Apolice[]>{
   return await this.apoliceRepository.find();

  }

  async findById(id:number):Promise<Apolice>   {
    const apolice=await this.apoliceRepository.findOne({
      where:{
        id 
      }
    })
    if (!apolice)
      throw new HttpException('Apolice não encontrada!', HttpStatus.NOT_FOUND)

    return apolice;
  }

   async update(apolice:Apolice): Promise<Apolice> {
    if  (!apolice.id || apolice.id <=0)
      throw new HttpException(' O ID da apolice é invalido!', HttpStatus.NOT_FOUND)
    await this.findById(apolice.id)
    return await this.apoliceRepository.save(apolice);
  }

  async delete(id: number) : Promise<DeleteResult>{
    await this.findById(id);

    return this.apoliceRepository.delete(id);
  }
  async findByFaixaDeValores(min: number, max: number): Promise<Apolice[]> {
    return this.apoliceRepository.find({
      where: { valorFinal: Between(min, max) },
      
      order: { valorFinal: 'ASC' },
    });
  }
  async findAllByTipoDispositivo(tipoDispositivo: string): Promise<Apolice[]>{
    return this.apoliceRepository.find({
      where: {
        tipoDispositivo: ILike(`%${tipoDispositivo}%`)
      }
    })
  }  

}
 function calcularDesconto(apolice:Apolice):number { 
    const anoAtual=new Date().getFullYear()
    const anosDeUso=anoAtual-apolice.anoAquisição
    if (anosDeUso > 3) {
      return apolice.valorBase * 0.3
    } else {
      return 0
    }
  }
