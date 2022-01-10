<template>
  <div>
    Hello, Welcome to my blog
    <button @click="click">click</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const click = () => {
      console.log("click")
    };
    return {
      click,
    };
  },
});
</script>
