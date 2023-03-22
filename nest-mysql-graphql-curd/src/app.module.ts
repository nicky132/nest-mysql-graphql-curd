import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 导出orm模块
import { TypeOrmModule } from '@nestjs/typeorm';
// nest g resource modules/user 命令自动注入
import { UserModule } from './modules/user/user.module';
// 导入实体到typeorm配置中，数据库自动创建user表
import { UserEntity } from './modules/user/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hhq87776153*', // 数据库密码，自己定义的
      database: 'nest-mysql-graphql', // 数据库名称，提前建好
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
