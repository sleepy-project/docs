<template><div><h1 id="https-配置指南" tabindex="-1"><a class="header-anchor" href="#https-配置指南"><span>HTTPS 配置指南</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>本文 100% 由 AI 编写，不保证以下内容的准确性</p>
</div>
<p>本文档介绍如何为 Sleepy 配置 HTTPS，以便通过安全连接访问您的状态页面。</p>
<h2 id="为什么使用-https" tabindex="-1"><a class="header-anchor" href="#为什么使用-https"><span>为什么使用 HTTPS？</span></a></h2>
<p>HTTPS 提供了以下好处：</p>
<ol>
<li><strong>加密通信</strong>：保护数据在传输过程中不被窃取或篡改</li>
<li><strong>身份验证</strong>：确保用户连接到的是真实的服务器</li>
<li><strong>数据完整性</strong>：确保数据在传输过程中不被修改</li>
<li><strong>SEO 优势</strong>：搜索引擎更喜欢 HTTPS 网站</li>
<li><strong>现代浏览器兼容性</strong>：许多现代浏览器功能需要 HTTPS</li>
</ol>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<h3 id="_1-获取-ssl-证书" tabindex="-1"><a class="header-anchor" href="#_1-获取-ssl-证书"><span>1. 获取 SSL 证书</span></a></h3>
<p>您需要一个 SSL 证书才能启用 HTTPS。有几种方式可以获取证书：</p>
<h4 id="使用-let-s-encrypt-推荐" tabindex="-1"><a class="header-anchor" href="#使用-let-s-encrypt-推荐"><span>使用 Let's Encrypt（推荐）</span></a></h4>
<p><a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">Let's Encrypt</a> 提供免费的 SSL 证书。您可以使用 <a href="https://certbot.eff.org/" target="_blank" rel="noopener noreferrer">Certbot</a> 工具自动获取和更新证书。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装 Certbot（Ubuntu/Debian）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> certbot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 获取证书（独立模式）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> certbot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> certonly</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --standalone</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> your-domain.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 证书将保存在 /etc/letsencrypt/live/your-domain.com/ 目录下</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自签名证书-仅用于测试" tabindex="-1"><a class="header-anchor" href="#自签名证书-仅用于测试"><span>自签名证书（仅用于测试）</span></a></h4>
<p>对于测试环境，您可以创建自签名证书：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 生成私钥和证书</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">openssl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> req</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -x509</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -newkey</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rsa:4096</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -nodes</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -out</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cert.pem</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -keyout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> key.pem</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -days</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 365</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：自签名证书会导致浏览器显示安全警告，不建议在生产环境中使用。</p>
<h3 id="_2-配置-sleepy-使用-https" tabindex="-1"><a class="header-anchor" href="#_2-配置-sleepy-使用-https"><span>2. 配置 Sleepy 使用 HTTPS</span></a></h3>
<p>编辑您的 <code v-pre>.env</code> 文件，添加以下配置：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 启用 HTTPS</span></span>
<span class="line"><span>sleepy_main_https_enabled = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># SSL 证书路径（相对于项目根目录或绝对路径）</span></span>
<span class="line"><span>sleepy_main_ssl_cert = "/path/to/your/cert.pem"</span></span>
<span class="line"><span></span></span>
<span class="line"><span># SSL 密钥路径（相对于项目根目录或绝对路径）</span></span>
<span class="line"><span>sleepy_main_ssl_key = "/path/to/your/key.pem"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用 Let's Encrypt，路径可能如下：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>sleepy_main_ssl_cert = "/etc/letsencrypt/live/your-domain.com/fullchain.pem"</span></span>
<span class="line"><span>sleepy_main_ssl_key = "/etc/letsencrypt/live/your-domain.com/privkey.pem"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-重启-sleepy-服务" tabindex="-1"><a class="header-anchor" href="#_3-重启-sleepy-服务"><span>3. 重启 Sleepy 服务</span></a></h3>
<p>配置完成后，重启 Sleepy 服务以应用更改：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果使用 systemd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sleepy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或者如果使用 panel.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./scripts/panel.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排除" tabindex="-1"><a class="header-anchor" href="#故障排除"><span>故障排除</span></a></h2>
<h3 id="证书权限问题" tabindex="-1"><a class="header-anchor" href="#证书权限问题"><span>证书权限问题</span></a></h3>
<p>如果遇到权限错误，确保 Sleepy 运行的用户有权读取证书文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 假设 Sleepy 以 sleepy 用户运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sleepy:sleepy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/your/cert.pem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/your/key.pem</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或者添加读取权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 644</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/your/cert.pem</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 640</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/your/key.pem</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="证书路径错误" tabindex="-1"><a class="header-anchor" href="#证书路径错误"><span>证书路径错误</span></a></h3>
<p>确保在 <code v-pre>.env</code> 文件中指定的路径是正确的。可以使用绝对路径避免混淆。</p>
<h3 id="证书过期" tabindex="-1"><a class="header-anchor" href="#证书过期"><span>证书过期</span></a></h3>
<p>Let's Encrypt 证书有效期为 90 天。确保设置自动续期：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 添加 cron 任务自动续期</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' &#x26;&#x26; certbot renew -q"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tee</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/crontab</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/dev/null</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置"><span>高级配置</span></a></h2>
<h3 id="同时支持-http-和-https" tabindex="-1"><a class="header-anchor" href="#同时支持-http-和-https"><span>同时支持 HTTP 和 HTTPS</span></a></h3>
<p>如果您希望同时支持 HTTP 和 HTTPS，可以使用 Nginx 或 Apache 作为反向代理，将 HTTP 流量重定向到 HTTPS。</p>
<h4 id="nginx-配置示例" tabindex="-1"><a class="header-anchor" href="#nginx-配置示例"><span>Nginx 配置示例</span></a></h4>
<div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-nginx"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">your-domain.com;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 301</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> https://$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">request_uri</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">your-domain.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    ssl_certificate </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/etc/letsencrypt/live/your-domain.com/fullchain.pem;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    ssl_certificate_key </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/etc/letsencrypt/live/your-domain.com/privkey.pem;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">http://localhost:9010;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Host $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Real-IP $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-For $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">proxy_add_x_forwarded_for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">X-Forwarded-Proto $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全最佳实践" tabindex="-1"><a class="header-anchor" href="#安全最佳实践"><span>安全最佳实践</span></a></h2>
<ol>
<li><strong>定期更新证书</strong>：确保您的证书不会过期</li>
<li><strong>使用强密码套件</strong>：如果使用 Nginx 或 Apache，配置强密码套件</li>
<li><strong>启用 HSTS</strong>：告诉浏览器始终使用 HTTPS 连接</li>
<li><strong>保护私钥</strong>：确保私钥文件的权限设置正确，不允许未授权访问</li>
</ol>
</div></template>


