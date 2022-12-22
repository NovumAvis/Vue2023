<template>
	<div class="post">
		<div class="info_wrap">
			<h2 class="the_title">{{ post.title }}</h2>
			<p class="the_desc">{{ post.description }}</p>
		</div>
		<div class="buttons">
			<def-button class="delete_button">Удалить</def-button>
		</div>
	</div>
</template>

<script>

// import DefButton from '@/components/UI/DefButton.vue'

export default {
	// components: {
	// 	DefButton,
	// },
  name: 'DefaultPostItem',
	props: {
		post: Object,
		required: true,
	},
	data(){
		return{	
		}
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.post{
	padding: 10px 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.info_wrap{
		text-align: left;
	}
	.buttons{
		display: flex;
		justify-content: center;
		align-items: center;
	}
}


</style>
