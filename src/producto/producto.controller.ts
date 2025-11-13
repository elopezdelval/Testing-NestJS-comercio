import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from '../database/entities/producto.entity';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productosService: ProductoService) {}

  @Post()
  crearProducto(@Body() datos: Partial<Producto>) {
    return this.productosService.crearProducto(datos);
  }

  @Get()
  obtenerProductos() {
    return this.productosService.obtenerProductos();
  }

  @Get(':id')
  obtenerProductoPorId(@Param('id') id: number) {
    return this.productosService.obtenerProductoPorId(id);
  }

  @Put(':id')
  actualizarProducto(@Param('id') id: number, @Body() datos: Partial<Producto>) {
    return this.productosService.actualizarProducto(id, datos);
  }

  @Delete(':id')
  eliminarProducto(@Param('id') id: number) {
    return this.productosService.eliminarProducto(id);
  }
}
