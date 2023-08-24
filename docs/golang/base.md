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
常量是不变的值，用于定义程序运行期间不改变的值，常量通常为大写，**常量在定义时必须赋值**。
```golang
const HTTP_STATUS_OK = 200
const HTTP_STATUS_BADGATEWAY = 500

// 多个声明
const (
    HTTP_STATUS_OK = 200
    HTTP_STATUS_BADGATEWAY = 500
)
```

Go语言中定义一个多行字符串，必须使用`反引号`，反引号换行会被作为字符串中的换行，其内的转义字符无效。
```
zw := `abc
zzz
www
`
```

## byte & rune
uint8类型，也是byte型，表示一个ASCII字符

rune类型，表示一个UTF-8字符

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

## 数组
数组在声明时就确定，使用时可以修改，数组大小不能变化，数组是值类型
```golang
var a [3]int  //数组长度一旦定义，不能改变
var b = [2]int{1, 2}  //初始化指定值
var c = [...]int{1, 2, 3}  //自动推导数组长度
```

### 数组遍历
```golang
var a = [...]string{"golang", "java", "rust"}
//方法一：for循环遍历
for i := 0; i < len(a); i++ {
    fmt.Println(a[i])
}

//方法二：for range
for index, value := range a {
    fmt.Println(index, value)
}
```

### 多维数组
```golang
a := [3][2]string {
    {"golang", "rust"},
    {"vue", "react"},
    {"k8s", "p8s"},
}
fmt.Println(a)
fmt.Println(a[2][1]) //支持索引取值

for _, value := range a {
    for _, value1 := range value {
        fmt.Printf("%s\t", value1)
    }
    fmt.Println()
}
```

- **数组支持"=="、"!="操作符，因为内存是初始化过**

- **[n]*T表示指针数组，*[n]T表示数组指针**

## 切片
切片是一个拥有相同类型元素的可变长度的序列，基于数组类型做的一层封装，支持自动扩缩容，是引用类型

### 切片的定义
```golang
var a []string  //声明字符串切片
fmt.Println(a == nil)  //[] true
var b = []int  //声明整型切片并初始化
fmt.Println(b == nil)  //[] false
```

- 切片之间不能比较，不能使用`==`来判断二个切片是否含有相等元素，可以和`nil`比较，一个`nil`值的切片没有底层数组，长度和容量都是0

### append
append()可以为切片动态添加元素
```golang
var a []int  //零值切片可以在append()函数直接使用，无需初始化
a = append(a, 1)  //添加一个元素
a = append(a, 2, 3, 4)  //添加多个元素
var s = []int{5, 6, 7}
a = append(a, s...)  //添加切片中的元素
```

### 删除
go语言中没有删除切片元素的专用方法，可以使用切片本身的特性来删除元素
```golang
var a = []int{1, 2, 3, 4, 5, 6, 7}
a = append(a[:2], a[5:]...)
```

## Map
map是一种无序的基于`key-value`的数据结构，map是引用类型，必须初始化才能使用

### 定义
```golang
var a = make(map[string]int, 10)
a["go"] = 10

// 判断map键是否存在
value, ok := a["go"]
if ok {
    fmt.Println(value)
    } else {
        fmt.Println("false")
    }
```

### delete函数
使用`delete()`内建函数从map中删除一组键值对
```golang
delete(map, key)
// map表示要删除键值对的map
// key表示要删除键值对的key
```

