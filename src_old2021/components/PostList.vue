<template>
<div>

	<div v-if="posts.length > 0" class="posts_wrap">
		<h3>Список постов</h3>

		<transition-group name="post-list">
			<post-item
				v-for="post in posts"
				:post="post"
				:key="post.id"
				@deletePost="$emit('deletePost', post)"
			/>
		</transition-group>

	</div>

	<h2 v-show="posts.length === 0" style="color:red;">Список постов пуст</h2>

</div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	}

}
</script>

<style scoped>

.posts_wrap{
	display: grid;
	grid-template-columns: repeat(1,1fr);
	grid-gap: 5px;
}
.posts_wrap h3{
	grid-column: 1 / span 1;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .6s ease-in-out;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.post-list-move{
	transition: all .6s ease-in-out;
}
</style>