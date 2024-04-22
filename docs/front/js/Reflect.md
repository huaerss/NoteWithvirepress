# Reflect 反射

总结就是 Reflcet 可以操作对象的内部基本操作 /内部方法

对象有那些内部方法呢？ 可以参考 [Object 内部方法](https://262.ecma-international.org/14.0/#sec-object-internal-methods-and-internal-slots)

## 什么是内部方法

``` js
let obj = {}
obj.a = 1
// 实际上是调用了对象的 [[Set]] 方法
```

以上虽然是 obj.a = 1 的写法，但是实际上是调用了对象的 [[Set]] 方法 实际是通过obj.a去调用[[set]]而不是直接去调用了

但是 [[Set]] 方法是内部方法，我们无法直接调用，但是可以通过 Reflect 来调用

``` js
let obj = {}
Reflect.set(obj, 'a', 1)
```

## 区别

```js
const obj = {
    a: 1
}

Object.defineProperty(obj, 'b', {
    value: 2,
    enumerable: false
})
const log = Object.keys(obj) // ['a']
const log = Reflect.ownKeys(obj) // ['a', 'b']

```  
