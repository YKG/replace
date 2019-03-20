const CH = '~';

function replaceFirst_str(a, b, c) {
    return a.indexOf(CH);
}

function replaceFirst_opt(a, b, c) {
    const len = a.length;
    for (let i = 0; i < len; i++) {
        if (a.charAt(i) === CH) {
            return i;
        }
    }
    return -1;
}

function replaceFirst_re(a, b, c) {
    return a.search(/~/);
}

function replaceFirst_re2(a, b, c) {
    return /~/.test(a);
}


function startsWith_re(a, b, c) {
    return /^<html class="reX'/.test(a);
}


function startsWith(a, b, c) {
    return a.startsWith('<html class="reX');
}


// ------ test start ------------------------------------------------------------
const { performance } = require('perf_hooks');

function mytest(text, alg) {
    const find = '票房';
    const replacement = '<a class="matched">票房</a >';

    let sum = 0;
    const n = 20;
    for (let t = 0; t < n; t++) {
        let t1 = performance.now();
        for (let i = 0; i < 10000; i++) {
            alg(text, find, replacement);
        }
        let t2 = performance.now();
        sum += t2 - t1;
        console.log(alg.name, t2 - t1);
    }
    console.log('avg', sum/n, '\n');
}

function run2(text) {
    mytest(text, startsWith);
    mytest(text, startsWith_re);
}

function run(text) {
    mytest(text, replaceFirst_re2);
    mytest(text, replaceFirst_str);
    // mytest(text, replaceFirst_opt);
    mytest(text, replaceFirst_re);
}

// let s = '票房票房html<a>票房</a>票房AA\x01BB<a>wng票房e1kk</a> 票房票房loong票房票房 <a href="票房" alter="nXnwgX9">X票房票房X</a>end票房wng213<p e>票房</p><ax票房>票房</ax><img src="票房"/><a >票房</a>票房票房';
// let r = replaceFirst_alg2(s, '票房', '十一');
// console.log(r);
// console.log(replaceFirst_alg2('<a>票房</a>票房123456789012345678901234567890票房', '票房', '<a class=“matched”>票房</a >'));
// console.log(replaceFirst_alg2('<p span="票房">票房</p>', '票房', '<a class=“matched”>票房</a >'));

