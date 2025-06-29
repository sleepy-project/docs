<template><div><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h1>
<ol>
<li><strong><a href="#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2">手动部署</a></strong> <em>(建议有自己的服务器 / 本地部署使用)</em></li>
<li><strong><a href="#huggingface-%E9%83%A8%E7%BD%B2">Huggingface 部署</a></strong> <em>(无服务器推荐)</em></li>
<li><a href="#vercel-%E9%83%A8%E7%BD%B2">Vercel 部署</a> <em>(限制较多, 不推荐使用)</em></li>
<li><a href="#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-%E6%9C%AA%E6%B5%8B%E8%AF%95">一键部署</a> <em>(未测试, 不推荐使用)</em></li>
</ol>
<h2 id="快速跳转" tabindex="-1"><a class="header-anchor" href="#快速跳转"><span>快速跳转</span></a></h2>
<ul>
<li><a href="#%E9%83%A8%E7%BD%B2">部署</a>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E8%B7%B3%E8%BD%AC">快速跳转</a></li>
<li><a href="#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2">手动部署</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85">安装</a></li>
<li><a href="#%E5%90%AF%E5%8A%A8">启动</a></li>
</ul>
</li>
<li><a href="#huggingface-%E9%83%A8%E7%BD%B2">Huggingface 部署</a>
<ul>
<li><a href="#%E5%8D%A1%E5%9C%A8-deploying">卡在 Deploying?</a></li>
</ul>
</li>
<li><a href="#vercel-%E9%83%A8%E7%BD%B2">Vercel 部署</a></li>
<li><a href="#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2-%E6%9C%AA%E6%B5%8B%E8%AF%95">一键部署 (未测试)</a>
<ul>
<li><a href="#linux">Linux</a></li>
<li><a href="#windows">Windows</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署"><span>手动部署</span></a></h2>
<p>本方式理论上全平台通用, 安装了 Python &gt;= <strong>3.6</strong> 即可 (建议: <strong>3.10+</strong>)</p>
<blockquote>
<p>优点: 数据文件 (<code v-pre>data.json</code>) 可持久化，不会因为重启而被删除</p>
</blockquote>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<ol>
<li>Clone 本仓库 (建议先 Fork / Use this template)</li>
</ol>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --depth=1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> main</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/sleepy-project/sleepy.git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>安装依赖</li>
</ol>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requirements.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>编辑配置文件</li>
</ol>
<p>在项目目录创建 <code v-pre>.env</code> 文件:</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-ini"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_main_host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "0.0.0.0"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 监听地址</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_main_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "9010"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 端口号</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "改成别人猜不出来的密钥"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 密钥，相当于密码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_page_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "你的名字"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 将显示在网页中</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_page_favicon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "./static/favicon.ico"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 网站图标, 可替换 static/favicon.ico 自定义 (也可以用其他格式的, 自己改路径)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_page_more_text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "欢迎来到我的状态页!"</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 说两句? (也可以留空)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_page_using_first</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> true </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 使用中设备优先显示</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多配置项详见 <RouteLink to="/guide/env.html">此处</RouteLink></p>
<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3>
<blockquote>
<p><strong>使用宝塔面板 (uwsgi) 等部署时，请确定只为本程序分配了 1 个进程, 如设置多个服务进程可能导致数据不同步!!!</strong></p>
</blockquote>
<p>有两种启动方式:</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 直接启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server.py</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 简易启动器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start.py</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认服务 http 端口: <strong><code v-pre>9010</code></strong></p>
<h2 id="huggingface-部署" tabindex="-1"><a class="header-anchor" href="#huggingface-部署"><span>Huggingface 部署</span></a></h2>
<blockquote>
<p>适合没有服务器部署的同学使用 <br/><br>
<em><s>有服务器也推荐，不怕被打</s></em> <br/><br>
<em>唯一的缺点: <strong>不能使用自定义域名</strong></em></p>
</blockquote>
<p>只需三步:</p>
<ol>
<li>复制 Space <code v-pre>wyf9/sleepy</code> (<strong><a href="https://huggingface.co/spaces/wyf9/sleepy?duplicate=true&amp;visibility=public" target="_blank" rel="noopener noreferrer">点击直达</a></strong>)</li>
<li>在复制页面设置 secret 和页面信息等环境变量 <em>[<strong><a href="../.env.example">配置示例</a></strong>]</em></li>
<li>点击部署，等待完成后点击右上角三点 -&gt; <code v-pre>Embed this space</code>，即可获得你的部署地址 <em>(类似于: <a href="https://wyf9-sleepy.hf.space" target="_blank" rel="noopener noreferrer">https://wyf9-sleepy.hf.space</a>)</em></li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><strong>在创建时请务必选择 Space 类型为公开 (<code v-pre>Public</code>)，否则无法获取部署地址 (他人无法访问)!</strong> <br/><br>
<em>Hugging Face Space 如 48h 未访问将会休眠，建议使用定时请求平台 (如 <code v-pre>cron-job.org</code>, <code v-pre>Uptime Kuma</code> 等) 定时请求 Space <code v-pre>/none</code></em></p>
</div>
<h3 id="卡在-deploying" tabindex="-1"><a class="header-anchor" href="#卡在-deploying"><span>卡在 Deploying?</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>适用于日志中程序已经启动, 但部署状态仍然为 <code v-pre>Deploying</code> 的情况 <br/><br>
<em>对所有的 Hugging Face 仓库都有效</em></p>
</div>
<details>
<summary>解决方法</summary>
<ol>
<li>点击右上角三点 -&gt; <code v-pre>Duplicate this Space</code>，<strong>复制</strong> Space 并<strong>填写好和之前一样的环境变量</strong></li>
<li>在 <code v-pre>Settings</code> 页面底部 <code v-pre>Delete this Space</code> 处<strong>删除</strong>旧 Space</li>
<li>在 <code v-pre>Settings</code> -&gt; <code v-pre>Rename or transfer this space</code> 将新 Space <strong>重命名</strong>为旧 Space 的名称</li>
</ol>
</details>
<h2 id="vercel-部署" tabindex="-1"><a class="header-anchor" href="#vercel-部署"><span>Vercel 部署</span></a></h2>
<blockquote>
<p>可以使用自定义域名，但<strong>限制较多</strong> (如无法使用 SSE, 请求数 / 请求完成时间有限制等) <br/><br>
<em>当前端检测到为 Vercel 部署时会回退到轮询方式更新</em></p>
</blockquote>
<ol>
<li>Fork 本项目</li>
<li>打开 <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer"><code v-pre>vercel.com/new</code></a>，并按照提示授权访问 GitHub <em>(如未注册则注册)</em></li>
<li>选择你的 Fork，点击 <code v-pre>Import</code></li>
</ol>
<figure><img src="https://ghimg.siiway.top/sleepy/deploy/vercel-1.1.png" alt="vercel-1" tabindex="0" loading="lazy"><figcaption>vercel-1</figcaption></figure>
<ol start="4">
<li>在导入界面设置环境变量 (其他配置保持默认)，点击 <code v-pre>Deploy</code> 部署 <em>[<strong><a href="../.env.example">配置示例</a></strong>]</em></li>
</ol>
<figure><img src="https://ghimg.siiway.top/sleepy/deploy/vercel-2.1.png" alt="vercel-2" tabindex="0" loading="lazy"><figcaption>vercel-2</figcaption></figure>
<p>即可完成部署，默认分配 <code v-pre>vercel.app</code> 域名</p>
<ol start="5">
<li><em><strong>[可选]</strong></em> 绑定自定义域名: <code v-pre>Settings</code> -&gt; <code v-pre>Domains</code></li>
</ol>
<figure><img src="https://ghimg.siiway.top/sleepy/deploy/vercel-3.1.png" alt="vercel-3" tabindex="0" loading="lazy"><figcaption>vercel-3</figcaption></figure>
<ol start="6">
<li><em><strong>[可选]</strong></em> 添加更多环境变量: <code v-pre>Settings</code> -&gt; <code v-pre>Environment Variables</code></li>
</ol>
<figure><img src="https://ghimg.siiway.top/sleepy/deploy/vercel-4.1.png" alt="vercel-4" tabindex="0" loading="lazy"><figcaption>vercel-4</figcaption></figure>
<blockquote>
<p>修改环境变量后需重新部署</p>
</blockquote>
<h2 id="一键部署-未测试" tabindex="-1"><a class="header-anchor" href="#一键部署-未测试"><span>一键部署 (未测试)</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>完全由 AI 生成, 未经任何测试, <strong>不要使用此方式!!!</strong></p>
</div>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<p>运行命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://ghproxy.com/https://raw.githubusercontent.com/sleepy-project/sleepy/main/scripts/install.sh)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果你的服务器不在中国大陆，可以去掉 <code v-pre>ghproxy.com/</code> 部分：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> &#x3C;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://raw.githubusercontent.com/sleepy-project/sleepy/main/scripts/install.sh)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<p>运行命令：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-powershell"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">Set-ExecutionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Scope </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">Process</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ExecutionPolicy Bypass</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">irm https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">ghproxy.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">raw.githubusercontent.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sleepy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">project</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sleepy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">main</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">scripts</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">install.ps1 | iex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的服务器不在中国大陆，可以去掉 <code v-pre>ghproxy.com/</code> 部分：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-powershell"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">Set-ExecutionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Scope </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">Process</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ExecutionPolicy Bypass</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">irm https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">raw.githubusercontent.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sleepy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">project</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sleepy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">main</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">scripts</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">install.ps1 | iex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


