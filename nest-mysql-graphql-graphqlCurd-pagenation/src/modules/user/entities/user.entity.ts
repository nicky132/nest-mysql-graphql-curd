// src/modules/user/entities/user.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
// 定义graphql 数据模型，可以与共用user实体类
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('user')
export class UserEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({
    comment: '用户id',
  })
  id: number;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
    comment: '用户名',
    default: '',
  })
  username: string;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '邮件',
    default: '',
  })
  email: string;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '密码',
    default: '',
  })
  password: string;

  @Field()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: true,
    comment: '添加时间',
  })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    comment: '更新时间',
  })
  updatedAt: Date;
}
