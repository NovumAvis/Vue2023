<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <DefaultLikes mymsg="Welcome to Vue2023 App"/>
		<!-- <DefaultPosts/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLikes from '@/components/DefaultLikes.vue'
// import DefaultPosts from '@/components/DefaultPosts.vue'

export default {
  name: 'HomeView',
  components: {
    DefaultLikes,
		// DefaultPosts,
  }
}
</script>
