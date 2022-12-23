<template>

	<div>
		<!-- <h2>{{ $store.state.post.limit }}</h2> -->
		<!-- <h1> {{$store.state.isAuth ? 'Вы авторизированы' : 'Авторизируйтесь'}} </h1>
		<h3>InRest Приложение</h3>
		<span> {{ $store.getters.doubleLikes }} </span>
		<main-button @click="$store.commit('incrementLikes')">Лайк</main-button>
		<main-button @click="$store.commit('decrementLikes')">Дизлайк</main-button> -->

		<div class="app__btns">
		<main-button
			@click="showPopup"
		>Новый пост</main-button>

		<my-select
			:model-value="selectedSort"
			@update:model-value="setSelectedSort"
			:options="sortOptions"
		></my-select>
		</div> 

		<my-input
			v-focus
			:model-value="searchQuery"
			@update:model-value="setSearchQuery"
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

		<div v-intersection="loadMorePosts" class="observer"></div>

	</div>
	

	

</template>

<script>

import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
// import axios from 'axios';

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';



// import MainButton from '../components/UI/MainButton.vue';


export default{

	components: { PostList, PostForm, },
	data(){
		return{
			popupVisible: false,
		}
	},
	methods: {
		...mapMutations({
			setPage: 'post/setPage',
			setSearchQuery: 'post/setSearchQuery',
			setSelectedSort: 'post/setSelectedSort',
		}),
		...mapActions({
			fetchPosts: 'post/fetchPosts',
			loadMorePosts: 'post/loadMorePosts',
		}),
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

	},
	computed:{
		...mapState({
			posts: state => state.post.posts,
			isPostsLoading: state => state.post.isPostsLoading,
			selectedSort: state => state.post.selectedSort,
			searchQuery: state => state.post.searchQuery,
			page: state => state.post.page,
			limit: state => state.post.limit,
			totalPages: state => state.post.totalPages,
			sortOptions: state => state.post.sortOptions,
		}),
		...mapGetters({
			sortedPosts: 'post/sortedPosts',
			sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
		}),
	},

	mounted() {
    this.fetchPosts();
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
