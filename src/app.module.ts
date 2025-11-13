import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { CategoriasModule } from './categorias/categorias.module';
import { ProductoModule } from './producto/producto.module';

@Module({
imports: [
    DatabaseModule,
    CategoriasModule,
    ProductoModule,
],
})
export class AppModule {}
