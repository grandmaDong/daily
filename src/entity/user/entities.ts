import {Entity, PrimaryGeneratedColumn, Column, OneToMany, Index} from "typeorm";
import { Blog } from "../blog/entities";
import { IEntity } from "../base/entities";

@Entity()
export class User extends IEntity {

    @Index()
    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    age: number;

    @Column()
    city: string;

    @Column({nullable: true})
    avatar: string;

    @Column({ type: 'timestamp' })
    readonly createdAt: Date;

    @Column({nullable: true, type: "varchar", length: 30})
    signature: string;

    @OneToMany(type => Blog, blog => blog.user)
    blogs: Blog[];
}
