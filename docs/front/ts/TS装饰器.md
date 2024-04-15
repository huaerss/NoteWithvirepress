# TypeScript  Decorator 装饰器详解

## 装饰器的配置项

需要再tsconfig.json中开启experimentalDecorators选项
装饰器执行顺序为由内到外

```json
{
    "experimentalDecorators": true
}
```

## 类 装饰器

### 1. 无参数的类装饰器

类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

```ts
const watch : classDecorator = (target: any) => {
    console.log('target:', target)
}


@Watch
class init {
    
}
new init()

```

### 2. 有参数的类装饰器  也叫 装饰器工厂 需要使用柯里化函数

```ts
const watch = (str:string) => {
    const demo = () => {
      console.log('demo'.str) // demo test
    }
    return demos
}


@watch('test')
class init {
}
new init()
```

### 使用装饰器Decorator的好处 (常问题)

- 可以不破坏原有的代码结构
- 可以在不改变原有代码的情况下，增加新的功能

``` ts

// 需要在target.propertype上添加属性
const watch = (name: string) => {
    const demo:ClassDecorator =(target)=>{
        target.prototype.name = name;
    }
    return demo;
}

@watch('demo')
class demo {}
const demo1 = new demo();
console.log((demo1 as any).name); 
```

## 方法装饰器

方法装饰器会返回三个参数，分别是target, key, descriptor

- 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
- 成员的名字。
- 成员的属性描述符。

### 1. 无参数的方法装饰器

- 需要注意 MethodDecorator 是比 ClassDecorator 优先级高的

```ts

const watch:MethodDecorator = (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log('target:', target)
    console.log('key:', key)
    console.log('descriptor:', descriptor)
}
class demo {
    @watch
    public test() {
        console.log('test')
    }
}

```

### 有参数的方法装饰器

```ts
import axios from "axios";


const watch = (name: string) => {
    const demo:ClassDecorator =(target)=>{
        target.prototype.name = name;
    }
    return demo;

}

const GET = (url:string)=>{
    const getApi:MethodDecorator = (target, Key, descriptor:PropertyDescriptor)=>{
        //  将axios 请求的响应传递给descriptor.value
        axios.get(url).then((res)=>{
            descriptor.value(res.data);
        })

    }
    return getApi;

}

@watch('demo')

class demo {
    @GET('http://localhost:5500/')
    get(resdata:string){
        console.log('Get',resdata);
    }
}
const demo1 = new demo();
console.log((demo1 as any).name);
```

## 参数装饰器 ParamsDecorator

参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

### 安装依赖

```bash
npm install reflect-metadata  //用于获取参数的元数据
```

### 使用参数装饰器

```ts
import axios from "axios";
import 'reflect-metadata'

const watch = (name: string) => {
    const demo:ClassDecorator =(target)=>{
        target.prototype.name = name;
    }
    return demo;
}

const GET = (url:string)=>{
    const getApi:MethodDecorator = (target, Key, descriptor:PropertyDescriptor)=>{
        const result = Reflect.getMetadata('resultkey',target); 
        console.log(result);
        //  将axios 请求的响应传给get方法
        axios.get(url).then((res)=>{
            descriptor.value(result? res.data[result]:res.data);
        })
    }
    return getApi;
}


const Result = (prototypekey:string)=>{
     const fn:ParameterDecorator = (target,key,index)=>{
        Reflect.defineMetadata('resultkey',prototypekey,target); // 保存参数的元数据 第一个参数是key 第二个参数是value 第三个参数是target
     }
     return fn;
}
@watch('demo')
class demo {
    @GET('http://localhost:5500/')
    get(@Result('somethink') data:string){
        console.log(data);
    }
}
const demo1 = new demo();
```
