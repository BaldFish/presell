<template>
  <div class="home">
    <div class="banner_wrap">
      <div class="banner">
        <h2>全球首款基于区块链的共享存储应用</h2>
        <p class="describe">SD卡搭载SE芯片，小身材大能量，购买可信盾，可享受终端内存无限扩容、数字资产加密保护、赢盾宝赚奖品等极致服务</p>
        <span>立即抢购</span>
        <p class="num">可信盾开放售卖前总预约人数&nbsp;&nbsp;41,392,188</p>
      </div>
    </div>
    <div class="what_wrap">
      <div class="what">
        <h2><span>什么是</span>&nbsp;可信盾？</h2>
        <p>结合IPFS分布式存储技术及SE加密模块，实现了基于区块链的可信共享存储解决方案。目前，该方案已经成功应用在车联网、人工智能等多个商业领域，创造了全新的具有颠覆性的商业模式。</p>
        <p>此外，通过搭配我们的可信伴侣，可以将可信盾变身可信硬件钱包，保障您的数字资产安全。</p>
      </div>
    </div>
    <div class="selling_wrap">
      <div class="selling">
        <h2>功能卖点</h2>
        <div class="step">
          <h3>更可信更安全</h3>
          <p>基于硬件SE加密模块，实现IPFS的存储可信证明，确保在去中心化、分布式的模式下，从源头上防止恶意攻击及存储作弊，为你带来高可信、高安全等级的区块链应用环境；</p>
          <h3>变身高可信硬件钱包</h3>
          <p>搭载SE芯片的可信盾设备，配备可信伴侣，摇身一变变身高可信硬件钱包，外型炫酷方便携带，让你的数字资产高枕无忧；</p>
          <h3>多终端通用</h3>
          <p>手机、笔记本、IPAD、电脑……你能想到的终端，都可以成为可信盾施展才华的舞台，成就你的完美区块链应用；</p>
          <h3>专属加密通道</h3>
          <p>定制SE模块，专属的极致加密通道，保障你的数据安全，再也不用担心隐私泄密；</p>
          <h3>无限量存储空间</h3>
          <p>64G？128G？1T？2T？NO，全网式共享存储，我的存储空间是，无限量；</p>
          <h3>是伴侣更是“小金矿”</h3>
          <p>购可信盾、用可信盾，可享“盾宝”奖励，赢盾宝，赚TOKEN，兑奖品，赚服务……有了它，你就拥有了无限可能……</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import _ from "lodash";
  import {baseURL, cardURL} from '@/common/js/public.js';
  
  export default {
    name: "home",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    watch: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">
  .home {
    width 100%
    .banner_wrap {
      margin 0 auto
      box-sizing border-box
      height 1080px
      background-image: url('./images/banner.png');
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      //background-size: 100% 100%;
      //background-size:contain;
      //background-size:auto;
      .banner {
        width 1200px
        height 640px
        margin 0 auto
        padding-top 404px
        h2 {
          font-size: 38px;
          color #ffffff
          margin-top 38px
        }
        .describe {
          color #ffffff
          font-size: 22px;
          margin-top 45px
          margin-bottom 90px
          width 450px
          line-height 26px
        }
        .num {
          color #ffffff
          font-size: 24px;
          line-height 26px
          margin-top 256px
        }
        span {
          cursor pointer
          display block
          width: 174px;
          height: 68px;
          line-height 68px
          text-align center
          background-color: #519bff;
          border-radius: 10px;
          color #ffffff
          font-size 30px
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
        }
      }
    }
    
    .what_wrap {
      height 700px
      background-color #ffffff
      .what {
        width 1220px
        height 700px
        margin 0 auto
        background-image: url('./images/kexindun.png'), url('./images/WechatIMG216.png');
        background-repeat: no-repeat, no-repeat;
        background-position: top 220px left, bottom right;
        h2 {
          font-size 36px
          color #222222;
          text-align center
          padding-top 76px
          margin-bottom 150px
          span {
            font-size: 24px;
            color: #666666;
          }
        }
        p{
          width 592px
          margin-left 445px
          margin-bottom 30px
          font-size: 24px;
          color: #222222;
          line-height 30px
        }
      }
    }
    .selling_wrap{
      height 1080px
      background-image: url('./images/bj1.png');
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      .selling{
        width 1052px
        margin 0 auto
        height 1080px
        h2{
          font-size: 24px;
          color: #519bff;
          text-align center
          padding-top 40px
        }
        .step{
          color #ffffff
          margin-top 123px
          h3{
            font-size: 28px;
            line-height 34px
            background-image: url('./images/00.png');
            background-position: top left;
            background-repeat: no-repeat;
            padding-left 84px
          }
          p{
            padding-left 84px
            font-size: 22px;
            margin-top 22px
            margin-bottom 28px
            line-height 28px
          }
        }
      }
    }
  }
</style>
