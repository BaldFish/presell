<template>
  <div class="main-bg">
    <div class="container">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/myOrder">
              <p>我的订单</p>
            </router-link>
          </li>
          <li class="nav-active">
            <router-link to="/receivingInfo">
              <p>收货信息</p>
            </router-link>
          </li>
        </ul>
      </div>
      
      <section class="address-content">
        <div class="address-left">
          <img src="./images/kexinbanlv.png" alt="">
        </div>
        <div class="address-right" v-if="isShow">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="收货姓名">
              <el-input class="input-reset" placeholder="请输入您的真实姓名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="收货号码">
              <el-input class="input-reset" placeholder="请输入您的手机号" v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="选择地区">
              <template>
                <area-select class="area-reset" :level="2" type="text" :data="pcaa" :placeholders="placeholders"
                             v-model="form.selected"></area-select>
              </template>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input type="textarea" placeholder="请填写详细地址" class="textarea-reset" v-model="form.desc"></el-input>
            </el-form-item>
            
            <el-form-item class="btn-footer">
              <button type="button" @click="submit">保存</button>
              <button type="button">取消</button>
            </el-form-item>
          </el-form>
        </div>
        
        <div class="address-right" v-else>
          <div class="details-address">
            <span class="title">收货信息</span>
            <ul>
              <li>
                <label>收货姓名</label>
                <p><span>里斯</span></p>
              </li>
              <li>
                <label>收货号码</label>
                <p><span>13545268959</span></p>
              </li>
              <li>
                <label>收货人地址</label>
                <p><span>北京市朝阳区万达广场8号楼808室</span></p>
              </li>
            </ul>
          </div>
          <p class="notice">温馨提示：您只能有一个收货地址，若修改收货地址，所有订单收货地址都会改</p>
          <button type="button" class="btn-mod" @click="isShow = true">修改信息</button>
        </div>
      </section>
    
    
    </div>
  </div>
</template>

<script>
  import {pca, pcaa} from 'area-data';
  
  export default {
    name: "login",
    data() {
      return {
        form: {
          name: '',
          phone: '',
          desc: '',
          selected: []
        },
        pcaa: pcaa,
        placeholders: ["请选择省", "请选择市", "请选择区"],
        isShow: true
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      submit() {
        this.isShow = !this.isShow
      }
    },
    watch: {},
    computed: {},
    components: {},
  }
</script>

<style scoped lang="stylus">
  .main-bg {
    background-color: #f7f7f7;
  }
  
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 54px 0;
    padding-top: 100px;
  }
  
  .nav {
    height: 42px;
  }
  
  .nav ul li {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    border: solid 1px #519bff;
    float: left;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  
  .nav ul li p {
    color: #519bff;
  }
  
  .nav-active {
    background-color: #519bff !important;
  }
  
  .nav-active p {
    color: #ffffff !important;
  }
  
  .address-content {
    width: 1200px;
    height: 704px;
    background-color: #ffffff;
    border: solid 1px #bfbfbf;
    margin-top: 16px;
  }
  
  .address-left {
    width: 480px;
    height: 704px;
    float: left;
  }
  
  .address-left img {
    margin-top: 260px;
    margin-left: 100px;
  }
  
  .address-right {
    width: 720px;
    height: 704px;
    float: left;
  }
  
  .address-right .el-form {
    margin-top: 136px;
  }
  
  .btn-footer button {
    width: 100px;
    height: 34px;
    border: solid 1px #519bff;
    outline: none;
    cursor: pointer;
    margin-top: 85px;
  }
  
  .btn-footer button:first-child {
    background-color: #519bff;
    font-size: 16px;
    color: #ffffff;
    margin-left: 66px;
  }
  
  .btn-footer button:last-child {
    background-color: #ffffff;
    font-size: 16px;
    color: #519bff;
    margin-left: 70px;
  }
  
  .details-address {
    width: 495px;
    height: 253px;
    background: url("./images/address.png") no-repeat center;
    background-size: 100% 100%;
    margin-top: 136px;
  }
  
  .details-address ul {
    padding-top: 40px;
  }
  
  .details-address ul li {
    height: 48px;
    text-align: left;
  }
  
  .details-address ul li label {
    font-size: 18px;
    color: #222;
    width: 124px;
    height: 100%;
    display: inline-block;
    line-height: 66px;
    margin-left: 55px;
    float: left;
  }
  
  .details-address ul li p {
    font-size: 14px;
    color: #999999;
    width: 300px;
    height: 100%;
    float: left;
    text-align: left;
  }
  
  .details-address ul li p span {
    margin-top: 26px;
    display: inline-block;
  }
  
  .notice {
    font-size: 14px;
    color: #666666;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  
  .btn-mod {
    width: 100px;
    height: 34px;
    background-color: #519bff;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    border: 1px solid #519bff;
    margin-left: 194px;
  }
  
  .title {
    font-size: 16px;
    color: #ffffff;
    position: relative;
    left: 214px;
    top: 12px;
  }
</style>
<style>
  .address-right input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #999999;
  }
  
  .address-right input::-webkit-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #999999;
  }
  
  .input-reset .el-input__inner {
    width: 452px;
    height: 40px;
    background-color: #fafafa;
    border-radius: 4px;
    border: solid 1px #e5e5e5;
  }
  
  .textarea-reset .el-textarea__inner {
    width: 452px;
    height: 120px;
    background-color: #fafafa;
    border-radius: 4px;
    border: solid 1px #e5e5e5;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  }
  
  .area-reset .area-select {
    width: 139px;
    height: 40px;
    background-color: #fafafa;
    border-radius: 4px;
    border: solid 1px #e5e5e5;
  }
  
  .area-reset div:first-child {
    margin-left: 0;
  }
  
  .area-reset .area-selectable-list .area-select-option.selected {
    color: #519bff;
  }
  
  .area-reset .area-selected-trigger {
    padding: 0 20px 7px 12px;
    color: #999999;
  }
  
  .address-right .el-form-item__label {
    font-size: 18px;
    color: #222222;
    text-align: left;
    width: 120px !important;
  }
  
  .address-right .el-form-item__content {
    margin-left: 120px !important;
  }
</style>
