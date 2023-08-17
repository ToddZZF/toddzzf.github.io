---
title:  初次尝试用Github搭建博客
date:   2019-03-17 14:00:00 +0800
categories: diary
tag: [Tutorial, Diary]
music-id: 481853665
password: Todd
---

> 记录我第一次搭建博客的过程

<!-- more -->

# 为什么要搭博客？

​	博客就是QQ空间、微博、朋友圈、公众号的祖宗，但这些晚辈大多太零碎，如果你希望自己的文章能够保持连贯性，那么还是得用回1995年发明得博客。别觉得博客老土。把它看作一个网站，专属于你的网站。你可以自由地编辑网站的样式，在网页上添加各种动画图片，把它弄成你的风格。这样一想，博客貌似挺cool的。

​	传统搭博客的方法一般是去新浪博客或其他网站申请一个账号，然后往里面添加文章。但它的版式就那几种，不能自己定制，特难看。而GIthub的博客是全定制的（但限于静态博客），如果你厉害，可以自己写网页；又或者，如果你嫌麻烦，可以用别人编好的主题。这些主题来自于全世界，数量也很多，总有一款是适合你的。对了，虽然功能很强大，但Github的博客依然是免费的。

&emsp;&emsp;顺便一句，博客还是用自己的域名比较好，我以后还是学学怎么建站吧。



# 如何用Github搭博客

​	首先申请Github账号，然后创建一个“账号名+github.io”的repo，然后设置里就会出现相关设置，按它的步骤写就行了。具体步骤请看[傻瓜都可以利用github pages建博客](http://cyzus.github.io/2015/06/21/github-build-blog/)，我就是照着上面来做的。前面这些过程花费不到半小时。

​	然后特别操蛋的来了，下载了jekyll主题后，你需要一个一个修改页面上的文字（不然它还保留着别人博客的字），有时候根本找不到要修改的文件，这个花了我一个中午的时间去找......这里有一个特别的技巧，就是用浏览器打开博客，然后在空白处点击右键，选则“检查”，这样就可以找到相关文件了。

​	修改好后，把它提交到Github仓库，然后去setting检查一下，如果你的内容有错，它会在setting那里指示出来，按提示修改就行了。如果没问题，过1~2分钟后就可以看到自己的博客了。

&emsp;&emsp;Github博客有一定的限制，尽管普通人很难达到这个限制，但我还是写一下：

- 仓库空间不大于1G ~~（文字与多媒体分开，1G的文字都可以出书了吧）~~
- 每个月的流量不超过100G ~~（有这么多人访问，应该有能力弄服务器了吧）~~
- 每小时更新不超过 10 次 ~~（一天一更就不错了）~~



# 记录我使用的博客主题

## 第一个主题

​	我用的是[LessOrMore](https://github.com/luoyan35714/LessOrMore.git)主题，是由国人编写的，对中文支持很好，版式很简洁。大部分修改要修改的文件在根目录和\_includes文件夹里。我把原作者的一些链接改成了我社交媒体的链接（其实就只有Github和B站）。根目录的\_config.yml修改格式如下：

```bash
name: 博客名称
email: 邮箱地址
author: 作者名
url: 个人网站
### baseurl修改为项目名，如果项目是'***.github.io'，则设置为空''
baseurl: "/LessOrMore"
resume_site: 个人简历网站
github: github地址
github_username: github用户名称
FB:
  comments :
    provider : duoshuo
    duoshuo:
        short_name : 多说账户
    disqus :
        short_name : Disqus账户
```



​	每次新写文章，都要在开头加上：

```bash
---
layout: post
#标题配置
title:  标题
#时间配置
date:   2019-08-27 01:08:00 +0800
#大类配置
categories: document
#小类配置
tag: 教程
#网易云音乐，只能播放无版权保护的
music-id: 465675773
---

* content
{:toc}


我是正文。我是正文。我是正文。我是正文。我是正文。我是正文。
```

如果想要在文章里插入图片，可以这样写（路径为github内的路径）：

```markdown
![诫子书]({{ '/styles/images/jiezishu.jpg' | prepend: site.baseurl  }})
```

效果是这样的（这个只能在网页上看，本地的Markdown编辑器不支持）

![诫子书]({{ '/styles/images/jiezishu.jpg' | prepend: site.baseurl  }} "诫子书")

更多信息需要看[LessOrMore的Github](https://github.com/luoyan35714/LessOrMore.git)。



## 目前正在用的主题

&emsp;&emsp;目前正在用 NexT.Mist，关于设置什么的，可以去 [NexT官网](http://theme-next.iissnan.com/) 。文章的开头可以不用加目录



# 拓展功能

## 网易云音乐

见[https://blog.csdn.net/ds19991999/article/details/81293467](https://blog.csdn.net/ds19991999/article/details/81293467)

## 音乐

顺便说一句，原作者是不支持音乐的。但我可以（下面的是《西安人的歌》）：

<p>http://yizhibi.6chemical.com/lucyBlog/xianrendege.mp3</p>
参考了[一支笔](<https://yizibi.github.io/2018/10/15/jekyll%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E4%B8%AD%E6%B7%BB%E5%8A%A0%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E6%8F%92%E4%BB%B6/>)的博客，只需要在对应位置输入：

~~~html
<p>音乐外链url</p>
~~~

缺点是必须是音乐文件（mp3√，其他未知），可能需要云端储存。

## B站

下面是B站的框架，貌似只能在电脑上播放，还只能播360P，唉......

<div class="embed-responsive embed-responsive-4by3">
<iframe src="https://player.bilibili.com/player.html?aid=45368874&cid=79420762&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="95%" height="450"> </iframe>
</div>



## 愚弄

~~~html
<script type="text/javascript">
var crashSwitched = false;
var originalTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    if (Math.random() < parseFloat(0.25)) {
      crashSwitched = true;
      document.title = '╭(°A°`)╮ 页面崩溃啦~' + originalTitle;
      clearTimeout(titleTime);
    }
  } else {
    if (crashSwitched == true) {
      crashSwitched = false;
      document.title = '(ฅ>ω<*ฅ) 咦，又好了~' + originalTitle;
      titleTime = setTimeout(function () {
        document.title = originalTitle;
      }, 2000);
    }
  }
});
</script>
~~~

在文章的主题部分加上这个后，当读者离开标签时，有一定概率出现“╭(°A°`)╮ 页面崩溃啦~”，当回到标签后则显示“(ฅ>ω<*ฅ) 咦，又好了~”。这个是从[Liam Huang: https://liam.page/](https://liam.page/)这个博客里学的。



# 文章的分类

## 2019/07/19

文章慢慢增多，分类就很重要了。目前我所深入学习的领域还很少，只有如下几个：

* 编程语言
  * C++
  * Python
* 硬件
  * Raspberry Pi 树莓派
  * Arduino
  * 8051单片机
  * stm32f103
* 软件
  * 深度学习
  * LaTex

但随着学习的深入，肯定会有交叉领域。因此未来还是用标签分类比较好。（唉~又要换jekyll模板 ≧ ﹏ ≦）



# 未来安排

## 2019/07/19

（已换）换一个好看点的主题：[http://jekyllthemes.org/themes/jekyll-theme-next/](http://jekyllthemes.org/themes/jekyll-theme-next/) ，不得不说NexT真的是好看。这里[https://blog.csdn.net/GarfieldEr007/article/details/82875394](https://blog.csdn.net/GarfieldEr007/article/details/82875394) 也有很多好看的主题
