<template>
  <form @submit.prevent = "onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from "../UI/AppControlInput";
import AppButton from "../UI/AppButton";

export default {
  name: "AdminPostForm",
  components:{
    AppButton,
    AppControlInput
  },
    props:['post'],
  data(){
    return{
      editedPost:{
        author:'',
        title:'',
        thumbnailLink:'',
        content:''
      }
    }
  },
  methods:{
    onSave(){
      //// Save on post
      console.log(this.editedPost)
    },
    onCancel(){
      ///Navigate back
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
