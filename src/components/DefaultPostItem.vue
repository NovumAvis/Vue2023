<template>
	<div class="post">
		<h2 class="the_title">{{ post.title }}</h2>
		<p class="the_desc">{{ post.description }}</p>
	</div>
</template>

<script>
export default {
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