// run('<a>票房</a>票房123456789012345678901234567890票房');
const s = '<html class="responsive" style="font-size: 100px;"><script async="" src="https://s0.meituan.net/bs/js/?f=mta-js:mta.min.js"><\\/script><script type="text/javascript">window["_gaUserPrefs"] = { ioo : function() { return true; } }<\\/script><head>\n' +
    '    <title>猫眼专业版-实时票房</title>\n' +
    '    <meta name="csrf" content="057315e3736f70845f30d6dc0309f9beb3d42dc0">\n' +
    '    <!--// dns prefetch -->\n' +
    '    <link rel="dns-prefetch" href="//ms0.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//mc.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//s0.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//p0.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//p1.meituan.net">\n' +
    '    <!-- 上报通道标识 -->\n' +
    '    <meta name="lx:category" content="moviepro">\n' +
    '    <!-- 上报应用标识 -->\n' +
    '    <meta name="lx:appnm" content="moviepro">\n' +
    '    <!-- 页面名称：i版_专业服务_影人详情页，上报页面标识 -->\n' +
    '    <meta name="lx:cid" content="DashboardController">\n' +
    '    <link rel="dns-prefetch" href="//analytics.meituan.com">\n' +
    '    <link rel="dns-prefetch" href="//analytics.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//wreport.meituan.net">\n' +
    '    <link rel="dns-prefetch" href="//report.meituan.net">\n' +
    '\n' +
    '    <!--// meta section -->\n' +
    '    <meta charset="utf-8">\n' +
    '    <meta name="keywords" content="猫眼票房分析,猫眼电影,电影票房,实时票房,日票房,预售票房,影片票房趋势,受众画像,实时排片,预售排片,上座率,历史票房">\n' +
    '    <meta name="description" content="猫眼票房分析，提供准确的每日电影实时票房、排片、上座率查询，为电影从业者提供及时、专业的数据分析服务">\n' +
    '    <meta http-equiv="cleartype" content="yes">\n' +
    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '    <meta http-equiv="Cache-Control" content="no-cache">\n' +
    '    <meta http-equiv="Pragma" content="no-cache">\n' +
    '    <meta http-equiv="cache-control" content="no-store">\n' +
    '    <meta name="format-detection" content="telephone=no">\n' +
    '    <meta name="renderer" content="webkit">\n' +
    '    <link rel="icon" type="image/x-icon" href="//s0.meituan.net/bs/?f=myfe/piaofang:img/favicon-f8defb48.ico">\n' +
    '    <!--// apple webapp -->\n' +
    '    <meta name="mobile-web-app-capable" content="yes">\n' +
    '    <meta name="apple-mobile-web-app-capable" content="yes">\n' +
    '    <meta name="apple-mobile-web-app-status-bar-style" content="black">\n' +
    '    <!--// viewport -->\n' +
    '    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">\n' +
    '    <!--// cat -->\n' +
    '    <script>\n' +
    '        "use strict";!function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"_Owl_",t=window;t[i]||(t[i]={isRunning:!1,isReady:!1,preTasks:[],dataSet:[],use:function(i,n){this.isReady&&t.Owl&&t.Owl[i](n),this.preTasks.push({api:i,data:[n]})},add:function(i){this.dataSet.push(i)},run:function(){var i=this;if(!this.isRunning){this.isRunning=!0;var n=t.onerror;t.onerror=function(){this.isReady||this.add({type:"jsError",data:arguments}),n&&n.apply(t,arguments)}.bind(this),(t.addEventListener||t.attachEvent)("error",function(t){i.isReady||i.add({type:"resError",data:[t]})},!0)}}},t[i].run())}();\n' +
    '    <\\/script>\n' +
    '\n' +
    '    <link rel="stylesheet" href="//s0.meituan.net/bs/?f=myfe/piaofang:/client/css/common-82762e11.css">\n' +
    '\n' +
    '    <link rel="stylesheet" href="//s0.meituan.net/bs/?f=myfe/piaofang:/client/css/pages-dashboard-3cb90b51.css">\n' +
    '\n' +
    '\n' +
    '    <script>\n' +
    '        (function() {\n' +
    '            var timer = null;\n' +
    '            function scale() {\n' +
    '                var html = document.documentElement;\n' +
    '                var r = html.clientWidth/1920;\n' +
    '                html.style.fontSize = Math.ceil(r*100) + "px";\n' +
    '                html.classList.add("responsive");\n' +
    '                var s = html.clientWidth/html.clientHeight;\n' +
    '                if (s < 1.5) {\n' +
    '                    html.classList.add("narrow");\n' +
    '                } else {\n' +
    '                    html.classList.remove("narrow");\n' +
    '                }\n' +
    '                timer = null;\n' +
    '            }\n' +
    '            window.onresize = function() {\n' +
    '                if (timer) clearTimeout(timer);\n' +
    '                timer = setTimeout(scale, 100);\n' +
    '            }\n' +
    '            scale();\n' +
    '        })();\n' +
    '    <\\/script>\n' +
    '\n' +
    '    <script>\n' +
    '        /*\n' +
    '         * workaround for image onError(copy from header.hbs)\n' +
    '         * chrome对于同一图片的error事件只触发一次\n' +
    '         * @see https://stackoverflow.com/questions/17636397/why-is-chromes-onerror-event-for-the-img-element-only-fired-once\n' +
    '         * 由于页面采用server render, 如果服务器端render，而图片的地址错误，会导致\n' +
    '         * 客户端render前图片已经报错了, 无法通过React.onError监听\n' +
    '         */\n' +
    '        document.addEventListener("DOMContentLoaded", function() {\n' +
    '            var images = document.querySelectorAll(".need-handle-pic");\n' +
    '            for(var i = 0; i < images.length; i++) {\n' +
    '                var imgItem = images[i];\n' +
    '                var className = imgItem.className;\n' +
    '                var src = imgItem.getAttribute("src");\n' +
    '                if (!src) {\n' +
    '                    imgItem.className = className + " has-no-pic";\n' +
    '                    imgItem.setAttribute("alt", "");\n' +
    '                } else {\n' +
    '                    imgItem.onerror = function(e) {\n' +
    '                        e.target.className = className + " has-error-pic";\n' +
    '                        e.target.setAttribute("alt", "");\n' +
    '                    }\n' +
    '                }\n' +
    '            }\n' +
    '        });\n' +
    '    <\\/script>\n' +
    '</head>\n' +
    '<body>\n' +
    '<div id="app"><div class="dashboard-page" data-reactroot=""><div class="dashboard"><div class="dashboard-title"><span class="dashboard-nav"><span class="active">综合票房</span><span class="">分账票房</span></span><div class="dashboard-title-clock"><span class="sprite sprite-logo"></span><span class="clock"><span><span>2019<!-- -->年<!-- -->03<!-- -->月<!-- -->11<!-- -->日</span>&nbsp;<span><!-- -->16<!-- -->:<!-- -->11</span></span></span></div><div class="dashboard-title-group"><div class="dashboard-title-togglefullscreen button">全屏</div><div class="dashboard-title-link button"><a href="/?ver=normal">返回常规版<span class="sprite sprite-arrow"></span></a></div></div></div><div class="dashboard-content"><div class="dashboard-left"><div class="dashboard-detail bg"><div class="movie-hint">点击&nbsp;<span class="sprite sprite-star-big"></span>&nbsp;优先展示</div></div><div class="dashboard-push"></div><div class="dashboard-calendar-container bg"><div class="dashboard-calendar"><div class="cal-current">2019.03.11<span class="traingle"></span></div><div class="cal-box"><span>今日实时</span><span class="cal-box-num">3790.1万</span></div><p class="cal-update-time"><span>北京时间 16:11:25</span></p></div></div></div><div class="dashboard-list bg"><table class="dashboard-table dashboard-table-header"><thead><tr><th class="moviename-th"><div><span>影片</span><span class="mn"> (点击 <span class="sprite sprite-tiny-star"></span> 优先展示)</span></div></th><th><div class="theader">综合票房(万)</div></th><th><div class="theader">票房占比</div></th><th><div class="theader">排片场次</div></th><th><div class="theader">排片占比</div></th><th><div class="theader">场均人次</div></th><th><div class="theader">上座率</div></th></tr></thead></table><div class="movielist-container"><div class="movielist"><table class="dashboard-table"><tbody><tr class=""><td class="moviename-td" title="惊奇队长"><div><div class="moviename-num"><p class="moviename-index">01</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">惊奇队长</p><p class="moviename-info"><span>上映4天</span>&nbsp;&nbsp;<span>6.17亿</span></p></div></div></td><td class="realtime">2215.73</td><td>58.4%</td><td>143582</td><td>46.7%</td><td>5</td><td>3.5%</td></tr><tr class=""><td class="moviename-td" title="绿皮书"><div><div class="moviename-num"><p class="moviename-index">02</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">绿皮书</p><p class="moviename-info"><span>上映11天</span>&nbsp;&nbsp;<span>3.03亿</span></p></div></div></td><td class="realtime">627.81</td><td>16.5%</td><td>44984</td><td>14.6%</td><td>5</td><td>4.6%</td></tr><tr class=""><td class="moviename-td" title="夏目友人帐"><div><div class="moviename-num"><p class="moviename-index">03</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">夏目友人帐</p><p class="moviename-info"><span>上映5天</span>&nbsp;&nbsp;<span>8705.0万</span></p></div></div></td><td class="realtime">326.47</td><td>8.6%</td><td>37442</td><td>12.2%</td><td>3</td><td>4.0%</td></tr><tr class=""><td class="moviename-td" title="阿丽塔：战斗天使"><div><div class="moviename-num"><p class="moviename-index">04</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">阿丽塔：战斗天使</p><p class="moviename-info"><span>上映18天</span>&nbsp;&nbsp;<span>8.59亿</span></p></div></div></td><td class="realtime">209.48</td><td>5.5%</td><td>26023</td><td>8.4%</td><td>3</td><td>3.2%</td></tr><tr class=""><td class="moviename-td" title="驯龙高手3"><div><div class="moviename-num"><p class="moviename-index">05</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">驯龙高手3</p><p class="moviename-info"><span>上映11天</span>&nbsp;&nbsp;<span>3.23亿</span></p></div></div></td><td class="realtime">185.35</td><td>4.8%</td><td>23879</td><td>7.7%</td><td>3</td><td>3.5%</td></tr><tr class=""><td class="moviename-td" title="流浪地球"><div><div class="moviename-num"><p class="moviename-index">06</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">流浪地球</p><p class="moviename-info"><span>上映35天</span>&nbsp;&nbsp;<span>46.07亿</span></p></div></div></td><td class="realtime">166.91</td><td>4.4%</td><td>20973</td><td>6.8%</td><td>3</td><td>3.5%</td></tr><tr class=""><td class="moviename-td" title="飞驰人生"><div><div class="moviename-num"><p class="moviename-index">07</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">飞驰人生</p><p class="moviename-info"><span>上映35天</span>&nbsp;&nbsp;<span>17.13亿</span></p></div></div></td><td class="realtime">26.48</td><td>0.6%</td><td>4482</td><td>1.4%</td><td>2</td><td>3.4%</td></tr><tr class=""><td class="moviename-td" title="照相师"><div><div class="moviename-num"><p class="moviename-index">08</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">照相师</p><p class="moviename-info"><span>上映90天</span>&nbsp;&nbsp;<span>1099.2万</span></p></div></div></td><td class="realtime">4.42</td><td>0.1%</td><td>19</td><td>&lt;0.1%</td><td>69</td><td>22.3%</td></tr><tr class=""><td class="moviename-td" title="浴血广昌"><div><div class="moviename-num"><p class="moviename-index">09</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">浴血广昌</p><p class="moviename-info"><span>2018-08</span>&nbsp;&nbsp;<span>9728.6万</span></p></div></div></td><td class="realtime">3.53</td><td>&lt;0.1%</td><td>13</td><td>&lt;0.1%</td><td>84</td><td>40.5%</td></tr><tr class=""><td class="moviename-td" title="熊出没·原始时代"><div><div class="moviename-num"><p class="moviename-index">10</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">熊出没·原始时代</p><p class="moviename-info"><span>上映35天</span>&nbsp;&nbsp;<span>7.10亿</span></p></div></div></td><td class="realtime">2.97</td><td>&lt;0.1%</td><td>992</td><td>0.3%</td><td>1</td><td>3.6%</td></tr><tr class=""><td class="moviename-td" title="新喜剧之王"><div><div class="moviename-num"><p class="moviename-index">11</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">新喜剧之王</p><p class="moviename-info"><span>上映35天</span>&nbsp;&nbsp;<span>6.24亿</span></p></div></div></td><td class="realtime">2.78</td><td>&lt;0.1%</td><td>883</td><td>0.2%</td><td>1</td><td>1.7%</td></tr><tr class=""><td class="moviename-td" title="醒来之爱的呼唤"><div><div class="moviename-num"><p class="moviename-index">12</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">醒来之爱的呼唤</p><p class="moviename-info"><span>上映4天</span>&nbsp;&nbsp;<span>154.6万</span></p></div></div></td><td class="realtime">2.69</td><td>&lt;0.1%</td><td>364</td><td>0.1%</td><td>3</td><td>9.6%</td></tr><tr class=""><td class="moviename-td" title="一吻定情"><div><div class="moviename-num"><p class="moviename-index">13</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">一吻定情</p><p class="moviename-info"><span>上映26天</span>&nbsp;&nbsp;<span>1.73亿</span></p></div></div></td><td class="realtime">2.60</td><td>&lt;0.1%</td><td>497</td><td>0.1%</td><td>2</td><td>5.3%</td></tr><tr class=""><td class="moviename-td" title="古井凶灵"><div><div class="moviename-num"><p class="moviename-index">14</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">古井凶灵</p><p class="moviename-info"><span>上映18天</span>&nbsp;&nbsp;<span>491.7万</span></p></div></div></td><td class="realtime">2.52</td><td>&lt;0.1%</td><td>1118</td><td>0.3%</td><td>1</td><td>1.2%</td></tr><tr class=""><td class="moviename-td" title="魔神Z"><div><div class="moviename-num"><p class="moviename-index">15</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">魔神Z</p><p class="moviename-info"><span>上映4天</span>&nbsp;&nbsp;<span>30.6万</span></p></div></div></td><td class="realtime">2.24</td><td>&lt;0.1%</td><td>592</td><td>0.1%</td><td>2</td><td>4.4%</td></tr><tr class=""><td class="moviename-td" title="廉政风云"><div><div class="moviename-num"><p class="moviename-index">16</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">廉政风云</p><p class="moviename-info"><span>上映35天</span>&nbsp;&nbsp;<span>1.13亿</span></p></div></div></td><td class="realtime">1.89</td><td>&lt;0.1%</td><td>141</td><td>&lt;0.1%</td><td>4</td><td>5.4%</td></tr><tr class=""><td class="moviename-td" title="我们的爱情"><div><div class="moviename-num"><p class="moviename-index">17</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">我们的爱情</p><p class="moviename-info"><span>上映4天</span>&nbsp;&nbsp;<span>8.8万</span></p></div></div></td><td class="realtime">1.62</td><td>&lt;0.1%</td><td>68</td><td>&lt;0.1%</td><td>9</td><td>10.2%</td></tr><tr class=""><td class="moviename-td" title="大路朝天"><div><div class="moviename-num"><p class="moviename-index">18</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">大路朝天</p><p class="moviename-info"><span>上映80天</span>&nbsp;&nbsp;<span>2483.7万</span></p></div></div></td><td class="realtime">1.61</td><td>&lt;0.1%</td><td>6</td><td>&lt;0.1%</td><td>71</td><td>57.4%</td></tr><tr class=""><td class="moviename-td" title="朝花夕誓-于离别之朝束起约定之花"><div><div class="moviename-num"><p class="moviename-index">19</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">朝花夕誓-于离别之朝束起约定之花</p><p class="moviename-info"><span>上映18天</span>&nbsp;&nbsp;<span>1715.7万</span></p></div></div></td><td class="realtime">0.91</td><td>&lt;0.1%</td><td>238</td><td>&lt;0.1%</td><td>2</td><td>3.6%</td></tr><tr class=""><td class="moviename-td" title="梦想之城"><div><div class="moviename-num"><p class="moviename-index">20</p><p class="moviename-star"><span class="sprite sprite-star-gray"></span></p></div><div class="moviename-desc"><p class="moviename-name">梦想之城</p><p class="moviename-info"><span>上映4天</span>&nbsp;&nbsp;<span>12.8万</span></p></div></div></td><td class="realtime">0.70</td><td>&lt;0.1%</td><td>228</td><td>&lt;0.1%</td><td>2</td><td>3.6%</td></tr></tbody></table></div></div></div></div></div></div></div>\n' +
    '<script>var AppData = {"useKNB":true,"title":"猫眼专业版-实时票房","$autoLayout":true,"$mobile":false,"host":"https:\u002F\u002Fbox.maoyan.com","calendar":{"today":"2019-03-11","selectMinDate":"2011-01-01","selectDate":"2019-03-11","selectMaxDate":"2019-03-26"},"$query":{},"$config":{"sentry":{"api":"http:\u002F\u002Fsentry7.sankuai.com\u002F81","appId":"7ca46ff13ccc4bb68f308d890ee47552","appSecret":"b504d937d8ca44a6b9e276dc6ea090c1","disable":false}},"$renderTime":1552288543784};<\\/script>\n' +
    '<script crossorigin="anonymous" src="//www.dpfile.com/app/owl/static/owl_1.6.3.js"><\\/script>\n' +
    '<script>\n' +
    '    if (window.Owl) {\n' +
    '        Owl.start({\n' +
    '\n' +
    '            project: "movie-pro-nbox",\n' +
    '        });\n' +
    '    }\n' +
    '<\\/script>\n' +
    '<!-- xNB 相关 -->\n' +
    '<script>\n' +
    '    window.useKNB=true;\n' +
    '    window._KNB_IGNORE_WECHAT=true;\n' +
    '<\\/script>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script src="//s0.meituan.net/bs/knb/v1.5.12/knb.js"><\\/script>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script>\n' +
    '    window.felisConfig = {\n' +
    '        debug: false,\n' +
    '        combo: "//s0.meituan.net/bs/file-lazy?f=",\n' +
    '        modules: [{"m":"/modules/@myfe/felis-lib.js","v":"69035ef7","s":116549},{"m":"/modules/object-assign.js","v":"09d6e9c8","s":1735},{"m":"/client/components/button/button.js","v":"fd9be03f","s":2276},{"m":"/client/components/image.js","v":"0c8770fb","s":3151},{"m":"/client/components/nav-bar.js","v":"46ba0805","s":3572},{"m":"/common/cookie.js","v":"82b62e99","s":593},{"m":"/common/env.js","v":"4980eb5a","s":3242},{"m":"/common/tools.js","v":"a3a52459","s":7524},{"m":"/common/xnb/knb-impl.js","v":"7b7bb3b7","s":6066},{"m":"/common/zepto.js","v":"d49be70d","s":28731},{"m":"/common/nAjax.js","v":"44ac64d4","s":1401},{"m":"/common/xnb/mtnb-bridge.js","v":"93281367","s":1804},{"m":"/common/xnb/mtnb-impl.js","v":"74807337","s":6976},{"m":"/common/wechat.js","v":"59c6f96f","s":2095},{"m":"/common/xnb/wechat-bridge.js","v":"450e633f","s":1351},{"m":"/common/xnb.js","v":"5b29a380","s":1298},{"m":"/client/common/utils/xnb.js","v":"f4e89d5c","s":305},{"m":"/client/common/libs/polyfill.js","v":"5b906e9e","s":2991},{"m":"/client/common/libs/zepto.js","v":"d49be70d","s":28731},{"m":"/client/common/utils/tools.js","v":"4d061925","s":7117},{"m":"/client/common/utils/env.js","v":"d5b02555","s":2633},{"m":"/client/components/link.js","v":"23959395","s":3535},{"m":"/client/components/download/bottom-bar.js","v":"dc888ff2","s":2134},{"m":"/client/common/page.js","v":"0662a24f","s":5190},{"m":"/client/components/clock.js","v":"2d136749","s":1769},{"m":"/client/vendor/solarlunar.js","v":"7f49fed5","s":12444},{"m":"/client/common/festival.js","v":"b8cb8e5e","s":942},{"m":"/client/components/calendar-pc.js","v":"ec607331","s":7204},{"m":"/client/components/stopwatch.js","v":"ae459105","s":2369},{"m":"/modules/superagent.js","v":"402b2887","s":11265},{"m":"/client/common/request.js","v":"c368cbfc","s":1215},{"m":"/client/common/util.js","v":"b72d3d48","s":3676},{"m":"/client/common/fullscreen.js","v":"b9ec503f","s":730},{"m":"/client/pages/dashboard.js","v":"f2934958","s":13893}],\n' +
    '        comboPrefix: "myfe/piaofang:",\n' +
    '    };\n' +
    '    window.pageId = "DashboardController";\n' +
    '<\\/script>\n' +
    '\n' +
    '\n' +
    '<script src="//s0.meituan.net/bs/?f=myfe/piaofang:/client/stat-01c873d3.js" async=""><\\/script>\n' +
    '\n' +
    '<script src="//s0.meituan.net/bs/?f=myfe/piaofang:/common/felis-6edb4ee1.js" async=""><\\/script>\n' +
    '\n' +
    '\n' +
    '<!-- 灵犀统计 -->\n' +
    '<script type="text/javascript">\n' +
    '    !(function (win, doc, ns) {\n' +
    '        var cacheFunName = "_MeiTuanALogObject";\n' +
    '        win[cacheFunName] = ns;\n' +
    '        if (!win[ns]) {\n' +
    '            var _LX = function () {\n' +
    '                _LX.q.push(arguments);\n' +
    '                return _LX;\n' +
    '            };\n' +
    '            _LX.q = _LX.q || [];\n' +
    '            _LX.l = +new Date();\n' +
    '            win[ns] = _LX;\n' +
    '        }\n' +
    '    })(window, document, "LXAnalytics");\n' +
    '<\\/script>\n' +
    '\n' +
    '<script src="//analytics.meituan.net/analytics.js" type="text/javascript" charset="utf-8" async="" defer=""><\\/script>\n' +
    '\n' +
    '\n' +
    '</body></html>';
// run(s);
run2(s);
