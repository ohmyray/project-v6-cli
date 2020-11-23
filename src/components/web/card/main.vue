<template>
  <div>
    <h1>
      测试组件
      Card --{{message}}
      <el-button @click="log">oj</el-button>
    </h1>
  </div>
</template>

<style>
  h1 {
    color: #aad;
  }
</style>

<script lang="ts">
const { Button } = require("element-ui");
Vue.use(Button);
export default Vue.extend({
  data() {
    return {
      message: 'hello',
    };
  },
  methods: {
    log(){
      console.log(1111)
    }
  }
});
</script>
