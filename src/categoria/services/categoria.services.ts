import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private CategoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.CategoriaRepository.find({
      relations: {
        produto: true,
      },
    });
  }
  async findByNome(nome: string): Promise<Categoria[]> {
    return await this.CategoriaRepository.find({
      where:{
        nome,
      },
      relations: {
        produto: true
      }
    })
  }

  async findById(id: number): Promise<Categoria> {
    const Categoria = await this.CategoriaRepository.findOne({
      where: {
        id,
      },
      relations: {
        produto: true,
      },
    });
    if (!Categoria) {
      throw new HttpException(
        'Categoria não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }
    return Categoria;
  }
  async create(Categoria: Categoria): Promise<Categoria> {
    return await this.CategoriaRepository.save(Categoria);
  }
  async update(Categoria: Categoria): Promise<Categoria> {
    const buscaCategoria: Categoria = await this.findById(Categoria.id);

    if (!buscaCategoria || !Categoria) {
      throw new HttpException(
        'Categoria não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.CategoriaRepository.save(Categoria);
  }
  async delete(id: number): Promise<DeleteResult> {
    const buscaCategoria = await this.findById(id);

    if (!buscaCategoria) {
      throw new HttpException(
        'Categoria não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.CategoriaRepository.delete(id);
  }
}
