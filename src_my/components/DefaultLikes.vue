<template>
 <div>
	<span>{{ mymsg }}</span>
	<br>
	<span>Current likes: {{ likes }}</span>
 	<br>
	<button @click="addLike">New Like</button>
</div>
</template>

<script>
export default {
  name: 'DefaultLikes',
	props: {
		mymsg: String,
	},
	data(){
		return{
			likes: 1,
		}
	},
	methods: {
		addLike(){
			this.likes += 1;
		},
		
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
