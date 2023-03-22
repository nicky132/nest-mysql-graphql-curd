// src/modules/user/user.resolver.ts
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
// 定义分页数据结构
import { UserListPaginated } from './dto/userList.paginated.gql';
@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}


  @Query(() => UserListPaginated, { name: 'userList', nullable: true })
    userList(
        @Args('page', {
        type: () => Int,
        defaultValue: 1,
        })
        page?: number,
        @Args('size', {
        type: () => Int,
        defaultValue: 20,
        nullable: true,
        })
        size?: number,
    ): Promise<UserListPaginated> {
        return this.userService.findListAndPage({
        pagination: {
            page,
            size,
        },
        });
    }
    }

  @Query(() => [UserEntity], { name: 'users', nullable: true })
  users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Query(() => UserEntity, { nullable: true })
  user(@Args('id') id: number): Promise<UserEntity> {
    return this.userService.findOne(id);
  }
}
