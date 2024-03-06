关系数据库，行列
   用户头像
   索引,要建立，为了查询，但也不能乱建
   思考以后的查询需求，先写出select语句，再根据select语句，写出建表语句
      主键 Primary
      普通索引 首页文章列表\个人主页都要根据用户id 查头像
      唯一索引
      联合索引
  CREATE TABLE `avatar` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `minitype` varchar(255) NOT NULL,
    `filename` varchar(255) NOT NULL,
    `size` int(11) NOT NULL,
    `useId` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `useId` (`useId`)
    CONSTRAINT `avatar_useId_fk` FOREIGN KEY (`useId`) REFERENCES `user` (`id`)
  )
  CREATE TABLE `comment` (
    `id` int(11) NOT NULL AUTO_INCREMENT,`
    `content` longtext NOT NULL,
    `postId` int(11) NOT NULL,
    `userId` int(11) NOT NULL,
    `parentId` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    KEY `postId` (`postId`),
    KEY `parentId` (`parentId`),
    CONSTRAINT `comment_postId_fk` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  )
- 部署
    - 本地部署
       测试数据和服务端代码   blog.sql
    - 远程部署
        阿里云服务器
    - 分布式部署
       blog.sql  mysql  运行       