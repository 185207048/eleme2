<template>
    <div class="main">
        <div class="header">
        <!--头的左半部分-->
            <div class="header-left">
                <div class="header-left-content">
                    <div class="header-content">
                        <img class="header-img" :src="require('../assets/image/logo.png')" />
                        <div class="header-point">·</div>
                        <div class="header-title">商家开发平台</div>
                    </div>
                </div>
            </div>
        <!--头的右半部分-->
            <div class="header-right">
                <div class="header-right-content">
                    <div class="header-right-title">首页</div>
                    <div class="header-right-title">文档中心</div>
                    <div class="header-right-title">管理中心</div>
                    <div class="header-right-title">帮助中心</div>
                    <div class="header-right-input header-right-title ">
                        <!--<input placeholder="搜索"  class="header-input"/>-->
                        <el-input
                            placeholder="搜索"
                            prefix-icon="el-icon-search"
                            class="header-input" >
                        </el-input>
                    </div>
                    <div class="header-right-title">|</div>
                    <div class="header-right-title" @click="takelogin">登录</div>
                    <div class="header-right-title" >注册</div>
                </div>
            </div>

            <div>
            </div>
        </div>
        <!--走马灯 carousel-->
        <div class="carousel">
            <Carousel />
        </div>
        <!--主要信息 eleb-->
        <div class="eleb">
            <!--公告 adv-->
            <div class="adv">
                <ul class="adv-ul">
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-new">New</div>
                          <div class="adv-content">关于服务市场转账手续费变更公告</div>
                        </div>
                    </li>
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-new">New</div>
                          <div class="adv-content">【接口变更】订单接口变更</div>
                        </div>
                    </li>
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-content">全部公告</div>
                          <div><img :src="require('../assets/dayu.png')" height="20px" width="10px"></div>
                        </div>
                    </li>
                </ul>
                <!--资源优势和流程接入-->
                <div class="adv-main1">
                    <div class="adv-main-title">资源优势和接入流程</div>
                    <div class="adv-serve">
                        <div class="adv-serve-white"></div>
                        <div class="adv-serve-content" @click="changewhite">
                            <div class="adv-s-content1">平台服务商</div>
                            <div class="adv-s-content2">提供经营管理增值服务</div>
                        </div>
                        <div class="adv-serve-content" @click="changewhite"> 
                            <div class="adv-s-content1">企业服务商</div>
                            <div class="adv-s-content2">提供订单商品基础服务</div>
                        </div>
                    </div>
                    <div class="adv-serve-title">
                        <div class="adv-serve-vor adv-serve-black" @click="changesmall">资源优势</div>
                        <div class="adv-serve-point">·</div>
                        <div class="adv-serve-vor" @click="changesmall">接入流程</div>
                    </div>
                    <div class="adv-serve-advers" v-if="white_position">
                        <ul class="adv-serve-ul" v-if="small_title">
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAADg0lEQVR42u3cy00bURiG4Q8ra0MJ3nlpSy7AlOC9kTLpgA48dEAHTCSzpwRcAJJnyc50ENOAs+AoiogiZsbnft5Xyo4kBz+aGc/tvzidTqJ8G/ERAEwAE8AEMAFMABPAABPABDABTAATwAQwwJRl3/gIhvfyqitJc/NHkvaS9oupfsWyxgue6BgEO5FUS/r+nx/5KaleTHUAOD3cStK9pMsvfvQo6XYxVZMl8N2jKkmVpKXj32Enqdms3X+QBveh51/7ERLZOvDdoyaSniTNPP8uraTVZu1mtzgQNziyVWCDu++w+3LVUdLcNvKZuEGRbZ8mPQXElfm/nyLElaQH82+lCWyOuTOFb2bWEhNuMGSbW3CleKoixA2CbBN4GRHwMlJc78hcqvSP6xUZ4DC43pABDofrBRngsLjOkUfgBsd1ijwCNwpcZ8gjcKPLKvKoUNxVpLh/I68AHoY7kcLeo+1YY9YKcM9qhb0h0rVLs1aAe7Yqaa1FAb+8ap7I1vtnKzZrBrhjV6WtmStZmVca8KG0NRcFbJ5TfktoyW/nPltd4i66KWmtxQEvpqr18Yht7LVmrQAPqNLHI7axdpSlZ9yKBF5MtZd0HSnyUdK1WSPAmSFbxS3+PDgyZOu4xQNHhOwE1zbwLiK3XULIznBtA8d0ftkksiU7xZXsv124V/j3k9rNevgdGHP35lnu7zo5x3VxDF5FcCw76x6qpy3ZC651YPNe7lxhrhS1svRusGNkb7jWd9GfdteVEh/h4GB37RXXKXAuWUT2jst5sL/ddRBcgP0gB8MF2D1yUFyAhyF3PUtoJc1D4vIl67wvX5WkW/17YaeVdB96wh3AdrEnZgs/xLY2gDOPYzDAlHLOBoLf1O+VPF6q3NZjK19qcpuSa/0YfFO/TxRw2uy2Hh8GwgZdt6spuVaBDW7wabN9kXOdkuviGJzqtNnspuRaBzbH3CimzZq19DnmZjUl19UWXCmeqgLW7R041Wmz2UzJ5Ty4wAAGmAAmgAlgApgAJoABJoAJYAKYACaACWCACWACmAAmgAlgAphsA6c6bTbZKbm+gZuIPqimgHV3yvbbhVFMm93W417TZnOYkuvrGJzqtNnkp+R6ATbv5QadNjvkBfBcpuQ630V/2l1XYoTDl+tOboQDcR5MABPABDABDDABTAATwAQwAUwAA0wAE8AEMAFMZ/Ybhrp2girPRfkAAAAASUVORK5CYII=">
                                </div>
                                <div class="advers-title">服务市场</div>
                                <div class="advers-content">打造专业服务市场，与商家端后台无缝对接，全平台分发您的应用</div>
                            </li>
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,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">
                                </div>
                                <div class="advers-title">海量活跃商家</div>
                                <div class="advers-content">共享饿了么百万活跃商家资源，在线订购您的应用服务</div>
                            </li>
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,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">
                                </div>
                                <div class="advers-title">丰富的 IT 工具</div>
                                <div class="advers-content">提供丰富的 API 接口，除饿了么商家的核心订单功能外，提供更多专属接口</div>
                            </li>
                        </ul>
                        <ul class="adv-input-ul" v-if="!small_title">
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">1</div>
                                    <div class="adv-input-content">商务接洽</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">2</div>
                                    <div class="adv-input-content">成为平台服务商</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">3</div>
                                    <div class="adv-input-content">资质审核</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">4</div>
                                    <div class="adv-input-content">创建平台应用</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw"> 
                                    <div class="adv-sign">5</div>
                                    <div class="adv-input-content">开发测试</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">6</div>
                                    <div>上架服务市场</div>
                                </div>
                            </li>
                        </ul>
                        <div class="adv-in">
                            <el-button class="adv-in-serve" type="primary" round>入住服务市场</el-button>
                        </div>
                    </div>
                    
                    <div class="adv-serve-platform" v-if="!white_position">
                        <ul class="adv-serve-ul" v-if="small_title">
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAADg0lEQVR42u3cy00bURiG4Q8ra0MJ3nlpSy7AlOC9kTLpgA48dEAHTCSzpwRcAJJnyc50ENOAs+AoiogiZsbnft5Xyo4kBz+aGc/tvzidTqJ8G/ERAEwAE8AEMAFMABPAABPABDABTAATwAQwwJRl3/gIhvfyqitJc/NHkvaS9oupfsWyxgue6BgEO5FUS/r+nx/5KaleTHUAOD3cStK9pMsvfvQo6XYxVZMl8N2jKkmVpKXj32Enqdms3X+QBveh51/7ERLZOvDdoyaSniTNPP8uraTVZu1mtzgQNziyVWCDu++w+3LVUdLcNvKZuEGRbZ8mPQXElfm/nyLElaQH82+lCWyOuTOFb2bWEhNuMGSbW3CleKoixA2CbBN4GRHwMlJc78hcqvSP6xUZ4DC43pABDofrBRngsLjOkUfgBsd1ijwCNwpcZ8gjcKPLKvKoUNxVpLh/I68AHoY7kcLeo+1YY9YKcM9qhb0h0rVLs1aAe7Yqaa1FAb+8ap7I1vtnKzZrBrhjV6WtmStZmVca8KG0NRcFbJ5TfktoyW/nPltd4i66KWmtxQEvpqr18Yht7LVmrQAPqNLHI7axdpSlZ9yKBF5MtZd0HSnyUdK1WSPAmSFbxS3+PDgyZOu4xQNHhOwE1zbwLiK3XULIznBtA8d0ftkksiU7xZXsv124V/j3k9rNevgdGHP35lnu7zo5x3VxDF5FcCw76x6qpy3ZC651YPNe7lxhrhS1svRusGNkb7jWd9GfdteVEh/h4GB37RXXKXAuWUT2jst5sL/ddRBcgP0gB8MF2D1yUFyAhyF3PUtoJc1D4vIl67wvX5WkW/17YaeVdB96wh3AdrEnZgs/xLY2gDOPYzDAlHLOBoLf1O+VPF6q3NZjK19qcpuSa/0YfFO/TxRw2uy2Hh8GwgZdt6spuVaBDW7wabN9kXOdkuviGJzqtNnspuRaBzbH3CimzZq19DnmZjUl19UWXCmeqgLW7R041Wmz2UzJ5Ty4wAAGmAAmgAlgApgAJoABJoAJYAKYACaACWCACWACmAAmgAlgAphsA6c6bTbZKbm+gZuIPqimgHV3yvbbhVFMm93W417TZnOYkuvrGJzqtNnkp+R6ATbv5QadNjvkBfBcpuQ630V/2l1XYoTDl+tOboQDcR5MABPABDABDDABTAATwAQwAUwAA0wAE8AEMAFMZ/Ybhrp2girPRfkAAAAASUVORK5CYII=">
                                </div>
                                <div class="advers-title">丰富的 IT 工具</div>
                                <div class="advers-content">提供测试工具、API 调试工具、服务监控、日志分析统计等丰富的解决方案</div>
                            </li>
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,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">
                                </div>
                                <div class="advers-title">沙箱环境</div>
                                <div class="advers-content">数据独立，支撑开放业务功能测试需求</div>
                            </li>
                            <li>
                                <div class="advers-I">
                                    <img class="advers-img" src="data:image/png;base64,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">
                                </div>
                                <div class="advers-title">丰富的 API 接口</div>
                                <div class="advers-content">提供丰富的 API 接口，涵盖饿了么商家大量的核心功能，为合作伙伴提供多元服务</div>
                            </li>
                        </ul>
                        <ul class="adv-input-ul" v-if="!small_title">
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">1</div>
                                    <div class="adv-input-content">成为企业服务商</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">2</div>
                                    <div class="adv-input-content">资质审核</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">3</div>
                                    <div class="adv-input-content">创建企业应用</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">4</div>
                                    <div class="adv-input-content">开发调试</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw"> 
                                    <div class="adv-sign">5</div>
                                    <div class="adv-input-content">应用上线</div>
                                </div>
                            </li>
                            <li>
                                <div class="adv-img">
                                </div>
                            </li>
                            <li>
                                <div class="adv-saw">
                                    <div class="adv-sign">6</div>
                                    <div class="adv-input-content">商家授权</div>
                                </div>
                            </li>
                        </ul>
                        <div class="adv-in">
                            <el-button class="adv-in-serve" type="primary" round>查看企业服务商文档</el-button>
                        </div>
                    </div>
                </div>
                <div class="pltform">
                    <div class="pltform-me">
                        <div class="pltform-title">平台优势</div>
                    </div>
                    <div class="platform-body">
                        <div class="platform-body-content1">
                            <div class="platform-content-title">
                                <img class="content-img" src="data:image/png;base64,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" />
                            </div>
                            <div class="platform-content-c">
                                <div class="c-title">线上快速对接</div>
                                <div class="c-content">基于商家需求，提供店铺、商品、订单、配送等业务在内的丰富接口。</div>
                            </div>
                        </div>
                        <div class="platform-body-content2">
                             <div class="platform-content-title">
                                <img class="content-img" src="data:image/png;base64,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"/>
                            </div>
                            <div class="platform-content-c">
                                <div class="c-title">完善的服务支持</div>
                                <div class="c-content">提供稳定的沙箱测试环境和 7*24 小时自助测试服务，有完善的应用监控、服务告警。</div>
                            </div>
                        </div>   
                        <div class="platform-body-content1">
                             <div class="platform-content-title">
                                <img class="content-img" src="data:image/png;base64,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" />
                            </div>
                            <div class="platform-content-c">
                                <div class="c-title">在线问答社区</div>
                                <div class="c-content">直接面对饿了么开发者，沟通更加有效，提问更加直接。</div>
                            </div>
                        </div>   
                        <div class="platform-body-content2">
                             <div class="platform-content-title">
                                <img class="content-img" src="data:image/png;base64,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" />
                            </div>
                            <div class="platform-content-c">
                                <div class="c-title">完善的服务支持</div>
                                <div class="c-content">提供稳定的沙箱测试环境和 7*24 小时自助测试服务，有完善的应用监控、服务告警。</div>
                            </div>
                        </div>
                        <div>
                            <img class="logo-mach" :src="require('../assets/image/logomuch.png')" />
                        </div>
                        <div class="footer">
                            <div class="footer-parter1">
                                <div class="part1-title">成就行业先锋典范，从加入饿了么开发者行列开始</div>
                                <div class="part1-btn">
                                    <el-button class="part1-btn-el" type="primary" round>立即免费加入</el-button>
                                </div>
                            </div>
                            <div class="footer-parter2">
                                <div class="parter2-content con-margin-left">
                                    <ul>
                                        <li>
                                            <img class="sin-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjk0QThGNDI1MzQ2MTFFNzhDMzdGRUM5MjI0Q0E2NzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjk0QThGNDM1MzQ2MTFFNzhDMzdGRUM5MjI0Q0E2NzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOTRBOEY0MDUzNDYxMUU3OEMzN0ZFQzkyMjRDQTY3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOTRBOEY0MTUzNDYxMUU3OEMzN0ZFQzkyMjRDQTY3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoZc318AAAabSURBVHja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" />
                                        </li>
                                        <li class="con-title">联系我们</li>
                                        <li class="con-content">ISV 商务接洽
                                        sm.merchant@ele.me</li>
                                        <li class="con-content">© ele.me 2020.</li>
                                    </ul>
                                </div>
                                <div class="parter2-content">
                                    <ul>
                                        <li class="con-title">开发文档</li>
                                        <li class="con-content">开发说明</li>
                                        <li class="con-content">授权说明</li>
                                        <li class="con-content">消息推送</li>
                                        <li class="con-content">如何测试</li>
                                        <li class="con-content">常用工具</li>
                                        <li class="con-content">SDK使用说明</li>
                                        <li class="con-content">权限属性调整</li>
                                        <li class="con-content">用户身份说明</li>
                                    </ul>
                                </div>
                                <div class="parter2-content">
                                     <ul>
                                        <li class="con-title">运营规范</li>
                                        <li class="con-content">应用接入规范</li>
                                        <li class="con-content">应用运营管理</li>
                                        <li class="con-content">开放平台服务协议</li>
                                        <li class="con-content">安全应急响应中心</li>
                                        <li class="con-content">ISV漏洞管理细则</li>
                                        <li class="con-content">服务商小票规范</li>
                                        <li class="con-content">开放平台运营管理规则</li>
                                        <li class="con-content">开放平台应用安全实施指南</li>
                                        <li class="con-content">服务商清退信息</li>
                                    </ul>
                                </div>
                                <div class="parter2-content con-margin-right">
                                    <ul>
                                        <li class="con-title">服务支持</li>
                                        <li class="con-content">常见问题</li>
                                        <li class="con-content">在线回答</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
                
            </div>
            
           
        </div>
        <!--登录-->
        <div class="login">
            <el-dialog
                class="login-style"
                :visible.sync="login_dialogVisible"
                width="30%"
                show-close=false
                >
                <div class="login-dialog">
                    <div class="login-title">开发者帐号登录</div>
                    <div class="login-detail">一个应用可以授权多个商家</div>
                    <div class="login-btn1">
                        <el-input placeholder="开发者帐号"></el-input>
                    </div>
                     <div class="login-btn2">
                        <el-input placeholder="密码"></el-input>
                    </div>
                    <div class="login-opt">
                        <div class="">忘记密码</div>
                        <div class="margin-right">手机验证码登录</div>
                    </div>
                    <div class="login-contract">
                        <div>登录则视为您接受并同意遵守</div>
                        <div><a href="##">《开放平台服务协议》</a></div>
                    </div>
                    <div class="login-submit">
                        <el-button type="primary" class="login-sub-btn">登录</el-button>
                    </div>
                    <div class="login-footer">
                        <div>
                            <div class="login-footer1">开发者账号登录</div>
                            <div class="login-footer2">直接接入当前商家，无需授权</div>
                        </div>
                        <div>
                            <img :src="require('../assets/dayu.png')" class="login-dayu"/>
                        </div>
                    </div>
                </div>

                </el-dialog>
        </div>
        <!--注册-->
        <div class="login">
            <el-dialog
                class="login-style"
                :visible.sync="register_dialogVisible"
                width="30%"
                ></el-dialog>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel'
    export default {
        name: 'HelloWorld',
        data () {
            return {
               white_position:true, //true表示在左边
               small_title:true, //true表示左边
               login_dialogVisible:false, //对话框
               register_dialogVisible:false,//注册对话框
            }
        },
        components:{
            Carousel
        },
        methods:{
            //修改白块的位置
            changewhite(){
                this.white_position = !this.white_position;
                // transform: translate(50%,40%);
                let ele = document.querySelectorAll(".adv-serve-white")
                if(this.white_position){
                    ele[0].classList.remove("transfor-css")
                }else{
                    ele[0].classList.add("transfor-css")
                }

            },
            // 修改点击
            changesmall(){ 
                this.small_title = !this.small_title;
                // console.log(this.small_title)
                let ele = document.querySelectorAll(".adv-serve-vor");
                // console.log(ele)
                ele[0].classList.remove("adv-serve-black")
                ele[1].classList.remove("adv-serve-black")
                if(this.small_title){
                    ele[0].classList.add("adv-serve-black")
                }else{
                    ele[1].classList.add("adv-serve-black")
                }
            },
            //登录
            takelogin(){
                this.login_dialogVisible = !this.login_dialogVisible
            },
            takeregister(){
                this.register_dialogVisible = !this.register_dialogVisible
            }

            
        }
    }
