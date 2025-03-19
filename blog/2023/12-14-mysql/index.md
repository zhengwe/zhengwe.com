---
slug: mysql
title: Mysql 常用语句
authors: [goblin]
tags: [linux]
---

Mysql的infromation_schema库，可以查询数据库中每个表占用的空间、表记录行数
- TABLE_SCHEMA: 数据库名
- TABLE_NAME: 表名
- ENGINE: 使用的存储引擎
- TABLES_ROWS: 记录数
- DATA_LENGTH: 数据大小
- INDEX_LENGTH: 索引大小

#### 查看所有库大小
```sql
use information_schema;
select concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES;
```

#### 查看指定库大小
```sql
select concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES where table_schema='xxx';
```

#### 查看指定库的指定表的大小
```sql
select concat(round(sum(DATA_LENGTH/1024/1024),2),'MB') as data  from TABLES where table_schema='xxx' and table_name='xxx';
```

#### 查看指定库的索引大小
```sql
SELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), ' MB') AS 'Total Index Size' FROM TABLES  WHERE table_schema = 'xxx';
```

#### 查看指定库的指定表的索引大小
```sql
SELECT CONCAT(ROUND(SUM(index_length)/(1024*1024), 2), ' MB') AS 'Total Index Size' FROM TABLES  WHERE table_schema = 'xxx' and table_name='xxx';
```

#### 查看一个库中的情况
```sql
SELECT CONCAT(table_schema,'.',table_name) AS 'Table Name', CONCAT(ROUND(table_rows/1000000,4),'M') AS 'Number of Rows', CONCAT(ROUND(data_length/(1024*1024*1024),4),'G') AS 'Data Size', CONCAT(ROUND(index_length/(1024*1024*1024),4),'G') AS 'Index Size', CONCAT(ROUND((data_length+index_length)/(1024*1024*1024),4),'G') AS'Total'FROM information_schema.TABLES WHERE table_schema LIKE 'xxx';
```

#### 查看非 Sleep 状态的链接，按消耗时间倒序展示
使用`show full processlist`可以查看所有链接情况
```sql
select id, db, user, host, command, time, state, info
from information_schema.processlist
where command != 'Sleep'
order by time desc; 
```

#### 查询执行时间超过2分钟的线程，然后拼接成kill语句
```sql
select concat('kill ', id, ';')
from information_schema.processlist
where command != 'Sleep'
and time > 2*60
order by time desc;
```

#### 快速杀死所有进程
```sql
mysql -e "show full processlist;" -ss | awk '{print "KILL "$1";"}'| mysql
```