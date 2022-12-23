<template>
	<div>
		<img alt="Vue logo" src="../assets/logo.png">
		<div>The post with id = {{ $route.params.id }} </div>
		<h2>{{ $route.params.title }}</h2>
		<div class="content_wrap">
		{{ $route.params.description }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostPage',
}
</script>

<style>

</style>