<template>
	<div class="post">

		<div class="post__info">
			<div>{{ post.id }}</div>
			<div><strong>Название:</strong>  {{ post.title }}</div>
			<div><strong>Описание:</strong>  {{ post.body }}</div>
		</div>

		<div class="post__btns">
			<main-button
				@click="$router.push(`/posts/${post.id}`)"
			>Открыть</main-button>
			<main-button
				@click="$emit('deletePost', post)"
			>Удалить</main-button>
		</div>
	</div>
</template>

<script>

// import MainButton from '@/components/UI/MainButton.vue'

export default {
	props: {
		post: {
			type: Object,
			requiered: true
		}
	}
}
</script>

<style scoped>



.post{
	border: 2px solid teal;
	margin-top: 15px;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.post__info{
	display: flex;
	flex-direction: column;
	text-align: left;
}

.post__btns{
	margin-left: 20px;
	display: flex;
	flex-direction: column;
}

</style>