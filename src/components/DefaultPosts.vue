<template>
	<default-post-form @create="createNewPost"></default-post-form>
	<default-post-list :posts="posts"></default-post-list>
	<button @click="fetchPosts">Получить посты</button>
</template>

<script>

import DefaultPostForm from '@/components/DefaultPostForm.vue'
import DefaultPostList from '@/components/DefaultPostList.vue'
import axios from 'axios'

export default {
	components: {
		DefaultPostForm, DefaultPostList,
	},
  name: 'DefaultPosts',

	data(){
		return{
			posts: [],	
		}
	},
	methods: {
		createNewPost(newPost){
			 const thePost = {
				id: newPost.id,
				title: newPost.title,
				description: newPost.desc,
			}
			this.posts.push(thePost);
		},
		async fetchPosts(){
			try{
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.posts = response.data;
			}catch(e){
			alert('Ошибка');
			}
		} 
	},
	mounted(){
		this.fetchPosts();
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">




</style>
