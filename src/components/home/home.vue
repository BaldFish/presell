<template>
  <div class="home">
    <div class="banner">home</div>
    <div class="list">
    
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import _ from "lodash";
  import {baseURL,cardURL} from '@/common/js/public.js';
  
  export default {
    name: "home",
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
    },
    watch: {},
    computed: {},
    components: {
    }
  }
</script>

<style scoped lang="stylus">
  .home {
    .banner {
      box-sizing border-box
      height 600px
      background-image: url('');
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      /*background-size:contain;
      background-size:auto;*/
    }
    .list {
      width 1212px
      margin 0 auto
      margin-top 32px
      padding-bottom 88px
      
    }
  }
</style>
