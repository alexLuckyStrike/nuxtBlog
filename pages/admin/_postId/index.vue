<template>
<div class="admin-post-page">
  <section class="update-form">
    <AdminPostForm :post="loadedPost" />
  </section>
</div>
</template>
<script>

import AdminPostForm from "../../../components/Admin/AdminPostForm";

export default {
  name: "index",
  components: {AdminPostForm},
  data(){
    return{
      loadedPost:{
        author:'Alexey',
        title:'My awesome Post',
        content:'Super amazing, thanks a lot!!!'
      }
    }
  }
}
</script>

<style scoped>

</style>