</script>
<!--全局样式-->
<style scoped>
*{
    margin:0;
    padding:0;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Heiti SC", "Microsoft YaHei", SimHei, "WenQuanYi MicroHei", sans-serif !important;
    list-style: none;
}
body{
    margin:0 !important;
}
</style>
<!--header样式-->
<style scoped>
.header{
    z-index: 99;
    display: flex;
    padding:0.1rem 0.5rem;
    min-height: 0.2rem;
    justify-content:center;
    position: relative;
    
}
.header-left{
    display: flex;
    flex-direction: row;
    min-height: 0.15rem;
}
.header-img{
    height: 0.13rem;
}
.header-content{
    align-items:center;
    font-size: 0.15rem;
    display: flex;
}
.header-point{
    margin:0 0.05rem;
    color:white
}
.header-title{
    font-size:0.10rem;
    align-items: center;
    color:white
}
.header-right{
    float: right;
}
.header-right-content{
    display: flex;
    color:white;
    font-size:0.10rem;
    padding-top:0.025rem ;
    justify-content:flex-end;
    width: 5.5rem;
}
.header-right-input{
    width: 1rem;
    height: 0.15rem;
    position: relative;
    top:-0.05rem;
}
.header-right-title{
    margin-right: 0.25rem;
    cursor: pointer;
}
.header-input{
    background-color: none;
    zoom:0.2;
}

