---
sidebar_positon: 1
---

# 基础语法

## 变量
Go语言中的变量需要声明后才能使用，同一个作用域内不能重复声明，变量声明后必须使用。

### 声明
```golang
var 变量名 变量类型

var name string
var age int
var ok bool

// 多个声明
var (
    name string
    age int
    ok bool
)
```

### 变量初始化
Go语言在声明变量时，会在对应的内存进行初始化，整型和浮点型默认值为`0`，字符串默认值为`空字符串`，布尔型默认值为`false`，切片、函数、指针默认值为`nil`。

声明变量并指定初始值
```golang
var 变量名 类型 = 表达式

var name string = "golang"
var age = 0     // 省略类型，编译器会根据右边的值来自动推导变量类型
```

只能在函数内使用，可以用`:=`声明初始化变量
```golang
package main
import "fmt"
func main () {
    name := "golang"
    age := 20
    fmt.Println(name, age)
}
```

### 匿名变量
匿名变量用一个下划线`_`表示，用于忽略某个值。匿名变量不占用命名空间，不分配内存，可以重复声明。

## 常量
常量是不变的值，用于定义程序运行期间不改变的值，**常量在定义时必须赋值**。
```golang
const z = 200
const w = 500

// 多个声明
const (
    z = 200
    w = 500
)
```

Go语言中定义一个多行字符串，必须使用`反引号`，反引号换行会被作为字符串中的换行，其内的转义字符无效。
```
zw := `abc
zzz
www
`
```

## 类型转换
Go语言只有强制类型转换，如下:
```golang
T(表达式)   // T表示要转换的类型
```

## Fmt
- Println：一次输出多个值，中间有空格，会自动换行
- Print：一次输出多个值，中间没有空格，不会自动换行
- Printf：格式化输出
- Sprintf：格式化输出，不打印返回值，常用于变量拼接、赋值
