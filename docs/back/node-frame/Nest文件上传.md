# Nest实现文件上传

## 依赖安装包

```ts
pnpm i @nestjs/platform-express nestJs自带
pnpm i @types/multer 这两个需要安装
```

## 创建一个upload模块

```sh
nest g res upload
```

## 开始配置module配置

```ts
// 在upload.module.ts中
import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
  imports: [
    MulterModule.register({  // 注册上传模块
      storage: diskStorage({  // 上传文件的存储方式
        // 上传文件的存储方式
        destination: join(__dirname, '../../public/images'), // 上传文件的存储目录
        filename: (_, file, cb) => {
          // 上传文件的文件名
          const filename = file.originalname; // 保留原文件名
          cb(null, filename); // 回调函数
        },
      }),
    }),
  ],
})
export class UploadModule {}
```

## 配置controller

```ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('file')
  @UseInterceptors(FileInterceptor('file')) // 使用装饰器 FileInterceptor 拦截文件 file
  upload(@UploadedFile() file) { // 方法
    console.log(file);
    return '上传文件';
  }
}
```
