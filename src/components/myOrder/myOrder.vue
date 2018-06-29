<template>
    <div class="main-bg">
      <div class="container">
        <div class="nav">
          <ul>
            <li class="nav-active">
              <router-link to="/myOrder">
                <p>我的订单</p>
              </router-link>
            </li>
            <li>
              <router-link to="/receivingInfo">
                <p>收货信息</p>
              </router-link>
            </li>
          </ul>
        </div>

        <table class="order_nav">
          <tr>
            <td>
              <el-select class="my_select" v-model="value" placeholder="请选择" @change="selectChange">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
            <td>订单详情</td>
            <td>数量</td>
            <td>小计</td>
            <td>状态</td>
          </tr>
        </table>

        <table class="content-table" v-for="(item,index) in dataList">
          <thead>
            <tr class="th_classify">
              <th colspan="6">
                <span>订单编号： {{item.orderNum}}</span>
                <span>2018-04-01 12:12:56</span>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr class="img_tbody">
            <td>
              <img :src="item.asseturl" alt="">
              <p>{{item.assetname}}</p>
            </td>
            <td>{{item.sell_type}}</td>
            <td>{{item.split_count}}</td>
            <td v-if="item.orderStatus == 2">
              <p>已支付</p>
            </td>
            <td v-if="item.orderStatus === 1">
              <p>未支付</p>
              <router-link to="" class="to-pay">去支付</router-link>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="clearfix paging">
          <el-pagination class="my_paging"
                         layout="prev, pager, next"
                         :background=true
                         :total=total
                         :page-size=limit
                         :current-page.sync= currentPage
                         @current-change="handleCurrentChange">
          </el-pagination>
        </div>

        <div class="no-order">
          <div class="no-order-box">
            <img src="./images/empty.png" alt="">
            <p>当前无交易订单</p>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
  import "../../common/stylus/paging.styl";
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  const querystring = require('querystring');

  export default{
    inject:['reload'],
    name: "orderHistory",
    data(){
      return {
        options: [{
          value: '1',
          label: '近三个月的订单'
        }, {
          value: '2',
          label: '今年内订单'
        }, {
          value: '3',
          label: '2017年订单'
        }],
        value: '1',
        //input: '',
        dataList:'',
        userInfo:'',
        total: 10,//总页数
        limit: 10,//每页显示多少条
        currentPage: 1,//当前页数
        begin: this.get3MonthBefor(),//开始时间
        end: "",//结束时间
      }
    },
    mounted: function() {
      //获取用户信息
      let logInfo = JSON.parse(sessionStorage.getItem("loginInfo"));
      axios({
        method: 'get',
        url: `${baseURL}/v1/users/${logInfo.user_id}`,
      }).then(res => {
        this.userInfo = res.data;
        sessionStorage.setItem("userInfo",JSON.stringify(res.data))
      }).catch(error => {
        console.log(error);
      });
      //获取表格数据
      this.getData()
    },
    methods: {
      getData(){
        let loginInfo = JSON.parse(sessionStorage.getItem("loginInfo"));
        axios({
          method: 'get',
          url: `${baseURL}/v1/order/list/${loginInfo.user_id}?page=${this.currentPage}&limit=${this.limit}&begin=${this.begin}&end=${this.end}`,
        }).then(res => {
          this.dataList = res.data.data;
          this.total = res.data.count;
        }).catch(error => {
          console.log(error);
        });
      },
      //当前页变动
      handleCurrentChange(val){
        this.currentPage = val;
        //再次请求数据
        this.getData()
      },
      //最近三个月时间
      get3MonthBefor(){
        let resultDate,year,month,date;
        let currDate = new Date();
        year = currDate.getFullYear();
        month = currDate.getMonth()+1;
        date = currDate.getDate();
        switch(month)
        {
          case 1:
          case 2:
          case 3:
            month += 9;
            year--;
            break;
          default:
            month -= 3;
            break;
        }
        month = (month < 10) ? ('0' + month) : month;
        resultDate = year + '-'+month+'-'+date;
        return resultDate;
      },
      //下拉选择
      selectChange(){
        //时间格式化
        Date.prototype.Format = function (fmt) { //author: meizz
          var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
        };

        if (this.value == 1){
          this.begin = this.get3MonthBefor();
          this.end = new Date().Format("yyyy-MM-dd");
          //再次请求数据
          this.currentPage = 1;
          this.getData()
        }else if (this.value == 2){
          this.begin = '2018-01-01';
          this.end = new Date().Format("yyyy-MM-dd");
          //再次请求数据
          this.currentPage = 1;
          this.getData()
        }else {
          this.begin = '2017-01-01';
          this.end = '2017-12-31';
          //再次请求数据
          this.currentPage = 1;
          this.getData()
        }

      }
    },

  }
</script>

<style scoped lang="stylus">
  .main-bg{
    background-color: #f7f7f7;
  }
  .container{
    width:1200px;
    margin:0 auto;
    padding: 54px 0;
    padding-top: 100px;
  }
  .nav{
    height:42px;
  }
  .nav ul li{
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
  .nav ul li p{
    color: #519bff;
  }
  .nav-active{
    background-color: #519bff !important;
  }
  .nav-active p{
    color: #ffffff !important;
  }
  .order_nav{
    width: 1200px;
    height: 50px;
    border: solid 1px #bfbfbf;
    background-color: #ffffff;
    font-size: 16px;
    color: #222222;
    text-align: center;
    line-height: 50px;
    margin-top: 16px;
  }
  .order_nav td:nth-child(1){
    text-align: left;
    width: 200px;
  }
  .order_nav td:nth-child(2){
    text-align: left;
  }
  .order_nav .my_select{
    width: 145px;
  }
  .content-table{
    width:100%;
    border: solid 1px #bfbfbf;
    border-top:none;
  }
  .content-table .th_classify{
    width: 1200px;
    height: 40px;
    background-color: #f6f7fa;
    font-size: 14px;
    color: #222222;
    line-height: 40px;
    text-align: left;
  }
  .content-table .th_classify span:first-child{
    margin-left: 30px;
  }
  .content-table .th_classify span:last-child{
    margin-left: 100px;
    color: #666666;
  }
  .img_tbody{
    height: 90px;
    background-color: #ffffff;
    font-size: 14px;
    color: #666666;
    text-align: center;
  }
  .img_tbody td{
    width: 200px;
  }
  .img_tbody td:nth-child(1){
    width: 600px;
  }
  .img_tbody td:nth-child(1) img{
    width: 60px;
    height: 60px;
    border: solid 1px #eee;
    display: inline-block;
    margin: 0;
    float: left;
    position: relative;
    top: 15px;
    left: 30px;
  }
  .img_tbody td:nth-child(1) p{
    width: 420px;
    line-height: 90px;
    text-align: left;
    margin-left: 115px;
  }
  .img_tbody td:last-child{
    border-right: solid 1px #bfbfbf;
  }
  .img_tbody td:last-child p{
    position: relative;
    bottom: 18px;
  }
  .to-pay{
    width: 64px;
    height: 28px;
    border-radius: 4px;
    border: solid 1px #c6351e;
    display: inline-block;
    line-height: 28px;
    color: #c6351e;
    position: relative;
    bottom:8px;
  }

  .no-order{
    width: 1200px;
    height: 704px;
    background-color: #ffffff;
    border: solid 1px #bfbfbf;
    margin-top: 16px;
  }
  .no-order-box{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-top: 300px;
  }
  .no-order-box img{
    margin-left: 16px;
    margin-bottom: 10px;
  }
</style>
<style>
  .order_nav .el-input--suffix .el-input__inner{
    border:none;
  }
</style>
