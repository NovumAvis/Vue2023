<template>
	<div id="nav">
		<def-button class="nav_button" @click="$router.push('/')" >Главная</def-button>
		<def-button class="nav_button" @click="$router.push('/posts')" >Посты</def-button>
		<def-button class="nav_button" @click="$router.push('/about')" >О нас</def-button>
		<!-- <router-link class="nav_button" to="/about/">О нас</router-link> -->
		<!-- <def-button @click="$router.push('/postsstore')">Посты из хранилища</def-button> -->
		<!-- <router-link to="/">Home</router-link> |
		<router-link to="/posts">Posts</router-link> | 
		<router-link to="/about">About</router-link> -->
	</div>
</template>

<script>

export default {
	name: 'navbar',
}
</script>

<style lang="scss">
#nav .btn{
	margin: 0 5px;
}

#nav{
	margin: 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.nav_button{
		margin: 0 3px;
	}

}
</style>