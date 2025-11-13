import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/database/entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findOne(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({ where: { id } });
        if (!categoria) {
            throw new NotFoundException(`La categoría con ID ${id} no existe`);
        }
        return categoria;
    }

    async create(data: { nombre: string }): Promise<Categoria> {
        const nuevaCategoria = this.categoriaRepository.create(data);
        return await this.categoriaRepository.save(nuevaCategoria);
    }

    async update(id: number, data: { nombre?: string }): Promise<Categoria> {
        const categoria = await this.findOne(id);
        Object.assign(categoria, data);
        return await this.categoriaRepository.save(categoria);
    }

    async remove(id: number): Promise<void> {
        const categoria = await this.findOne(id);
        await this.categoriaRepository.remove(categoria);
    }
}
