<template>
	<form @submit.prevent class="post_creater">
		<input 
			type="text" 
			placeholder="Название поста"
			v-model="post.title"
		>
		<input 
			type="text" 
			placeholder="Описание поста"
			:value="post.desc"
			@input="post.desc = $event.target.value"
		>
		<def-button class="submit" @click="createPost">Создать</def-button>
	</form>

</template>

<script>
import DefButton from '@/components/UI/DefButton.vue'
export default {
	components: { DefButton, },
  name: 'DefaultPostForm',
	data(){
		return{
			post: {
				title: '',
				desc: '',
			}
		}
	},
	methods: {
		createPost(){
			this.post.id = Date.now();
			this.$emit('create', this.post);
			this.post = {
				title: '',
				desc: '',
			} 

		}
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.post_creater{
	margin: 0 auto;
	flex-direction: column;
	display: flex;
	width: 100%;
	max-width: 320px;
	input{
		background-color: #f5f5f5;
		border: none;
		color: #333;
		padding: 10px 15px;
		&::placeholder{
			color: #aaaaaa;
		}
	}
	.submit{
		padding: 10px 15px;
		border: none;
		width: max-content;
		background-color: #333;
		color: #fff;
	}
}


</style>
