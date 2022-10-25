import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { CategoriaService } from 'src/categoria/services/categoria.services';
import { produtoController } from './controller/produto.controller';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.services';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [produtoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}
