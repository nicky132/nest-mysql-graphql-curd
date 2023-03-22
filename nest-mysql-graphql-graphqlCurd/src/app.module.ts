import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 导出orm模块
import { TypeOrmModule } from '@nestjs/typeorm';
// nest g resource modules/user 命令自动注入
import { UserModule } from './modules/user/user.module';
// 导入实体到typeorm配置中，数据库自动创建user表
import { UserEntity } from './modules/user/entities/user.entity';

// 配置graphql
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// 配置graphql;
// 查看：http://127.0.0.1:3000/graphql 可以该可视化工具测试graphql
// https://docs.nestjs.com/graphql/resolvers
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
