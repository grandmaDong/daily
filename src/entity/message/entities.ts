import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "../user/entities";
import { IEntity } from "../base/entities";

@Entity()
export class Message extends IEntity {

    @Column({ type: 'timestamp' })
    readonly createdAt: Date;

    @Column()
    content: string;

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.blogs)
    user: User;
}
