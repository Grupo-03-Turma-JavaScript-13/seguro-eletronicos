import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'tb_clientes' })
export class Cliente {

  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;


  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  senha: string;

  @Column({ type: 'date', nullable: false })
  dataNascimento: Date;

  @Column({
    type: 'varchar',
    length: 500,
    default: 'https://ik.imagekit.io/leu4crxxao/games/istockphoto-2041572395-612x612.jpg'
  })
  foto: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  cpf: string;

  @Column({ type: 'varchar', length: 11, nullable: false })
  telefone: string;

}