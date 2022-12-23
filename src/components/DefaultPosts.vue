<template>

	<div>
		<img alt="Vue logo" src="../assets/logo.png">
		<default-post-form @create="createNewPost"></default-post-form>
		
		<my-select
				v-model="selectedSort"
				:options="sortOptions"
		></my-select>
		<my-input
			v-focus
			v-model="searchQuery"
			placeholder="Поиск поста..."
		>
		</my-input>

		<default-post-list 
			:posts="sortedAndSearchedPosts"
			@deletePost="deletePost"
			v-if="!isPostsLoading"
		></default-post-list>
		<div style="margin: 10px auto" v-if="isPostsLoading || isLoadingMore">Идет загрузка постов...</div>
		<!-- <div v-if="">Идет загрузка постов...</div> -->
		<!-- <div v-if="">Поиск еще постов...</div> -->
		<button v-else style="margin: 10px auto" @click="loadMorePosts">Получить посты</button>
		<!-- <div v-intersection="loadMorePosts" class="observer"></div> -->

	</div>
</template>

<script>

import DefaultPostForm from '@/components/DefaultPostForm.vue'
import DefaultPostList from '@/components/DefaultPostList.vue'
import axios from 'axios'

export default {
	components: {
		DefaultPostForm, DefaultPostList,
	},
  name: 'DefaultPosts',

	data(){
		return{
			posts: [],	
			isLoadingMore: false,
			isPostsLoading: true,
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 10,
			totalPages: 0,
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'description', name: 'По содержанию'},
			]
		}
	},
	methods: {

		createNewPost(newPost){
			 const thePost = {
				id: newPost.id,
				title: newPost.title,
				description: newPost.desc,
			}
			this.posts.push(thePost);
		},
		deletePost(post){
			this.posts = this.posts.filter(p => p.id !== post.id)
		},

		async fetchPosts(){
			try{
				setTimeout( async () => {
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit,
						}
					});
					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
					this.posts = response.data;
					this.isPostsLoading = false;
				}, 10 )
			} catch(e){
				this.isPostsLoading = false;
				// alert('Ошибка');
			} finally {
				
			}
		},

		async loadMorePosts(){
			try{

				this.isLoadingMore = true;
				setTimeout( async () => {
					this.page += 1;
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit,
						}
					});
					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
					this.posts = [...this.posts, ...response.data]
					this.isLoadingMore = false;
				}, 500 )
			} catch(e){
				this.isLoadingMore = false;
				// alert('Ошибка');
			} finally {
				// 
			}
		},
	},

	mounted(){
		this.fetchPosts();
		// console.log(this.$refs.observer);
		// const options = {
		// 	rootMargin: '0px',
		// 	threshold: 1.0
		// }
		// const callback = function(entries, observer){
		// 	if(entries[0].isIntersecting){
		// 		console.log('Пересечен');
		// 	}
		// }
		// const observer = new IntersectionObserver(callback, options);
		// observer.observe(this.$refs.observer)

	},

	computed: {
		sortedPosts(){
			return [...this.posts].sort( (post1, post2) => {
				return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			} );
		},
		sortedAndSearchedPosts(){
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery))
		}
	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.observer{
	height: 30px;
	background: teal;
}



</style>
