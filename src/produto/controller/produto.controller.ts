import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.services';

@Controller('/produto')
export class produtoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findByDescricao(@Param('descricao') descricao: string): Promise<Produto[]> {
    return this.produtoService.findByDescricao(descricao);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body()
    Produto: Produto,
  ): Promise<Produto> {
    return this.produtoService.create(Produto);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body()
    Produto: Produto,
  ): Promise<Produto> {
    return this.produtoService.update(Produto);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
