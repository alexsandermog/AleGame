import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.services";

@Controller('/Categoria')
export class categoriaController {
    constructor (private readonly categoriaService: CategoriaService){}

    @Get ()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll()
    }
    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe)
    id: number): Promise<Categoria> {
        return this.categoriaService.findById(id)
    }
    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Categoria[]> {
      return this.categoriaService.findByNome(nome);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
    @Body()
        Categoria: Categoria
        ): Promise<Categoria> {
        return this.categoriaService.create(Categoria)
        }

    @Put()
    @HttpCode(HttpStatus.OK)
    update (
    @Body()
        Categoria: Categoria): 
        Promise<Categoria> {
        return this.categoriaService.update(Categoria);
            }
     @Delete('/:id')
     @HttpCode(HttpStatus.NO_CONTENT)
     delete (
     @Param('id',ParseIntPipe) id: number){
                    return this.categoriaService.delete(id);
                }

}

    