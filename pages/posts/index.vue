<template>
  <div class="posts-page">
    <PostList/>
  </div>
</template>

<script>

import PostList from  "@/components/Posts/PostList";

export default {
  middleware:'blog',
  components:{
    PostList
  },
  name: "index"
}

</script>

<style scoped>

.posts-page{
  display: flex;
  justify-content: center;
  align-items:center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
