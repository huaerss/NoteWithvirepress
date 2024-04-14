# Nest中的全局拦截以及局部拦截器配置

## 局部拦截器

>在Nest中，我们可以通过装饰器的方式来为控制器或者方法添加拦截器，这种方式我们称之为局部拦截器.局部拦截器只会对添加了装饰器的控制器或者方法生效，不会对整个应用程序生效

### 创建一个局部拦截器

``` typescript
nest g middleware logger //使用nest-cli创建一个中间件
// 得到logger.middleware.ts文件
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; //引入express的Request,Response,NextFunction作为参数TS类型

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

```

### 注入局部拦截器到指定模块中

在需要注册的模块的 xxxx.module.ts中引入LoggerMiddleware

三种方式注册局部拦截器

``` typescript
//xxxx.module.ts 中
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
//在exports中添加LoggerMiddleware
export class LoginModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('login'); //过滤login路由 但是过滤不到login下的子路由
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'login', method: RequestMethod.GET }); //过滤login路由下的GET请求
    consumer.apply(LoggerMiddleware).forRoutes(LoginController); //过滤一整个控制器
  }
}
```

## 全局拦截器

>全局拦截器是在整个应用程序中都会生效的拦截器，我们可以通过全局拦截器来实现一些全局的功能，比如日志记录、异常处理 Token校验等

### 创建一个全局拦截器 类似express中的拦截器

``` typescript
//main.ts中
import { Request, Response, NextFunction } from 'express';

function GobalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('全局中间件');
  next();
}


```

### 使用全局拦截器

``` typescript
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets('public');
  app.use(GobalMiddleware);
  await app.listen(3000);
}
bootstrap();
```
