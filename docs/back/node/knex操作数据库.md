# knex

> Knex是一个基于JavaScript的查询生成器，它允许你使用JavaScript代码来生成和执行SQL查询语句。它提供了一种简单和直观的方式来与关系型数据库进行交互，而无需直接编写SQL语句。你可以使用Knex定义表结构、执行查询、插入、更新和删除数据等操作。

## Knex的安装和设置

>knex支持多种数据库 pg sqlite3 mysql2 oracledb tedious

``` sh
npm install knex --save

```

读取yaml配置文件

``` sh
npm install js-yaml --save
```

``` js
import fs from 'fs'
import yaml from 'js-yaml'
const yaml = fs.readFileSync('./db.config.yaml', 'utf8')
const config = jsyaml.load(yaml)
```

连接数据库

```  js
import knex from 'knex'
const db = knex({
    client: "mysql2",
    connection: config.db
})
```

``` yaml
db:
  user: root
  password: '123456'
  host: localhost
  port: 3306
  database: test
```

## 定义表结构

``` js
db.schema.createTable('list', (table) => {
    table.increments('id') //id自增
    table.integer('age') //age 整数
    table.string('name') //name 字符串
    table.string('hobby') //hobby 字符串
    table.timestamps(true,true) //创建时间和更新时间
}).then(() => {
    console.log('创建成功')
})
```

## 使用knex 进行增删改查

``` js
app.get('/', async (req, res) => {
    const data = await db('list').select().orderBy('id', 'desc')
    const total = await db('list').count('* as total')
    res.json({
        code: 200,
        data,
        total: total[0].total,
    })
})

//新增接口
app.post('/create', async (req, res) => {
    const { name, age, hobby } = req.body
    const detail = await db('list').insert({ name, age, hobby })
    res.send({
        code: 200,
        data: detail
    })
})

//编辑
app.post('/update', async (req, res) => {
    const { name, age, hobby, id } = req.body
    const info = await db('list').update({ name, age, hobby }).where({ id })
    res.json({
        code: 200,
        data: info
    })
})
//删除
app.post('/delete', async (req, res) => {
    const info = await db('list').delete().where({ id: req.body.id })
    res.json({
        code: 200,
        data: info
    })
})

```

## 事务

你可以使用事务来确保一组数据库操作的原子性，即要么全部成功提交，要么全部回滚

``` js

db.transaction(async (trx) => {
    try {
        await trx('list').update({money: -100}).where({ id: 1 }) //A
        await trx('list').update({money: +100}).where({ id: 2 }) //B
        await trx.commit() //提交事务
    }
    catch (err) {
        await trx.rollback() //回滚事务
    }
   
})
```
