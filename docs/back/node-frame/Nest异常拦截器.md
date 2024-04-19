# Nest 全局状态异常拦截器

## 创建全局状态异常拦截器

例如/src/common/filter.ts

导出一个  `filter` 类 使用`implements  ExceptionFilter` 进行约束 并使用@Catch()装饰器指定拦截的异常类型
filter implements ExceptionFilter 在ts 中的意思是 filter 类实现了 ExceptionFilter 接口

``` ts
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException) // 意思是拦截 HttpException 类型的异常
export class filter  implenments ExceptionFilter {
  //   实现 ExceptionFilter的catch
    catch(exception: HttpException, host: ArgumentsHost) {
          const ctx = host.switchToHttp();  // 获取上下文 
          const response = ctx.getResponse<Response>(); // 获取响应对象
          const request = ctx.getRequest<Request>(); // 获取请求对象
          const status = exception.getStatus(); // 获取异常状态码
          response.status(status).json({ // 返回异常信息
            statusCode: status, // 状态码
            timestamp: new Date().toISOString(), // 时间戳
            data: exception.message, // 异常信息
            path: request.url, /// 请求路径
          });
    }

}
```

## 使用全局状态异常拦截器

在`main.ts`中 使用`app.useGlobalFilters()`方法注册全局状态异常拦截器

先引入刚刚写好的filter

```ts
import { filter } from './common/filter';

app.useGlobalFilters(new filter()); // 注册全局状态异常拦截器 因为是对象 所以要new
```