</style>
<!--跑马灯样式（carousel）-->
<style scoped>
.carousel{
    zoom: 0.25;
}
</style>
<!--主要信息样式 eleb-->
<style scoped>
    .adv{
        font-size: 0.1rem;
        position: relative;
        top:3.3rem;
    }
    .adv-ul{
        display: flex;
        justify-items: column;
        justify-content:center;
        padding-bottom: 0.05rem;
        border-bottom: 0.005rem solid #eeeeee;
    }
    .adv-ul-content{
        display: flex;
        margin: 0.005rem 0.5rem;
        
    }
    .adv-new{
        background-color: #71dd6b;
        margin:10;
        color:white;
        padding: 0.015rem 0;
        font-size: 0.01rem;
        border-radius: 25px;
        width: 0.25rem;
        text-align: center;
        font-style:italic;
    }
    .adv-content{
        color:#888888b0;
        margin-right:0.25rem;
        margin-left: 0.1rem;
        cursor: pointer;
    }
    .adv-main1{
        margin:0 auto;
        padding: 0 1.5rem;
    }
    .adv-main-title{
        margin:0 auto;
        text-align: center;
        margin-top:0.75rem;
        font-size: 0.215rem;
        font-weight: 500;
        color: #3f3f3f;
    }
    .adv-serve{
        display: flex;
        background-color: #daf5f7;
        height: 0.3rem;
        border-radius: 25px;
        width: 4rem;
        margin: 0 auto;
        margin-top: 0.35rem;
    }
    .adv-serve-content{
        display: flex;
        margin:0 0.2rem;
        align-self: center;
    }
    .adv-s-content1{
        text-align: center;
        vertical-align: middle;
        margin-right: 0.05rem;
        font-size: 0.13rem;
        z-index:60;
        cursor: pointer;
    }
    .adv-s-content2{
        font-size: 0.05rem;
        display: flex;
        align-items: center;
        z-index:60;
        cursor: pointer;
    }
    .adv-serve-white{
         /* transform: translate(50%,40%);*/
       
        transition-delay: 0.2s;
        transition: transform 1s;
        background-color: white;
        width: 2rem;
        height: 0.28rem;
        border-radius: 25px;
        float: left;
        margin:0.005rem;
        position: absolute;
        

    }

    .adv-serve-title{
        display: flex;
        margin:0.25rem 0;
        justify-content: center;
        cursor: pointer;
    }
    .adv-serve-point{
        margin:0 0.1rem;
        font-weight: 900;
    }
    .adv-serve-advers,.adv-serve-platform{
        display: flex;
        flex-direction: column;
    }
    .adv-serve-ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .advers-img{
        width: 0.325rem;
        height: 0.325rem;
    }
    .advers-content{
        width:2rem;
        text-align: center;
        color:#5e5e5e;
    }
    .advers-title{
        text-align: center;
        margin:0.25rem 0;
        font-size:0.15rem;
        color:#5e5e5e;
        font-weight: 500;
    }
    .advers-I{
        display: flex;
        justify-content: center;
    }
    .adv-serve-vor{
        color:#cccccc;
    }
    .adv-serve-black{
        color:#444444;
    }
    .adv-sign{
        width: 0.325rem;
        height: 0.25rem;
        border-radius: 50%;
        border: solid 0.0125rem #5d80f5;
        margin: 0 auto;
        color: #5d80f5;
        text-align: center;
        vertical-align: middle;
        padding-top:0.075rem;
        margin:0 0.15rem 0.15rem 0.15rem;
    }
    .adv-input-ul{
        display: flex;
        justify-content: space-around;
    }
    .adv-img{
        height: 0.25rem;
        width: 0.25rem;
        border-top: 0.015rem solid #e6ebf5;
        border-right: 0.015rem solid #e6ebf5;
        transform:rotate(45deg);
        position: relative;
        left: -0.15rem;
        top:0.15rem;

    }
    .adv-input-content{
        text-align: center;
    }
    .transfor-css{
        transform: translate(99%,0);
    }
    .adv-in-serve{
        zoom:0.3;
        margin: 0 auto;
        margin:2.5rem;

    }
    .adv-in{
        margin: 0 auto;
    }
