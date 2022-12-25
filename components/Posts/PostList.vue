<template>
  <section class = "post-list">
    <PostPreview
      id="1"
      preview-text="Nuxt Js by Maximilian"
      title = "Работа с NuxtJS"
    />
    <PostPreview
      id="2"
      preview-text="Vue Js by Vladilen"
      title = "Работа с VueJs"
    />
    <PostPreview
      id="3"
      preview-text="Vue Js by "
      title = "Работа с ReactJs by Gavrilov"
    />
  </section>
</template>

<script>

import PostPreview from "./PostPreview";

export default {
  name: "PostList",
  components:{
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
