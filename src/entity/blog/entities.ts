import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "../user/entities";
import { IEntity } from "../base/entities";

@Entity()
export class Blog extends IEntity {

    @Column({ type: 'timestamp' })
    readonly createdAt: Date;

    @Column({length: 15})
    title: string;

    @Column()
    content: string;

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.blogs)
    user: User
}
