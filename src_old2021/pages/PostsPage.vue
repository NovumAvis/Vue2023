<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
	<div>
		<h3>InRest Приложение</h3>

		<!-- <main-button
			@click="fetchPosts"
		>Получить посты</main-button> -->
		<div class="app__btns">
		<main-button
			@click="showPopup"
		>Новый пост</main-button>

		<my-select
			v-model="selectedSort"
			:options="sortOptions"
		></my-select>
		</div>

		<my-input
			v-focus
			v-model="searchQuery"
			placeholder="Поиск поста..."
		>
		</my-input>

		<popup-container v-model:show="popupVisible" >
			<post-form
				@create="createPost"
			/>
		</popup-container>

		<post-list 
		:posts="sortedAndSearchedPosts"
		@deletePost="deletePost"
		v-if="!isPostsLoading"
		/>
		<div v-else>Идет загрузка постов...</div>

		<!-- <div class="page__wrapper">
			<div 
				v-for="pageNumber in totalPages" 
				:key="pageNumber"
				class="page"
				:class="{
					'current-page': page === pageNumber,
				}"
				@click="changePage(pageNumber)"
			>
			{{ pageNumber }}
			</div>
		</div> -->

		<!-- <div ref="observer" class="observer"></div> -->
		<div v-intersection="loadMorePosts" class="observer"></div>

	</div>
	

	

</template>

<script>

import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

import axios from 'axios';


export default{

	components: { PostList, PostForm },
	data(){
		return{
			posts: [
			],
			popupVisible: false,
			isPostsLoading: true,
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 10,
			totalPages: 0,
			sortOptions: [
				{value: 'title', name: 'По названию'},
				{value: 'body', name: 'По содержанию'},
			]
		}
	},
	methods: {
		async fetchPosts(){
			try{
				this.isPostsLoading = true;
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
				}, 1000 )
				
			} catch(e){
				// alert('Ошибка');
			} finally {}
		},

		async loadMorePosts(){
			try{
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
				}, 10 )
				
			} catch(e){
				// alert('Ошибка');
			} finally {}
		},

		createPost(post){
			this.posts.push(post);
			this.popupVisible = false;
		},
		deletePost(post){
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showPopup(){
			this.popupVisible = true;
		},
		// changePage(pageNumber){
		// 	this.page = pageNumber
		// 	// this.fetchPosts()
		// }	
		
	},

	mounted() {
    this.fetchPosts();
		console.log(this.$refs.observer);
		

	// 	const options = {
  //   // root: document.querySelector('#scrollArea'),
  //   rootMargin: '0px',
  //   threshold: 1.0
	// 	}
	// 	const callback = (entries, observer) => {
	// 			/* Content excerpted, show below */
	// 			if(entries[0].isIntersecting && this.page < this.totalPages){
	// 				this.loadMorePosts();
	// 				// console.log('Пересечен');
	// 			};
	// 	};
	// 	const observer = new IntersectionObserver(callback, options);
	// 	observer.observe(this.$refs.observer);
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

	watch: {
		// наблюдатель за текущей страницей, который запускал функцию, при изменении page в data
		// page(){
		// 	this.fetchPosts();
		// }

		// Больше не используем, так как в computed выше перенесли сортировку без мутирования массива с постами
		// selectedSort(newValue) {
		// 	this.posts.sort( (post1, post2) => {
		// 		return post1[newValue]?.localeCompare(post2[newValue])
		// 	})
		// }
	},

	

}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app__btns{
	display: flex;
	justify-content: space-between;
}

.page__wrapper{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
}
.page__wrapper .page{
	border: 1px solid teal;
	margin: 0 5px;
	padding: 5px 12px;
}
.current-page{
	background-color: teal;
	color: #FFF;
}

.observer{
	height: 30px;
	background: teal;
}

</style>
