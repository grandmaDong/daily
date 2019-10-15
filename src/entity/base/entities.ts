import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, Index, Column } from 'typeorm'

export abstract class IEntity extends BaseEntity {
    @CreateDateColumn({ type: 'timestamp' })
    readonly createdAt: Date;
  
    @PrimaryGeneratedColumn()
    readonly id: number;
}

export abstract class RemoveableEntity extends BaseEntity {
    @Index()
    @Column({type: 'timestamp', nullable: true, precision: 6})
    deletedAt: Date
}