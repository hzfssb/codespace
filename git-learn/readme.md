1.git init 初始化本地仓库（让git掌管文件夹）
   -git-learn 工作区
   .git 隐藏文件夹，代码仓库
2.git status 查看当前文件状态（当我们在写代码时，有可能会改到别人的代码，摸了下鱼，了解下当前仓库状态
对比修改：git diff,在add之前，再次确认你改了哪些
3.git add . 提交所有的文件到git暂存区
4.git commit -m '你的注释'  将暂存区的代码提交到master区域
3，4为什么要分两步
1.py
2.vue
两个文件
git add 1.py
git add 2.vue
git commit -m ''老板要看（一上午3次大概好）


5.git push origin master 将文件推送到远程仓库