// src/modules/user/entities/user.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    comment: '用户id',
  })
  id: number;

  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '邮件',
  })
  email: string;

  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '密码',
  })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: true,
    comment: '添加时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    comment: '更新时间',
  })
  updatedAt: Date;
}
