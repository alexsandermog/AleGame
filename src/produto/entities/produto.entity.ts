import { IsNotEmpty } from 'class-validator';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import {Column,Entity, ManyToMany, ManyToOne,PrimaryGeneratedColumn,} from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 60, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 310, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 5, scale: 2 })
  preco: number;
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
