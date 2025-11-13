import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from '../database/entities/categoria.entity';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categoriasService: CategoriasService) { }

    @Get()
    async findAll(): Promise<Categoria[]> {
        return await this.categoriasService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return await this.categoriasService.findOne(id);
    }

    @Post()
    async create(@Body() body: { nombre: string }): Promise<Categoria> {
        return await this.categoriasService.create(body);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: { nombre?: string },
    ): Promise<Categoria> {
        return await this.categoriasService.update(id, body);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.categoriasService.remove(id);
    }
}

