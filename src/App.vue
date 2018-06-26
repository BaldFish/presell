<template>
  <div id="app">
    <div class="head-wrap">
      <ul class="head">
        <li class="logo">
          <router-link to="/home"></router-link>
        </li>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/contactUs">联系我们</router-link>
        </li>
        <li class="no_login" v-if="isLogin">
          <router-link to="/login">登录</router-link>
        </li>
        <li class="login" v-if="!isLogin" @mouseleave="leaveUl">
          <div @click.capture="toggle">17301051538</div>
          <ul v-if="switchover">
            <li><a href="">我的订单</a></li>
            <li><a href="">收货地址</a></li>
            <li @click="dropOut">退出登录</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="main_wrap">
      <router-view class="main" v-if="isRouterAlive"></router-view>
    </div>
    <div class="footer-wrap">
      <div class="footer">
        <div class="ft-box">
          <a href="/">
          
          </a>
        </div>
        <div class="ft-box">
          <span>资产服务</span>
          <ul class="text">
            <li><a href="javascript:void(0)">维修案例</a></li>
            <li><a href="javascript:void(0)">维修设备</a></li>
          </ul>
        </div>
        <div class="ft-box">
          <span>资产服务</span>
          <ul class="text">
            <li><a href="javascript:void(0)">维修案例</a></li>
            <li><a href="javascript:void(0)">维修设备</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  import {baseURL, cardURL} from '@/common/js/public.js';
  import axios from "axios";
  
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
        switchover: false,
        isLogin: false,
        userName: "",
      }
    },
    beforeMount() {
      if (JSON.parse(sessionStorage.getItem("loginInfo"))) {
        this.isLogin = true;
        this.userName = JSON.parse(sessionStorage.getItem("userName")).phone
      } else {
        this.isLogin = false
      }
    },
    beforeUpdate() {
      if (JSON.parse(sessionStorage.getItem("loginInfo"))) {
        this.isLogin = true;
        this.userName = JSON.parse(sessionStorage.getItem("userName")).phone
      } else {
        this.isLogin = false
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      },
      dropOut(command) {
        sessionStorage.removeItem('loginInfo');
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('userName');
        this.switchover = false;
        location.reload()
      },
      toggle() {
        this.switchover = !this.switchover
      },
      leaveUl() {
        this.switchover = false
      },
    }
  }
</script>

<style lang="stylus">
  #app {
    /*min-height: 100vh;*/
    display: flex;
    flex-direction: column;
  }
  
  .head-wrap {
    width: 100%;
    min-width 1200px
    height: 48px;
    background-color: rgba(1, 1, 1, 0.82);
    z-index: 9999;
    .head {
      box-sizing: border-box
      width: 1200px;
      height 48px
      line-height 48px
      margin: 0 auto;
      font-size 0
      .router-link-active {
        color #ffffff
      }
      li {
        display inline-block
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
        vertical-align top
      }
      .logo{
        margin-right 586px
        a{
          display inline-block
          width 32px
          height 38px
          margin-top 5px
          background-image: url('./head_logo.png');
          background-repeat: no-repeat;
          background-position: top left;
        }
      }
      li:nth-child(2){
        margin-right 212px
      }
      .no_login{
        width 110px
        text-align right
        margin-left 164px
      }
      .login{
        margin-left 164px
        cursor pointer
        width 110px
        text-align right
        position relative
        ul{
          position absolute
          top 48
          right 0
          text-align center
          width 110px
          color #666666
          li{
            width 110px
            background-color #ffffff;
            color #529bff;
            a{
              color #529bff;
            }
          }
          li:hover{
            background-color #529bff;
            color #ffffff;
            a{
              color #ffffff;
            }
          }
        }
      }
    }
  }
  
  .main_wrap {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    width 100%
    min-width 1200px
    background-color #f3f3f3
  }
  
  .footer-wrap {
    width 100%
    min-width 1200px
    background-color: #f2f2f2;
    .footer {
      box-sizing: border-box
      width 1200px
      height 160px
      margin 0 auto
      font-size 0
      text-align center
      .ft-box {
        display inline-block
        font-size 16px
        vertical-align top
        margin-right 66px
        span {
          padding-top 45px
          display block
          color #ffffff
          text-align left
        }
        .text {
          font-size 0
          li {
            padding-top 25px
            display inline-block
            font-size 14px
            margin-right 77px
            a {
              color #ffffff
            }
          }
          li:last-child {
            margin-right 0
          }
        }
      }
      .ft-box:last-child {
        margin-right -16px
      }
      .ft-box:first-child {
        margin-right 42px
        a {
          display inline-block
          color #d92000
          font-size 10px
          margin-top 49px
          background-image: url('./footer_logo.png');
          background-position: top left;
          background-repeat: no-repeat;
          width 240px
          height 82px
        }
      }
    }
  }
</style>
