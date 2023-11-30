# 后端数据逻辑
- 查询
  - 数据库.collection(name).get()
  - where 限制条件
  - count
  注册 name + password
  where({name}).count
  {total} = await where({name}).count
  if (total >= ) {return}
  - limit 数量
  第五页 .offset((page-1)*size).limit(size)