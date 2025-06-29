<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<ol start="0">
<li><a href="#%E9%89%B4%E6%9D%83%E8%AF%B4%E6%98%8E">鉴权说明</a></li>
<li><a href="#read-only">只读接口</a></li>
<li><a href="#status">Status 接口</a></li>
<li><a href="#device">Device status 接口</a></li>
<li><a href="#storage">Storage 接口</a></li>
</ol>
<h2 id="快速跳转" tabindex="-1"><a class="header-anchor" href="#快速跳转"><span>快速跳转</span></a></h2>
<ul>
<li><a href="#api">API</a>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E8%B7%B3%E8%BD%AC">快速跳转</a></li>
<li><a href="#%E9%89%B4%E6%9D%83%E8%AF%B4%E6%98%8E">鉴权说明</a></li>
<li><a href="#read-only">Read-only</a>
<ul>
<li><a href="#query">query</a>
<ul>
<li><a href="#response">Response</a></li>
</ul>
</li>
<li><a href="#status-list">status-list</a>
<ul>
<li><a href="#response-1">Response</a></li>
</ul>
</li>
<li><a href="#metrics">metrics</a>
<ul>
<li><a href="#response-2">Response</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#status">Status</a>
<ul>
<li><a href="#status-set">status-set</a>
<ul>
<li><a href="#params">Params</a></li>
<li><a href="#response-3">Response</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#device">Device</a>
<ul>
<li><a href="#device-set">device-set</a>
<ul>
<li><a href="#params-get">Params (GET)</a></li>
<li><a href="#body-post">Body (POST)</a></li>
<li><a href="#response-4">Response</a></li>
</ul>
</li>
<li><a href="#device-remove">device-remove</a>
<ul>
<li><a href="#params-1">Params</a></li>
<li><a href="#response-5">Response</a></li>
</ul>
</li>
<li><a href="#device-clear">device-clear</a>
<ul>
<li><a href="#response-6">Response</a></li>
</ul>
</li>
<li><a href="#device-private-mode">device-private-mode</a>
<ul>
<li><a href="#params-2">Params</a></li>
<li><a href="#response-7">Response</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#storage">Storage</a>
<ul>
<li><a href="#storage-save-data">storage-save-data</a>
<ul>
<li><a href="#response-8">Response</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="鉴权说明" tabindex="-1"><a class="header-anchor" href="#鉴权说明"><span>鉴权说明</span></a></h2>
<p>任何标记了需要鉴权的接口，都需要用下面三种方式的一种传入 <strong>与服务端一致</strong> 的 <code v-pre>secret</code> <em>(优先级从上到下)</em>:</p>
<ol>
<li>请求体 <em>(<code v-pre>Body</code>)</em> 的 <code v-pre>secret</code> <em><strong>(仅适用于 POST 请求)</strong></em></li>
</ol>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "secret"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"MySecretCannotGuess"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>请求参数 <em>(<code v-pre>Param</code>)</em> 的 <code v-pre>secret</code></li>
</ol>
<div class="language-url line-numbers-mode" data-highlighter="shiki" data-ext="url" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-url"><span class="line"><span>?secret=MySecretCannotGuess</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>请求头 <em>(<code v-pre>Header</code>)</em> 的 <code v-pre>Sleepy-Secret</code></li>
</ol>
<div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-http"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Sleepy-Secret</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MySecretCannotGuess</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>请求头 <em>(<code v-pre>Header</code>)</em> 的 <code v-pre>Authorization</code> <em>(需要在 secret 前加 <code v-pre>Bearer </code>)</em></li>
</ol>
<div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-http"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Authorization</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Bearer MySecretCannotGuess</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>服务端的 <code v-pre>secret</code> 即为在环境变量中配置的 <code v-pre>SLEEPY_SECRET</code></p>
</blockquote>
<p>如 <code v-pre>secret</code> 错误，则会返回:</p>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 401 Unauthorized</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 请求是否成功</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"not authorized"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 返回代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"wrong secret"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 详细信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read-only" tabindex="-1"><a class="header-anchor" href="#read-only"><span>Read-only</span></a></h2>
<p><a href="#api">Back to # api</a></p>
<table>
<thead>
<tr>
<th></th>
<th>路径</th>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><code v-pre>/</code></td>
<td><code v-pre>GET</code></td>
<td>显示主页</td>
</tr>
<tr>
<td><a href="#query">Jump</a></td>
<td><code v-pre>/query</code></td>
<td><code v-pre>GET</code></td>
<td>获取状态</td>
</tr>
<tr>
<td><a href="#status-list">Jump</a></td>
<td><code v-pre>/status_list</code></td>
<td><code v-pre>GET</code></td>
<td>获取可用状态列表</td>
</tr>
<tr>
<td><a href="#metrics">Jump</a></td>
<td><code v-pre>/metrics</code></td>
<td><code v-pre>GET</code></td>
<td>获取统计信息</td>
</tr>
</tbody>
</table>
<h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query</span></a></h3>
<p><a href="#read-only">Back to ## read-only</a></p>
<blockquote>
<p><code v-pre>/query</code></p>
</blockquote>
<p>获取当前的状态</p>
<ul>
<li>Method: GET</li>
<li>无需鉴权</li>
</ul>
<h4 id="response" tabindex="-1"><a class="header-anchor" href="#response"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "time"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-12-28 00:21:24"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 服务端时间</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "timezone"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Asia/Shanghai"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 服务端配置的时区</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 请求是否成功</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 获取到的状态码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "info"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 对应状态码的信息</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"活着"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 状态名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "desc"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"目前在线，可以通过任何可用的联系方式联系本人。"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 状态描述</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "color"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"awake"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 状态颜色, 对应 static/style.css 中的 .sleeping .awake 等类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "device"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 设备列表</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "device-1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 标识符，唯一</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "show_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"MyDevice1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 前台显示名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "using"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"false"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 是否正在使用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">            "app_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bilibili"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 应用名 (如 using == false 则不使用)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "last_updated"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-12-20 23:51:34"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 信息上次更新的时间</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "refresh"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 刷新时间 (ms)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "device_status_slice"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">20</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 设备状态截取文字数</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>返回中 <strong>日期/时间</strong> 的时区默认为 <strong><code v-pre>Asia/Shanghai</code></strong> <em>(即北京时间)</em>, 可在配置中修改</p>
</blockquote>
<h3 id="status-list" tabindex="-1"><a class="header-anchor" href="#status-list"><span>status-list</span></a></h3>
<p><a href="#read-only">Back to ## read-only</a></p>
<blockquote>
<p><code v-pre>/status_list</code></p>
</blockquote>
<p>获取可用状态的列表</p>
<ul>
<li>Method: GET</li>
<li>无需鉴权</li>
</ul>
<h4 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 索引，取决于配置文件中的有无</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"活着"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 状态名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "desc"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"目前在线，可以通过任何可用的联系方式联系本人。"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 状态描述</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "color"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"awake"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 状态颜色, 对应 static/style.css 中的 .sleeping .awake 等类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }, </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"似了"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "desc"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"睡似了或其他原因不在线，紧急情况请使用电话联系。"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "color"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sleeping"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }, </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 以此类推</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>就是返回 <code v-pre>setting/status_list.json</code> 的内容</p>
</blockquote>
<h3 id="metrics" tabindex="-1"><a class="header-anchor" href="#metrics"><span>metrics</span></a></h3>
<p><a href="#read-only">Back to ## read-only</a></p>
<blockquote>
<p><code v-pre>/metrics</code></p>
</blockquote>
<p>获取统计信息</p>
<ul>
<li>Method: GET</li>
<li>无需鉴权</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本接口较特殊: 如服务器关闭了统计, 则 <strong><code v-pre>/metrics</code> 路由将不会被创建</strong>, 体现为访问显示 404 页面而不是返回结果 <br/><br>
<s><em>我也不知道自己怎么想的</em></s></p>
</div>
<h4 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "time"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2025-01-22 08:40:48.564728+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 服务端时间</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "timezone"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Asia/Shanghai"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 时区</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "today_is"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2025-1-22"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今日日期</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "month_is"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2025-1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今日月份</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "year_is"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2025"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今日年份</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "today"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今天的数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/device/set"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/style.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/query"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "month"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今月的数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/device/set"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/style.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/query"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "year"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 今年的数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/device/set"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/style.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/query"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }, </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "total"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 总统计数据，不清除</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/device/set"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/style.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "/query"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status" tabindex="-1"><a class="header-anchor" href="#status"><span>Status</span></a></h2>
<p><a href="#api">Back to # api</a></p>
<table>
<thead>
<tr>
<th></th>
<th>路径</th>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#status-set">Jump</a></td>
<td><code v-pre>/set?status=&lt;status&gt;</code></td>
<td><code v-pre>GET</code></td>
<td>设置状态</td>
</tr>
</tbody>
</table>
<h3 id="status-set" tabindex="-1"><a class="header-anchor" href="#status-set"><span>status-set</span></a></h3>
<p><a href="#status">Back to ## status</a></p>
<blockquote>
<p><code v-pre>/set?status=&lt;status&gt;</code></p>
</blockquote>
<p>设置当前状态</p>
<ul>
<li>Method: GET</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>Params</span></a></h4>
<ul>
<li><code v-pre>&lt;status&gt;</code>: 状态码 <em>(<code v-pre>int</code>)</em></li>
</ul>
<h4 id="response-3" tabindex="-1"><a class="header-anchor" href="#response-3"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 请求是否成功</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 返回代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "set_to"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 设置到的状态码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 400 Bad Request | 失败 - 请求无效</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 请求是否成功</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bad request"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 返回代码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"argument 'status' must be a number"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 详细信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="device" tabindex="-1"><a class="header-anchor" href="#device"><span>Device</span></a></h2>
<p><a href="#api">Back to # api</a></p>
<table>
<thead>
<tr>
<th></th>
<th>路径</th>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#device-set">Jump</a></td>
<td><code v-pre>/device/set</code></td>
<td><code v-pre>POST</code></td>
<td>设置单个设备的状态 (打开应用)</td>
</tr>
<tr>
<td></td>
<td><code v-pre>/device/set?id=&lt;id&gt;&amp;show_name=&lt;show_name&gt;&amp;using=&lt;using&gt;&amp;app_name=&lt;app_name&gt;</code></td>
<td><code v-pre>GET</code></td>
<td>-</td>
</tr>
<tr>
<td><a href="#device-remove">Jump</a></td>
<td><code v-pre>/device/remove?name=&lt;device_name&gt;</code></td>
<td><code v-pre>GET</code></td>
<td>移除单个设备的状态</td>
</tr>
<tr>
<td><a href="#device-clear">Jump</a></td>
<td><code v-pre>/device/clear</code></td>
<td><code v-pre>GET</code></td>
<td>清除所有设备的状态</td>
</tr>
<tr>
<td><a href="#device-private-mode">Jump</a></td>
<td><code v-pre>/device/private_mode?private=&lt;isprivate&gt;</code></td>
<td><code v-pre>GET</code></td>
<td>设置隐私模式</td>
</tr>
</tbody>
</table>
<h3 id="device-set" tabindex="-1"><a class="header-anchor" href="#device-set"><span>device-set</span></a></h3>
<p><a href="#device">Back to ## device</a></p>
<blockquote>
<p><code v-pre>/device/set</code></p>
</blockquote>
<p>设置单个设备的状态</p>
<ul>
<li>Method: GET / POST</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="params-get" tabindex="-1"><a class="header-anchor" href="#params-get"><span>Params (GET)</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>使用 url params 传递参数在某些情况下 <em>(如内容包含特殊符号)</em> 可能导致非预期行为, 此处更建议使用 POST</p>
</div>
<blockquote>
<p><code v-pre>/device/set?id=&lt;id&gt;&amp;show_name=&lt;show_name&gt;&amp;using=&lt;using&gt;&amp;app_name=&lt;app_name&gt;</code></p>
</blockquote>
<ul>
<li><code v-pre>&lt;id&gt;</code>: 设备标识符</li>
<li><code v-pre>&lt;show_name&gt;</code>: 显示名称</li>
<li><code v-pre>&lt;using&gt;</code>: 是否正在使用</li>
<li><code v-pre>&lt;app_name&gt;</code>: 正在使用应用的名称</li>
</ul>
<h4 id="body-post" tabindex="-1"><a class="header-anchor" href="#body-post"><span>Body (POST)</span></a></h4>
<blockquote>
<p><code v-pre>/device/set</code></p>
</blockquote>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"device-1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 设备标识符</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "show_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"MyDevice1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 显示名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "using"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 是否正在使用</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "app_name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"VSCode"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 正在使用应用的名称</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response-4" tabindex="-1"><a class="header-anchor" href="#response-4"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 400 Bad Request | 失败 - 缺少参数 / 参数类型错误</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bad request"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"missing param or wrong param type"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="device-remove" tabindex="-1"><a class="header-anchor" href="#device-remove"><span>device-remove</span></a></h3>
<p><a href="#device">Back to ## device</a></p>
<blockquote>
<p><code v-pre>/device/remove?id=&lt;device_id&gt;</code></p>
</blockquote>
<p>移除单个设备的状态</p>
<ul>
<li>Method: GET</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="params-1" tabindex="-1"><a class="header-anchor" href="#params-1"><span>Params</span></a></h4>
<ul>
<li><code v-pre>&lt;device_id&gt;</code>: 设备标识符</li>
</ul>
<h4 id="response-5" tabindex="-1"><a class="header-anchor" href="#response-5"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 404 Not Found | 失败 - 不存在 (也不算失败了?)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"not found"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cannot find item"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="device-clear" tabindex="-1"><a class="header-anchor" href="#device-clear"><span>device-clear</span></a></h3>
<p><a href="#device">Back to ## device</a></p>
<blockquote>
<p><code v-pre>/device/clear</code></p>
</blockquote>
<p>清除所有设备的状态</p>
<ul>
<li>Method: GET</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="response-6" tabindex="-1"><a class="header-anchor" href="#response-6"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="device-private-mode" tabindex="-1"><a class="header-anchor" href="#device-private-mode"><span>device-private-mode</span></a></h3>
<p><a href="#device">Back to ## device</a></p>
<blockquote>
<p><code v-pre>/device/private_mode?private=&lt;isprivate&gt;</code></p>
</blockquote>
<p>设置隐私模式 <em>(即在 <a href="#query"><code v-pre>/query</code></a> 的返回中设置 <code v-pre>device</code> 项为空 (<code v-pre>{}</code>))</em></p>
<ul>
<li>Method: GET</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="params-2" tabindex="-1"><a class="header-anchor" href="#params-2"><span>Params</span></a></h4>
<ul>
<li><code v-pre>&lt;isprivate&gt;</code>: bool (仅接受 <code v-pre>true</code> / <code v-pre>false</code>), 开关状态</li>
</ul>
<h4 id="response-7" tabindex="-1"><a class="header-anchor" href="#response-7"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 400 Bad Request | 失败 - 请求无效</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"invaild request"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">private</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> arg only supports boolean type"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>Storage</span></a></h2>
<p><a href="#api">Back to # api</a></p>
<table>
<thead>
<tr>
<th></th>
<th>路径</th>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#storage-save-data">Jump</a></td>
<td><code v-pre>/save_data</code></td>
<td><code v-pre>GET</code></td>
<td>保存内存中的状态信息</td>
</tr>
</tbody>
</table>
<blockquote>
<p>已移除 <code v-pre>/reload_config</code> 接口, 现在需要重启服务以重载配置</p>
</blockquote>
<h3 id="storage-save-data" tabindex="-1"><a class="header-anchor" href="#storage-save-data"><span>storage-save-data</span></a></h3>
<p><a href="#storage">Back to ## storage</a></p>
<blockquote>
<p><code v-pre>/save_data</code></p>
</blockquote>
<p>保存内存中的状态信息到 <code v-pre>data.json</code></p>
<ul>
<li>Method: GET</li>
<li><strong>需要鉴权</strong></li>
</ul>
<h4 id="response-8" tabindex="-1"><a class="header-anchor" href="#response-8"><span>Response</span></a></h4>
<div class="language-jsonc line-numbers-mode" data-highlighter="shiki" data-ext="jsonc" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-jsonc"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 200 OK | 成功</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"OK"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// data.json 内容</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "device_status"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "last_updated"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-12-21 13:58:38"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 500 Internal Server Error | 失败 - 保存出错</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "success"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"exception"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"..."</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> // 报错内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


