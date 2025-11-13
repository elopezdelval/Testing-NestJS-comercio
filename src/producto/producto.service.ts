import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../database/entities/producto.entity';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) { }

    async crearProducto(datos: Partial<Producto>): Promise<Producto> {
        const nuevoProducto = this.productoRepository.create(datos);
        return this.productoRepository.save(nuevoProducto);
    }

    async obtenerProductos(): Promise<Producto[]> {
        return this.productoRepository.find({ relations: ['categoria'] });
    }

    async obtenerProductoPorId(id: number): Promise<Producto | null>{
        return this.productoRepository.findOne({
            where: { id },
            relations: ['categoria'],
        });
    }

    async actualizarProducto(id: number, datos: Partial<Producto>): Promise<Producto | null> {
        await this.productoRepository.update(id, datos);
        return this.obtenerProductoPorId(id);
    }

    async eliminarProducto(id: number): Promise<void> {
        await this.productoRepository.delete(id);
    }
}
