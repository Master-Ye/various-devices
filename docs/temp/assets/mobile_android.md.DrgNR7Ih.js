import{_ as t,c as a,o as e,a2 as n,m as i,a as s}from"./chunks/framework.Bv-1nw0d.js";const v=JSON.parse('{"title":"Android Mobile Env","description":"","frontmatter":{},"headers":[],"relativePath":"mobile/android.md","filePath":"mobile/android.md"}'),l={name:"mobile/android.md"},o=n(`<h1 id="android-mobile-env" tabindex="-1">Android Mobile Env <a class="header-anchor" href="#android-mobile-env" aria-label="Permalink to &quot;Android Mobile Env&quot;">​</a></h1><p>Android mobile platform for various-devices</p><h2 id="getmobiledeviceinfo" tabindex="-1">getMobileDeviceInfo <a class="header-anchor" href="#getmobiledeviceinfo" aria-label="Permalink to &quot;getMobileDeviceInfo&quot;">​</a></h2><p>platform Android</p><h3 id="usage" tabindex="-1">usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;usage&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getMobileDeviceInfo } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;various-devices&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getMobileDeviceInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>getMobileDeviceInfo This API is used to retrieve information about mobile devices, including the device type Android and the current screen width and height.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  platform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;android&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  screenWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  screenHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>params</p><ol><li>platform string platform (Android 环境)</li><li>screenWidth number current screen width(当前屏幕宽度)</li><li>screenHeight number current screen height(当前屏幕高度)</li></ol><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,11),r=i("table",null,[i("tbody",null,[i("tr",null,[i("td",{align:"center",valign:"top",width:"14.28%"},[i("a",{href:"https://github.com/message163"},[i("img",{src:"https://avatars.githubusercontent.com/u/32630999?v=4?s=50",width:"50px;",alt:"xiaoMan"}),i("br"),i("sub",null,[i("b",null,"xiaoMan")])]),i("br"),i("a",{href:"https://github.com/message163/various-devices/commits?author=message163",title:"Code"},"💻"),s(),i("a",{href:"https://github.com/message163/various-devices/commits?author=message163",title:"Documentation"},"📖"),s(),i("a",{href:"#design-message163",title:"Design"},"🎨")]),i("td",{align:"center",valign:"top",width:"14.28%"},[i("a",{href:"https://github.com/yanzibiezou"},[i("img",{src:"https://avatars.githubusercontent.com/u/107256547?v=4?s=50",width:"50px;",alt:"yanzibiezou"}),i("br"),i("sub",null,[i("b",null,"yanzibiezou")])]),i("br"),i("a",{href:"https://github.com/message163/various-devices/commits?author=yanzibiezou",title:"Code"},"💻")]),i("td",{align:"center",valign:"top",width:"14.28%"},[i("a",{href:"https://github.com/core-admin"},[i("img",{src:"https://avatars.githubusercontent.com/u/77573477?v=4?s=50",width:"50px;",alt:"徐轲"}),i("br"),i("sub",null,[i("b",null,"徐轲")])]),i("br"),i("a",{href:"https://github.com/message163/various-devices/commits?author=core-admin",title:"Code"},"💻")]),i("td",{align:"center",valign:"top",width:"14.28%"},[i("a",{href:"https://github.com/yinxing233"},[i("img",{src:"https://avatars.githubusercontent.com/u/132836709?v=4?s=50",width:"50px;",alt:"yinxing233"}),i("br"),i("sub",null,[i("b",null,"yinxing233")])]),i("br"),i("a",{href:"https://github.com/message163/various-devices/commits?author=yinxing233",title:"Code"},"💻")])])]),i("tfoot",null,[i("tr",null,[i("td",{align:"center",size:"13px",colspan:"7"},[i("img",{src:"https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg"}),i("a",{href:"https://all-contributors.js.org/docs/en/bot/usage"},"Add your contributions")])])])],-1),h=[o,r];function d(p,c,u,g,k,b){return e(),a("div",null,h)}const f=t(l,[["render",d]]);export{v as __pageData,f as default};