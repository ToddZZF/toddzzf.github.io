---
layout: post
title: A Example Post
date: 2019-01-01 00:00:00 +0800
category: tutorial
thumbnail: /style/image/thumbnail.png
icon: book
mathjax: true
chart: true
mermaid: true
---


* content
{:toc}

Test Excerpt
<!--more-->

## sub title

page...

## about thumbnail

add the thumbnail url

## about icon

such as book, code, web, chat, note, game, link, design, image

# Test Enhancement

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$x_1 = {-b + \sqrt{b^2-4ac} \over 2a}$$
$$x_2 = {-b - \sqrt{b^2-4ac} \over 2a} \notag$$

```mermaid
graph TB;
    A[Do you have a problem in your life?]
    B[Then don't worry]
    C[Can you do something about it?]
    A--no-->B;
    A--yes-->C;
    C--no-->B;
    C--yes-->B;
```

```chart
{
  "type": "polarArea",
  "data": {
    "datasets": [
      {
        "data": [
          11,
          16,
          7,
          3,
          14
        ],
        "backgroundColor": [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        "label": "My dataset"
      }
    ],
    "labels": [
      "Red",
      "Green",
      "Yellow",
      "Grey",
      "Blue"
    ]
  },
  "options": {}
}
```