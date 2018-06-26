<template>
  <div id="app">
    <div class="head-wrap">
      <div class="head">
        <router-link to="/home">首页</router-link>
        <router-link to="/contactUs">联系我们</router-link>
        <router-link to="/login" class="no_login" v-if="!isLogin">登录</router-link>
        <!--<div class="no_login" v-if="!isLogin">
          <a href="#/login">请登录</a>
          <a href="#/register">免费注册</a>
        </div>-->
        <div class="login" v-if="isLogin"  @mouseleave="leaveUl">
          <div @click.capture="toggle"></div>
          <ul v-if="switchover">
            <li><a href="">我的订单</a></li>
            <li><a href="">收货地址</a></li>
            <li @click="dropOut">退出登录</li>
          </ul>
        </div>
    
      </div>
    </div>
    <div class="main_wrap">
      <router-view class="main" v-if="isRouterAlive"></router-view>
    </div>
    <div class="footer-wrap">
      <div class="footer">
        <div class="ft-box">
          <a href="/">
            <p>Trusted Assets Blockchain</p>
          </a>
        </div>
        <div class="ft-box">
          <span>资产服务</span>
          <ul class="text">
            <li><a href="javascript:void(0)">维修案例</a></li>
            <li><a href="javascript:void(0)">维修设备</a></li>
            <li><a href="javascript:void(0)">汽车资产</a></li>
            <li><a href="javascript:void(0)">汽车零部件</a></li>
          </ul>
        </div>
        <div class="ft-box">
          <ul class="code">
            <li>
              <a href="javascript:void(0)">
                <img class="ft_code" src="" alt="Android">
                <p>Android版</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img class="ft_code" src="" alt="IOS">
                <p>IOS版</p>
              </a>
            </li>
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
        switchover:false,
        isLogin:false,
        userName:"",
      }
    },
    beforeMount(){
      if(JSON.parse(sessionStorage.getItem("loginInfo"))){
        this.isLogin=true;
        this.userName=JSON.parse(sessionStorage.getItem("userName")).phone
      }else{
        this.isLogin=false
      }
    },
    beforeUpdate(){
      if(JSON.parse(sessionStorage.getItem("loginInfo"))){
        this.isLogin=true;
        this.userName=JSON.parse(sessionStorage.getItem("userName")).phone
      }else{
        this.isLogin=false
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      },
      dropOut(command){
        sessionStorage.removeItem('loginInfo');
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('userName');
        this.switchover=false;
        location.reload()
      },
      toggle(){this.switchover=!this.switchover},
      leaveUl(){this.switchover=false},
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
    z-index:9999;
    .head {
      box-sizing: border-box
      width: 1200px;
      margin: 0 auto;
      line-height 48px
      font-size 0
      a {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
      }
      .router-link-active {
        color #ffffff
      }
      /*.no_login{
        //display inline-block
        width 160px
        margin-left 28px
        color: #666666;
      }*/
      .login{
        display inline-block
        cursor pointer
        width 160px
        position relative
        ul{
          background-color #ffffff
          position absolute
          top 34
          right 0
          text-align center
          width 86px
          color #666666
          li:hover{
            color #c6351e
            a{
              color #c6351e
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
    min-width 1212px
    background-color #f3f3f3
  }
  
  .footer-wrap {
    width 100%
    min-width 1212px
    background-color: #272324;
    .footer {
      box-sizing: border-box
      width 1212px
      height 156px
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
        .code {
          font-size 0
          li {
            padding 30px 16px 0
            display inline-block
            font-size 14px
            a {
              color #ffffff
              p {
                font-size 16px
                color #ffffff
                padding-top 14px
              }
            }
          }
        }
      }
      .ft-box:last-child {
        margin-right -16px
      }
      .ft-box:first-child{
        margin-right 42px
        a{
          display inline-block
          color #d92000
          font-size 10px
          margin-top 38px
          background-image: url('');
          background-position: top left;
          background-repeat: no-repeat;
          width 240px
          height 82px
          position relative
          p{
            position absolute
            right 0
            bottom 0
          }
        }
      }
    }
  }
</style>
