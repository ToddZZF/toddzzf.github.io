---
layout: post
title: 尝试Hugo
date: 2022-05-25 14:34:00 +0800
category: document
thumbnail: rainbow_dash.png
icon: note
summary: " "
indent: True
---

## Hugo入门

自从我开始写博客以来，我一直使用的是 [Jekyll](https://jekyllrb.com/)，因为 github page 用的就是 Jekyll，我不需要在本地生成静态页面。但当我开始自己设计主题后，Jekyll 繁琐的安装方式和非常慢的生成页面的速度，让我很不爽。因此我决定尝试使用 [Hugo](https://gohugo.io/). Hugo 是由 Go 编写的，并且运行速度很快（宣传生成一篇文章只需 1ms）。Hugo 的安装方式十分简单，下载一个 exe 文件，然后添加到 PATH 里即可。可以用以下命令验证安装是否成功：

```sh
$ hugo version
hugo v0.99.1-d524067382e60ce2a2248c3133a1b3af206b6ef1 windows/amd64 BuildDate=2022-05-18T11:18:14Z VendorInfo=gohugoio
```

Hugo 建立静态网站的步骤和 Jekyll 很类似，都是 init -> write -> generate -> serve。可以跟着官网的 [Quick Start](https://gohugo.io/getting-started/quick-start/) 实践一下。

Hugo 的主题管理用的是 git submodule，并且在配置文件 `config.toml` 中设置 `theme = "[your theme]"`。顺便提一下 [toml](https://toml.io/cn/) 是一种与 json、yaml 类似的配置文件格式。（尽管我个人更喜欢yaml，因为 toml 的表必须写在最后面，让我很难受）

Hugo 的文章放在 `/content/post/` 下，写完后用 `hugo server -D` 来预览，地址是 <http://localhost:1313/>，预览是实时更新的。

Hugo 提供了迁移命令 `import`，可以将其他博客项目转换为 Hugo 项目，命令格式是 `hugo import jekyll JEKYLL_ROOT_PATH TARGET_PATH`

## Hugo开发

### Hugo命令

```sh
hugo new site [site name] # 新建一个 site name 网站
hugo # 在 /public/ 文件夹中生成页面
hugo server # 运行一个实时更新的服务器
```

以上两个命令可以和以下参数结合：

- `-D`：生成草稿（Drafts）
- `-E`：生成过期文章（Expired）
- `-F`：生成未来文章（Future）

### 项目结构

```bash
.
├── archetypes # 头信息模板
├── config.toml # 配置文件
├── content # 博文
├── data # 数据
├── layouts # 样式
├── static # 静态文件
└── themes # 主题
```

### 内容管理

#### Page Bundles

> [官方文档](https://gohugo.io/content-management/page-bundles/)

Page Bundles 用于组织页面资源。Page Bundles 分为 Leaf Bundle 和 Branch Bundle。两者区别如下：

|                 | Leaf Bundle                      | Branch Bundle                      |
| --------------- | -------------------------------- | ---------------------------------- |
| 用法            | 单页内容和附件的集合             | 一系列内容的集合（比如 home page） |
| Index file name | `index.md`                       | `_index.md`                        |
| 允许的资源      | page 和 non-page（图片等）       | non-page（图片等）                 |
| 资源存放的位置  | leaf bundle 文件夹内的任何文件夹 | 只能存放在 branch bundle 的文件夹，与 `_index.md` 同级 |
| Layout 类型| single | list |
| 示例 | `/content/posts/my-post/index.md` | `content/posts/_index.md` |
| 非index文件 | Accessed only as page resources | Accessed only as regular pages |

简单来说，如果只是单篇博文，那么就用 Leaf Bundle；如果是多篇博文，那就用 Branch Bundle. 由于 `/content/` 本身就包含了所有的博文，所以它应该是 Branch Bundle（我们应该建立一个 `/content/_index.md`）。

以下是 Leaf Bundle 示例：

```
content/
├── about
│   ├── index.md
├── posts
│   ├── my-post
│   │   ├── content1.md
│   │   ├── content2.md
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── my-other-post
│       └── index.md
│
└── another-section
    ├── ..
    └── not-a-leaf-bundle
        ├── ..
        └── another-leaf-bundle
            └── index.md
```

以下是 Branch Bundle 示例：

```
content/
├── branch-bundle-1
│   ├── branch-content1.md
│   ├── branch-content2.md
│   ├── image1.jpg
│   ├── image2.png
│   └── _index.md
└── branch-bundle-2
    ├── _index.md
    └── a-leaf-bundle
        └── index.md
```

相比之下，Jekyll 是将博文放在 `_post`，而图片放在其他文件夹，这点就不太好，图片一多就容易乱。

#### Page Resources

> [官方文档](https://gohugo.io/content-management/page-resources/)

页面资源（图片、其他页面、文档等）可以通过 Page Bundle 访问，但不同 Page Bundle 的页面资源不互通。有三种方法可以获得页面资源：

```go
// 通过文件类型
{{ .Resources.ByType "image" }}
// 通过文件名匹配，支持模糊匹配
{{ .Resources.Match "images/*" }}
{{ .Resources.Match "**/sunset.jpg" }}
// 通过文件名匹配，但返回第一个匹配的文件
{{ .Resources.GetMatch "images/*" }}
```

#### Front Matter

> [官方文档](https://gohugo.io/content-management/front-matter/)

Hugo 的 Front Matter 和 Jekyll 一样也可以用 yaml。

以下是部分常用的预定义的 Front Matter 变量（除了这些之外也可以自定义变量）：

- `date`：日期
- `expiryDate`：过期日期（过了过期日期文章就看不了）
- `publishDate`：出版日期（没到出版日期文章就看不了）
- `lastmod`：最后修改时间
- `draft`：是否是草稿。如果设置为 `true`，则不会生成页面。

- `title`：文章标题
- `type`：文章类型（如果没设置，则默认是文件夹名）
- `keyword`：文章关键字
- `description`：文章描述

- `images`：与文章相关的一组图片，用于 [Internal Templates](https://gohugo.io/templates/internal)
- `audio`：与文章相关的一组音频，用于 [Internal Templates](https://gohugo.io/templates/internal)
- `videos`：与文章相关的一组视频，用于 [Internal Templates](https://gohugo.io/templates/internal)

- `aliases`：替代地址（alias直译是别名），Hugo 会在替代地址处生成一个跳转网页，当访问替代地址时会跳转到原页面地址。[详情](https://gohugo.io/content-management/urls/#aliases)

```yaml
---
aliases:
  - /posts/my-original-url/
  - /2010/01/01/even-earlier-url.html
---
```

- `cascade`：一组会传递给子页面的变量（和 Jekyll 中的默认变量差不多），我们可以用 `_target` 为特定的子页面设置不同变量。[详情](https://gohugo.io/content-management/front-matter/#front-matter-cascade)。

```yaml
cascade:
  - _target:
      kind: page
      lang: en
      path: /blog/**
    background: yosemite.jpg
  - _target:
      kind: section
    background: goldenbridge.jpg
```

- `layout`：页面布局。如果没有的话，就采用与 section 名相同的 layout。更多请看 [Hugo Layouts Lookup Rules](https://gohugo.io/templates/lookup-order/)

- `weight`：用于整理文章。必须是非 0 值，0 表示未设置 weight（默认的排序权重是：Weight > Date > LinkTitle > FilePath）

- `_build`：可以指定页面的 Build Options，有两个子变量 `list` 和 `render`，用法见 [use cases](https://gohugo.io/content-management/build-options/#illustrative-use-cases)

### 图像处理

> [官方文档](https://gohugo.io/content-management/image-processing/)

得益于 go 自带的图像处理库，我们可以在文章内对文章进行处理，比如裁剪、滤镜、压缩、获取Exif信息（这个在相册中非常有用）

### Archetypes

> [官方文档](https://gohugo.io/content-management/archetypes/)

Archetypes 中文是原型，当使用 `hugo new` 命令新建一个文章时，会使用 `archetypes` 中的文件来初始化文件，比如如果定义一个 `archetypes/newsletter.md`：

```yaml
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
```

那么当在 `/content/newsletter/` 内用命令行新建文章时，就会自动填写 front matter（再也不同复制粘贴了）。

特殊的，hugo 支持将文件夹作为 archetype，用的时候要用 `hugo new --kind [文件夹]` 来指定。

### template

> [官方文档](https://gohugo.io/templates/introduction/)

Hugo 使用 Go 的 [html/template](https://pkg.go.dev/html/template) 和 [text/template](https://pkg.go.dev/text/template) 库作为模板的基础。

与 Liquid 一样，模板用两个花括号 `{{  }}` 包裹。如果要去除空格，可以用 `{{-  -}}`，也可以只去除单边空格，比如：

```go
{{23 -}} < {{- 45}}
//output:
//23<45
```

#### Action

Action 介绍了一些语句，下面的 pipeline 可以看作 Liquid 里的过滤器（可以简单理解为变量、函数调用etc）。

```go
{{/* a comment */}}
    注释，执行时会忽略。可以多行。注释不能嵌套，并且必须紧贴分界符始止，就像这里表示的一样。

{{pipeline}}
    pipeline的值的默认文本表示会被拷贝到输出里。
  
{{if pipeline}} T1 {{end}}
    如果pipeline的值为empty，不产生输出，否则输出T1执行结果。不改变dot的值。
    Empty值包括false、0、任意nil指针或者nil接口，任意长度为0的数组、切片、字典。

{{if pipeline}} T1 {{else}} T0 {{end}}
    如果pipeline的值为empty，输出T0执行结果，否则输出T1执行结果。不改变dot的值。

{{if pipeline}} T1 {{else if pipeline}} T0 {{end}}
    用于简化if-else链条，else action可以直接包含另一个if；等价于：
        {{if pipeline}} T1 {{else}}{{if pipeline}} T0 {{end}}{{end}}

{{range pipeline}} T1 {{end}}
    pipeline的值必须是数组、切片、字典或者通道。
    如果pipeline的值其长度为0，不会有任何输出；
    否则dot遍历数组、切片、字典或者通道的每一个成员元素并执行T1；
    如果pipeline的值为字典，且键可排序的基本类型，元素也会按键的顺序排序。

{{range pipeline}} T1 {{else}} T0 {{end}}
    pipeline的值必须是数组、切片、字典或者通道。
    如果pipeline的值其长度为0，不改变dot的值并执行T0；否则dot会遍历其中的元素并执行T1。

{{break}}
    提前结束{{range pipeline}}的所有遍历

{{continue}}
    提前结束{{range pipeline}}的当次遍历

{{define "name"}} T1 {{end}}
    定义为name的模板

{{template "name"}}
    执行名为name的模板，提供给模板的参数为nil，如模板不存在输出为""

{{template "name" pipeline}}
    执行名为name的模板，提供给模板的参数为pipeline的值。

{{block "name" pipeline}} T1 {{end}}
 先定义一个名为name的模板，
    {{define "name"}} T1 {{end}}
 再将pipeline作为参数，执行该模板
    {{template "name" pipeline}}

{{with pipeline}} T1 {{end}}
    如果pipeline为empty不产生输出，否则将dot设为pipeline的值并执行T1。不修改外面的dot。

{{with pipeline}} T1 {{else}} T0 {{end}}
    如果pipeline为empty，不改变dot并执行T0，否则dot设为pipeline的值并执行T1。
```

#### Arguments

参数代表一个简单的，由下面的某一条表示的值：

- go语法的布尔值、字符串、字符、整数、浮点数、虚数、复数，视为无类型字面常数，字符串不能跨行
- 关键字nil，代表一个go的无类型的nil值
- 字符'.'（句点，用时不加单引号），代表dot的值
- 变量名，以美元符号起始加上（可为空的）字母和数字构成的字符串，如：$piOver2和$；
  执行结果为变量的值，变量参见下面的介绍
- 结构体数据的字段名，以句点起始，如：.Field；
  执行结果为字段的值，支持链式调用：.Field1.Field2；
  字段也可以在变量上使用（包括链式调用）：$x.Field1.Field2；
- 字典类型数据的键名；以句点起始，如：.Key；
  执行结果是该键在字典中对应的成员元素的值；
  键也可以和字段配合做链式调用，深度不限：.Field1.Key1.Field2.Key2；
  虽然键也必须是字母和数字构成的标识字符串，但不需要以大写字母起始；
  键也可以用于变量（包括链式调用）：$x.key1.key2；
- 数据的无参数方法名，以句点为起始，如：.Method；
  执行结果为dot调用该方法的返回值，dot.Method()；
  该方法必须有1到2个返回值，如果有2个则后一个必须是error接口类型；
  如果有2个返回值的方法返回的error非nil，模板执行会中断并返回给调用模板执行者该错误；
  方法可和字段、键配合做链式调用，深度不限：.Field1.Key1.Method1.Field2.Key2.Method2；
  方法也可以在变量上使用（包括链式调用）：$x.Method1.Field；
- 无参数的函数名，如：fun；
  执行结果是调用该函数的返回值fun()；对返回值的要求和方法一样；函数和函数名细节参见后面。
- 上面某一条的实例加上括弧（用于分组）
  执行结果可以访问其字段或者键对应的值：
      print (.F1 arg1) (.F2 arg2)
      (.StructValuedMethod "arg").Field

#### Pipeline

Pipeline是一个（可能是链状的）command序列。Command可以是一个简单值（argument）或者对函数或者方法的（可以有多个参数的）调用：

```go
Argument
    执行结果是argument的执行结果
.Method [Argument...]
    方法可以独立调用或者位于链式调用的末端，不同于链式调用中间的方法，可以使用参数；
    执行结果是使用给出的参数调用该方法的返回值：dot.Method(Argument1, etc.)；
functionName [Argument...]
    执行结果是使用给定的参数调用函数名指定的函数的返回值：function(Argument1, etc.)；
```

pipeline可以链式执行，用管道符 `|` 隔开（与 Liquid 一样）在一个链式的pipeline里，每个command的结果都作为下一个command的最后一个参数。pipeline最后一个command的输出作为整个管道执行的结果。

#### Variables

Action里可以初始化一个变量来捕获管道的执行结果。变量无论是定义还是使用时都要在前面加 `$`。变量初始化语法如下：

```go
$variable := pipeline
```

变量可以重新赋值：

```go
$variable = pipeline
```

如果"range" action初始化了1个变量，该变量设置为迭代器的每一个成员元素，如果初始化了逗号分隔的2个变量：

```go
range $index, $element := pipeline
```

这时，\$index和\$element分别设置为数组/切片的索引或者字典的键，以及对应的成员元素。注意这和go range从句只有一个参数时设置为索引/键不同！

一个变量的作用域只到声明它的控制结构（"if"、"with"、"range"）的"end"为止，如果不是在控制结构里声明会直到模板结束为止。子模板的调用不会从调用它的位置（作用域）继承变量。

模板开始执行时，$会设置为传递给Execute方法的参数，就是说，dot的初始值。

#### Functions

预定义的全局函数：

```raw
and
    函数返回它的第一个empty参数或者最后一个参数；
    就是说"and x y"等价于"if x then y else x"；所有参数都会执行；
or
    返回第一个非empty参数或者最后一个参数；
    亦即"or x y"等价于"if x then x else y"；所有参数都会执行；
not
    返回它的单个参数的布尔值的否定
len
    返回它的参数的整数类型长度
index
    执行结果为第一个参数以剩下的参数为索引/键指向的值；
    如"index x 1 2 3"返回x[1][2][3]的值；每个被索引的主体必须是数组、切片或者字典。
print
    即fmt.Sprint
printf
    即fmt.Sprintf
println
    即fmt.Sprintln
html
    返回其参数文本表示的HTML逸码等价表示。
urlquery
    返回其参数文本表示的可嵌入URL查询的逸码等价表示。
js
    返回其参数文本表示的JavaScript逸码等价表示。
call
    执行结果是调用第一个参数的返回值，该参数必须是函数类型，其余参数作为调用该函数的参数；
    如"call .X.Y 1 2"等价于go语言里的dot.X.Y(1, 2)；
    其中Y是函数类型的字段或者字典的值，或者其他类似情况；
    call的第一个参数的执行结果必须是函数类型的值（和预定义函数如print明显不同）；
    该函数类型值必须有1到2个返回值，如果有2个则后一个必须是error接口类型；
    如果有2个返回值的方法返回的error非nil，模板执行会中断并返回给调用模板执行者该错误；
```

二元比较运算也被定义为函数：

```raw
eq      如果arg1 == arg2则返回真
ne      如果arg1 != arg2则返回真
lt      如果arg1 < arg2则返回真
le      如果arg1 <= arg2则返回真
gt      如果arg1 > arg2则返回真
ge      如果arg1 >= arg2则返回真
```

为了简化多参数相等检测，eq（只有eq）可以接受2个或更多个参数，它会将第一个参数和其余参数依次比较，返回下式的结果：

```go
arg1==arg2 || arg1==arg3 || arg1==arg4 ...
```

（和go的||不一样，不做惰性运算，所有参数都会执行）

更多 function 请参考 [functions | Hugo](https://gohugo.io/categories/functions)

#### 常用语句

拼接字符串

```go
//to get a output like $b$c
$a := printf "%s%s" $b $c
//or
$a := printf "%s" $c | printf "%s%s" $b | printf "%s"
```
