<template><div><h1 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h1>
<ul>
<li><a href="#%E6%9B%B4%E6%96%B0">更新</a>
<ul>
<li><a href="#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2">手动部署</a></li>
<li><a href="#huggingface-%E9%83%A8%E7%BD%B2">Huggingface 部署</a></li>
<li><a href="#vercel-%E9%83%A8%E7%BD%B2">Vercel 部署</a></li>
</ul>
</li>
</ul>
<h2 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署"><span>手动部署</span></a></h2>
<p>只需运行这两行命令:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 拉取最新代码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> requirements.txt</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 安装依赖 (如果有新的)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新完成，重新启动即可.</p>
<blockquote>
<p>可以 <a href="https://github.com/sleepy-project/sleepy/commits/main/.env.example" target="_blank" rel="noopener noreferrer">在这</a> 查看 <a href="../.env.example"><code v-pre>.env.example</code></a> 更新记录，并相应修改 <code v-pre>.env</code> 文件</p>
</blockquote>
<h2 id="huggingface-部署" tabindex="-1"><a class="header-anchor" href="#huggingface-部署"><span>Huggingface 部署</span></a></h2>
<ol>
<li><code v-pre>Settings</code> ==&gt; <code v-pre>Variables and secrets</code> ==&gt; <strong>更改对应的新增配置项</strong></li>
<li><code v-pre>Settings</code> ==&gt; <code v-pre>Factory rebuild</code> ==&gt; <strong>完全重新部署</strong></li>
</ol>
<figure><img src="https://ghimg.siiway.top/sleepy/update/huggingface-1.1.png" alt="huggingface-1" tabindex="0" loading="lazy"><figcaption>huggingface-1</figcaption></figure>
<h2 id="vercel-部署" tabindex="-1"><a class="header-anchor" href="#vercel-部署"><span>Vercel 部署</span></a></h2>
<p>只需打开你 Fork 的仓库，点击右上角 <code v-pre>Sync fork</code> -&gt; <code v-pre>Update branch</code> 同步上游仓库即可</p>
<figure><img src="https://ghimg.siiway.top/sleepy/update/vercel-1.1.png" alt="vercel-1" tabindex="0" loading="lazy"><figcaption>vercel-1</figcaption></figure>
<blockquote>
<p><em>图中使用我的另一个 Fork 仓库做演示，步骤相同</em><br>
Vercel 检测到仓库更新后会自动重新部署</p>
</blockquote>
</div></template>


