<template>
	<form class="form" @submit.prevent>
		<!-- <my-input
			:value='post.thetitle'
			@input="post.thetitle = $event.target.value"
			placeholder='Название поста'
		/> -->
		<my-input
			v-focus
			v-model="post.title"
			placeholder='Название поста'
		/>
		<my-input
			v-model="post.body"
			placeholder='Описание поста'
		/>
		<main-button
			class="form_btn"
			@click="createPost"
		>
		Создать
		</main-button>
	</form>
</template>

<script>
// import MainButton from '@/components/UI/MainButton.vue';

export default {

	// components: { MainButton },

	data(){
		return {
			post: {
				title: '',
				body: '',
			}
		}
	},

	methods: {
		createPost(){
			this.post.id = Date.now();
			this.$emit('create', this.post)
			this.post = {
				title: '',
				body: '',
			}
			
		}
	},

	// watch: {
	// 	post: {
	// 		handler(newVal){
	// 			console.log(newVal)
	// 		},
	// 		deep: true
	// 	}
	// },

}
</script>

<style>

.form{
	display: flex;
	flex-direction: column;
}



.form_btn{
	align-self: flex-end;
}



</style>
