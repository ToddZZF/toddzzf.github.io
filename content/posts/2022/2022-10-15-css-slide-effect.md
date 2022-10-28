---
title: CSS 滑动效果
date: 2022-10-15 19:14:00 +0800
---

```html
<nav>
    <ol class="nav-list">
        <li {{ if $.IsHome }}class="active"{{ end }}>
            <a href="{{- `/` | absURL -}}">
                {{ with  $.Site.Params.logo }}{{ . | safeHTML }}{{ end }}
            </a>
        </li>
        {{- with $.Site.Sections -}}
        {{- range . -}}
        <li {{ if eq $.Section .Section }}class="active"{{ end }}>
            <a href="{{ .Permalink }}" title="{{ .Title }}">
                {{ with .Params.icon}}{{ . | safeHTML }}{{ end }}
            </a>
        </li>
        {{ end }}
        {{ end }}
        <li class="nav-cursor"></li>
    </ol>
</nav>
```

```css
.nav-list {
    $nav-height: 3rem;
    $nav-padding: 0.5rem;
    background-color: orange;
    list-style: none;
    display: flex;
    border-radius: 9999px;
    padding: $nav-padding;
    position: relative;

    li:not(.nav-cursor) {
        height: $nav-height;
        aspect-ratio: 1;
        overflow: hidden;
        z-index: 10;
        font-size: 1.5rem;
        color: rgb(255, 24, 24);

        a {
            display: grid;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
        }
    }

    li.nav-cursor {
        position: absolute;
        background-color: white;
        height: $nav-height;
        aspect-ratio: 1;
        border-radius: 9999px;
        visibility: hidden;
    }

    @mixin fix-cursor($left) {
        left: $left;
        visibility: visible;
    }

    $li-count: 10;

    @for $i from 1 through $li-count {
        $offset: $li-count - $i;
        $top: ($i - 1) * $nav-height +$nav-padding;

        >li:nth-child(#{$i}).active
        {
            ~li.nav-cursor {
                @include fix-cursor($top);
            }
        }
    }

    @for $i from 1 through $li-count {
        $offset: $li-count - $i;
        $top: ($i - 1) * $nav-height +$nav-padding;

        >li:nth-child(#{$i}):hover 
        {
            ~li.nav-cursor {
                @include fix-cursor($top);
            }
        }
    }
}

@media (hover: hover) {
    .nav-list>li.nav-cursor {
        transition: left 0.5s ease;
    }
}
```