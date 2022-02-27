---
layout: home
---

{%- include navigation.html navigation=site.data.index_nav -%}

<div class="flex flex-col space-y-8">
    {% assign foods = site.food | reverse %}
    {%- for post in foods -%}
    <div class="relative flex items-stretch border-b border-white/20">
        <img class="absolute left-0 w-20 lg:w-32 h-full border-l border-t border-white/20 object-cover"
            src="{{ post.thumbnail | default: '/style/images/bg.png'  | relative_url }}">
        <div class="ml-24 lg:ml-36">
            <a class="hover:underline" href="{{ post.url | relative_url }}">
                <div class="text-2xl font-semibold">{{ post.title }}</div>
            </a>
            <div class="mb-4 text-base text-[#868E96]">{{ post.date | date_to_string }}</div>
            <div class="mb-4 text-lg text-[#DEE2E6]">{{ post.excerpt | strip_html | strip_newlines | truncate:
                site.excerpt_max_num | default: '&emsp;'}}</div>
        </div>
    </div>
    {%- endfor -%}

    {%- include pagination.html -%}
</div>