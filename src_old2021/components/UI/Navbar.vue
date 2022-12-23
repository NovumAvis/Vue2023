<template>
	<div id="nav">
		<main-button @click="$router.push('/')">Главная</main-button> 
		<main-button @click="$router.push('/posts')">Посты</main-button> 
		<main-button @click="$router.push('/about')">О нас</main-button>
		<main-button @click="$router.push('/postsstore')">Посты из хранилища</main-button>
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

<style>
#nav .btn{
	margin: 0 5px;
}
</style>