<template>
  <Fragment>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ $t("message.header") }}</h1>
    <br />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "Header",
  components: { Fragment }
};
</script>

<style scoped>
img {
  margin: 0 auto;
  width: 100px;
  height: auto;
  padding-top: 70px;
}
</style>
