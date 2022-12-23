<template>
 
 <div class="posts_container">
		<h2>List of Posts</h2>
		<div class="posts_wrap">
			<default-post-item 
				class="post_wrap" 
				:key="post.id" 
				v-for="post in posts" 
				:post="post"
				@deletePost="$emit('deletePost', post)"
				>
			</default-post-item>
		</div>
		
	</div>

</template>

<script>
import DefaultPostItem from '@/components/DefaultPostItem.vue'

export default {
	components: {
		DefaultPostItem,
	},
  name: 'DefaultPosts',
	props: {
		posts: Array,
		required: true,
	},
	data(){
		return{	
		}
	},
	methods: {
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.posts_container .posts_wrap{
	display: flex;
	flex-direction: column;
	.post_wrap{
		margin-bottom: 10px;
		border: 2px solid #dadada;
	}
}


</style>
