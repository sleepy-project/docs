<template><div><h1 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明"><span>配置项说明</span></a></h1>
<p>有两种方式修改配置:</p>
<ol>
<li>环境变量 <em><strong>(优先级最高)</strong></em></li>
<li>与 <code v-pre>server.py</code> 同级的 <code v-pre>.env</code> 文件</li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><em>(特别是)</em> Windows 用户请确保 <code v-pre>.env</code> 文件<strong>使用 <code v-pre>UTF-8</code> 编码保存</strong>，否则会导致<strong>错误读入注释 / 中文乱码</strong> <br/><br>
Huggingface / Vercel 等容器平台部署需将环境变量放在 <strong><code v-pre>Environment Variables</code></strong>，而<strong>不是</strong> <code v-pre>.env</code> 文件 <em>(见 <RouteLink to="/guide/deploy.html">部署文档</RouteLink>)</em> <br/><br>
<em>请确保变量名为全大写或全小写</em> <br/><br>
<em>修改配置后需重启服务生效</em></p>
</div>
<blockquote>
<p><strong>配置类型</strong>: <br/></p>
<ul>
<li><code v-pre>str</code>: 字符串，在 <code v-pre>.env</code> 中<strong>建议使用双引号括起</strong>，如: <code v-pre>sleepy_page_desc = &quot;someone's status page&quot;</code></li>
<li><code v-pre>int</code>: 整数 <em>(小数部分会被舍弃)</em></li>
<li><code v-pre>bool</code>: 布尔值，可选 <code v-pre>true</code> <strong>(是)</strong> / <code v-pre>false</code> <strong>(否)</strong>, <em>(也可简写为 <code v-pre>1</code> / <code v-pre>0</code> 等，详见 <a href="../_utils.py">此处</a>)</em></li>
</ul>
</blockquote>
<h2 id="main-系统基本配置" tabindex="-1"><a class="header-anchor" href="#main-系统基本配置"><span>(main) 系统基本配置</span></a></h2>
<table>
<thead>
<tr>
<th>变量名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sleepy_main_host</code></td>
<td>str</td>
<td><code v-pre>0.0.0.0</code></td>
<td>服务的监听地址，如需同时监听 IPv6 地址需改为 <code v-pre>::</code></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_port</code></td>
<td>int</td>
<td>9010</td>
<td>服务的监听端口 <em>(0-65535)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_debug</code></td>
<td>bool</td>
<td>false</td>
<td>控制是否开启 Flask 的调试模式 (一般无需开启) <em>(开启后可自动重载代码)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_timezone</code></td>
<td>str</td>
<td><code v-pre>Asia/Shanghai</code></td>
<td>控制 <strong>API 返回中 / 网页上</strong>显示时间的时区，一般无需更改 <em>(<code v-pre>Asia/Shanghai</code> 或 <code v-pre>Asia/Chongqing</code> 均为北京时间)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_checkdata_interval</code></td>
<td>int</td>
<td>30</td>
<td>控制多久检查一次状态数据的更新 <strong>(秒)</strong> (<em>检测到更新后会写入 <code v-pre>data.json</code>，供下次启动时恢复状态</em>)</td>
</tr>
<tr>
<td><code v-pre>SLEEPY_SECRET</code></td>
<td>str</td>
<td><code v-pre> </code></td>
<td>密钥 (相当于密码，用于防止未授权设置状态)，<strong>客户端须使用相同的密钥</strong></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_https_enabled</code></td>
<td>bool</td>
<td>false</td>
<td>是否启用 HTTPS，启用后需配置 <code v-pre>sleepy_main_ssl_cert</code> 和 <code v-pre>sleepy_main_ssl_key</code></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_ssl_cert</code></td>
<td>str</td>
<td><code v-pre>cert.pem</code></td>
<td>SSL 证书路径 (相对于项目根目录或绝对路径)，详见 <RouteLink to="/guide/https.html">HTTPS 配置指南</RouteLink></td>
</tr>
<tr>
<td><code v-pre>sleepy_main_ssl_key</code></td>
<td>str</td>
<td><code v-pre>key.pem</code></td>
<td>SSL 密钥路径 (相对于项目根目录或绝对路径)，详见 <RouteLink to="/guide/https.html">HTTPS 配置指南</RouteLink></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="page-页面内容配置" tabindex="-1"><a class="header-anchor" href="#page-页面内容配置"><span>(page) 页面内容配置</span></a></h2>
<table>
<thead>
<tr>
<th>变量名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sleepy_page_user</code></td>
<td>str</td>
<td><code v-pre>User</code></td>
<td>网页顶部 <code v-pre>(用户名)'s Status</code> 中用户名</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_title</code></td>
<td>str</td>
<td><code v-pre>(用户名) Alive?</code></td>
<td>标题栏中显示的网页标题</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_desc</code></td>
<td>str</td>
<td><code v-pre>(用户名)'s Online Status Page</code></td>
<td>网页描述 <em>(主要用于 SEO)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_favicon</code></td>
<td>str</td>
<td><code v-pre>./static/favicon.ico</code></td>
<td>网页的图标 (<code v-pre>.png</code> 或 <code v-pre>.ico</code> 图片) 路径，可以为绝对路径或相对路径</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_background</code></td>
<td>str</td>
<td><code v-pre>https://imgapi.siiway.top/image</code></td>
<td>背景图片地址，可以使用网上的图片 API 或单张图片 <em>(默认为 <a href="https://github.com/siiway/imgapi" target="_blank" rel="noopener noreferrer">siiway/imgapi</a>)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_learn_more</code></td>
<td>str</td>
<td><code v-pre>GitHub Repo</code></td>
<td>网页底部链接的<strong>显示文字</strong></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_repo</code></td>
<td>str</td>
<td><code v-pre>https://github.com/sleepy-project/sleepy</code></td>
<td>网页底部链接的<strong>目标</strong> <em>(默认为本 repo 地址)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_more_text</code></td>
<td>str</td>
<td><code v-pre> </code></td>
<td>网页底部链接上方插入的文字 (<strong>支持 HTML</strong>，可以插入 统计代码 / 备案号 等)</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_sorted</code></td>
<td>bool</td>
<td>false</td>
<td>是否按字母顺序排序设备列表</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_using_first</code></td>
<td>bool</td>
<td>false</td>
<td>是否设置使用中设备优先显示</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_hitokoto</code></td>
<td>bool</td>
<td>true</td>
<td>在插入文字上方显示随机 <a href="https://hitokoto.cn" target="_blank" rel="noopener noreferrer">一言</a></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_canvas</code></td>
<td>bool</td>
<td>true</td>
<td>是否启用粒子效果 <em>(如影响性能可关闭)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_moonlight</code></td>
<td>bool</td>
<td>true</td>
<td>在卡片左上角 / 右上角显示<strong>切换暗色模式</strong>和<strong>卡片透明度</strong>的按钮</td>
</tr>
<tr>
<td><code v-pre>sleepy_page_lantern</code></td>
<td>bool</td>
<td>false</td>
<td>在网页顶部显示节日灯笼 <em>(默认文字为 <code v-pre>欢度新春</code>)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_mplayer</code></td>
<td>bool</td>
<td>false</td>
<td>在网页左下角显示<strong>音乐播放器</strong></td>
</tr>
<tr>
<td><code v-pre>sleepy_page_zhixue</code></td>
<td>bool</td>
<td>false</td>
<td>显示智学网分数 (详见 <strong><RouteLink to="/client/#zhixuewang">对应客户端设置</RouteLink></strong>)</td>
</tr>
</tbody>
</table>
<h2 id="status-页面状态显示配置" tabindex="-1"><a class="header-anchor" href="#status-页面状态显示配置"><span>(status) 页面状态显示配置</span></a></h2>
<p>这部分配置控制状态信息在页面上的具体展示方式。</p>
<table>
<thead>
<tr>
<th>环境变量</th>
<th>类型</th>
<th>默认值</th>
<th>说明与提示</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sleepy_status_device_slice</code></td>
<td>int</td>
<td>30</td>
<td>网页中设备状态文本的最大长度，超过此长度会被截断 <em>(设置为 <code v-pre>0</code> 禁用)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_status_show_loading</code></td>
<td>bool</td>
<td>true</td>
<td>控制是否在更新状态时显示 <code v-pre>更新中...</code> 提示 <em>(仅在使用原始轮询方式更新时生效)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_status_refresh_interval</code></td>
<td>int</td>
<td>5000</td>
<td>两次更新状态之间的间隔 (<strong>毫秒</strong>，<em>仅在使用原始轮询方式更新时生效</em>)</td>
</tr>
<tr>
<td><code v-pre>sleepy_status_not_using</code></td>
<td>str</td>
<td><code v-pre>未在使用</code></td>
<td>设备未在使用时显示的状态文本 <em>(如为空则使用设备上报值)</em></td>
</tr>
</tbody>
</table>
<h2 id="util-可选功能" tabindex="-1"><a class="header-anchor" href="#util-可选功能"><span>(util) 可选功能</span></a></h2>
<table>
<thead>
<tr>
<th>环境变量</th>
<th>类型</th>
<th>默认值</th>
<th>说明与提示</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sleepy_util_metrics</code></td>
<td>bool</td>
<td>true</td>
<td>控制是否启用内置的访问计数功能，并启用 <code v-pre>/metrics</code> 接口</td>
</tr>
<tr>
<td><code v-pre>sleepy_util_auto_switch_status</code></td>
<td>bool</td>
<td>true</td>
<td>是否启用自动切换状态 <em>(当状态为 <code v-pre>0</code> (活着) 且所有设备都未在使用时自动切换为 <code v-pre>1</code> (似了))</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_util_steam_enabled</code></td>
<td>bool</td>
<td>false</td>
<td>是否启用新版 Steam 状态 <em>(iframe 卡片显示，需配置 <code v-pre>sleepy_util_steam_ids</code>)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_util_steam_ids</code></td>
<td>str</td>
<td><code v-pre> </code></td>
<td>你的 Steam 账号 ID <em>(应为一串数字)</em></td>
</tr>
<tr>
<td><code v-pre>sleepy_util_steam_refresh_interval</code></td>
<td>int</td>
<td>20000</td>
<td>刷新 Steam 状态的频率 (<strong>毫秒</strong>，<em>建议至少设置为 10000ms，过低可能触发速率限制</em>)</td>
</tr>
</tbody>
</table>
</div></template>