</style>
<!--平台服务样式-->
<style scoped>

    .pltform{
        background-color: #ebf5fa;
        margin:0 auto;
        
    }
    .pltform-me{
        display:flex;
        justify-content: center;
        flex-direction: row;
    }
    .pltform-title{
        margin:0.5rem 0 ;
        font-size:0.2rem;
        font-weight: 900;
        color:#566166;
    }
    .platform-body{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
    }
    .platform-body-content1{
        width: 3rem;
        height: 1rem;
        margin-left:1.2rem;
        margin-right: 0.8rem;
        display: flex;
        justify-content: center;
    }
     .platform-body-content2{
        width: 3rem;
        height: 1rem;
        margin-left:0.8rem;
        margin-right: 1.2rem;
        display: flex;
        justify-content: center;
    }
    .content-img{
        width:0.5rem;
        height: 0.5rem;
        margin-left: 0.2rem;
        margin-right: 0.15rem;
    }
    .c-title{
        color:#819199;
        margin-bottom: 0.125rem;
        font-size: 0.125rem;
    }
    .c-content{
        color:#819199;
    }
</style>

<style scoped>
    .logo-mach{
        width: 100%;
    }
    .footer{
        background-image: url("../assets/image/back1.jpg");
        width: 100%;
        height: 2rem;
        background-size: 100% 100%;
    }
    .footer-parter1{
        width: 100%;
        
    }
    .part1-title{
        color:white;
        font-size:0.12rem;
        font-weight: 500;
        text-align: center;
        margin-top:0.5rem
    }
    .part1-btn-el{
        zoom:0.4;
        color:#7480db;
        background-color:white;
        border-color: white;
        margin-top:1rem;
    }
    .part1-btn{
        display: flex;
        justify-content: center;
    }
    .footer-parter2{
        display: flex;
        flex-direction: row;
        background-color:#F2F2F2;
        margin-top:0.5rem;
    }
    .parter2-content{
        width: 1.5rem;
        height: 3rem;
        margin:0.5rem
    }
    .sin-img{
        width:0.2rem;
        height:0.2rem;
    }
    .con-margin-left{
        margin-top:0.8rem;
        margin-left: 1.5rem;
    }
    .con-margin-right{
        margin-right: 1.5rem;
    }
    .con-title{
        margin-top:0.25rem;
        margin-bottom: 0.15rem;
    }
    .con-content{
        color:#819199;
        margin-bottom: 0.15rem;
        cursor: pointer;
    }
    .login-style{
        zoom:0.2;
    }
    .login-footer{
        border-top:1px solid #ccc;
        margin:1rem 0;
        padding:1rem;
        display: flex;
        justify-content:space-between;
    }
    .login-dayu{
        width: 0.5rem;
        height: 0.75rem;
    }
    .login-dialog{
        padding: 0 0.5rem;
        padding-right: 1.5rem;
    }
    .login-title{
        font-size:0.7rem;
        font-weight: 500;
        margin-bottom: 0.3rem;

    }
    .login-detail{
        font-size:0.2rem;
        color:#ccc;
        margin-bottom: 0.7rem;
    }
    .login-btn1{
        margin-bottom: 0.5rem;
        width: 8rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
    }
    .login-btn2{
        margin-bottom: 0.5rem;
        width: 8rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
    }
    .login-opt{
        display: flex;
        justify-content: space-between;
        align-self: center;
    }
    .login-opt>div{
        color:#20a0ff;
        cursor: pointer;

    }
    .margin-right{
        margin-right: 4rem;
    }
    .margin-left{
        margin-left: 0.5rem;
    }
    .login-contract{
        display: flex;
        margin:0.5rem 0;
    }
    .login-sub-btn{
        width:8rem;
    }
    .login-footer1{
        font-weight: 500;
        font-size:0.5rem;
    }
    .login-footer2{
        color:#ccc;
    }
</style>