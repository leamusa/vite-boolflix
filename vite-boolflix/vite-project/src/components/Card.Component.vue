<script>
export default {
  name: "CardComponent",
};
</script>

<template>
  <div class="sc-card col-3">
    <img :src="getUrlimg()" alt="" />
    <h4>{{ card.title }}</h4>
  </div>
</template>

<style></style>
