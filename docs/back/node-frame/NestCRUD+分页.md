# 使用NestJs + typeORM进行增删改查

## 使用typeORM 配置实体类

### 首先配置实体类

先配置构造函数，使用`@InjectRepository`注入实体类

```typescript
import { Login } from './entities/login.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class LoginService {
  constructor(
    @InjectRepository(Login) private readonly lgoin: Repository<Login>,
  ) {}

  create(createLoginDto: CreateLoginDto) {
    const data = new Login();
    data.username = createLoginDto.username;
    data.password = createLoginDto.password;
    return this.lgoin.save(data);
  }
  findAll(query: { keywork: string }) {
    if (!query.keywork) {
      return this.lgoin.find();
    }
    return this.lgoin.find({
      where: {
        username: Like(`%${query.keywork}%`),
      },
    });
  }
  remove(id: number) {
    return this.lgoin.delete(id);
  }
  update(updateLoginDto: UpdateLoginDto) {
    return this.lgoin.update(updateLoginDto.id, updateLoginDto);
  }
}
```

### 配置controller文件

在controller文件中配置增删改查的方法

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Session,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { Response, Request, query } from 'express';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto'; // 导入创建dto 要配置对应的实体类
import { UpdateLoginDto } from './dto/update-login.dto';// 导入创建dto 要配置对应的实体类

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('user')
  async created(@Body() createLoginDto: CreateLoginDto, @Res() res: Response) {
    const data = await this.loginService.create(createLoginDto);
    console.log('data', data);
    res.send(data);
  }
  @Get('user')
  async finall(@Query() query: { keywork: string }, @Res() res: Response) {
    console.log('queryget');
    const data = await this.loginService.findAll(query);
    res.send(data);
  }
  @Put('user')
  async update(@Body() updateLoginDto: UpdateLoginDto, @Res() res: Response) {
    const data = await this.loginService.update(updateLoginDto);
    res.send(data);
  }
  @Delete('user')
  async remove(@Query('id') id: number, @Res() res: Response) {
    const data = await this.loginService.remove(id);
    res.send(data);
  }
}
```

## 进行分页以及排序

需要注意所有查询操作都是异步的，所以需要使用`await`关键字

```typescript

  async findAll(query: { keywork: string; page: number; pageSize: number }) {
    const data = await this.lgoin.find({
      where: {
        username: Like(`%${query.keywork}%`),
      },
      order: {
        id: 'DESC', // 降序 默认为asc
      },
      take: query.pageSize,  // 每页显示多少条
      skip: query.pageSize * (query.page - 1), // 跳过多少条
    });
    const total = await this.lgoin.count({
      where: {
        username: Like(`%${query.keywork}%`),
      },
    });
    return {
      data,
      total,
    };
  }

```
