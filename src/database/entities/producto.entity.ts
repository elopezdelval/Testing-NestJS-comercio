import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from './categoria.entity';

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column()
    categoria_id: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'categoria_id' })
    categoria: Categoria;
}
