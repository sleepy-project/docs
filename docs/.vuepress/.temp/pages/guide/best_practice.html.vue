<template><div><h1 id="best-practice" tabindex="-1"><a class="header-anchor" href="#best-practice"><span>Best Practice</span></a></h1>
<h2 id="添加访问量统计" tabindex="-1"><a class="header-anchor" href="#添加访问量统计"><span>添加访问量统计</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请确保你启用了 metrics 功能，否则无法正常使用 <br/><br>
更精确的访问量请使用专门的统计工具 (如 <a href="https://umami.is/" target="_blank" rel="noopener noreferrer">umami</a>)</p>
</div>
<p>很简单，只需要在 <code v-pre>sleepy_page_more_text</code> 环境变量中添加特殊的占位符:</p>
<ul>
<li><code v-pre>{visit_today}</code>: 今日的访问量 (即 <code v-pre>/</code> 的访问次数)</li>
<li><code v-pre>{visit_month}</code>: 本月的访问量</li>
<li><code v-pre>{visit_year}</code>: 本年的访问量</li>
<li><code v-pre>{visit_total}</code>: 总访问量</li>
</ul>
<p>示例:</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-ini"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># .env</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">sleepy_page_more_text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "其他文本&#x3C;br/>今日已被视奸 {visit_today} 次"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>将会渲染为:</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-text"><span class="line"><span>其他文本</span></span>
<span class="line"><span>今日已被视奸 114 次</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


