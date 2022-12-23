import axios from 'axios';


export const postModule = {
	state: () => ({
		posts: [],
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
	}),
	getters: {
		sortedPosts(state){
			return [...state.posts].sort( (post1, post2) => {
				return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
			} );
		},
		sortedAndSearchedPosts(state, getters){
			return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery))
		}
	},
	mutations: {
		setPosts(state, posts){
			state.posts = posts;
		},
		setIsPostsLoading(state, isPostsLoading){
			state.isPostsLoading = isPostsLoading;
		},
		setSelectedSort(state, selectedSort){
			state.selectedSort = selectedSort;
		},
		setSearchQuery(state, searchQuery){
			state.searchQuery = searchQuery;
		},
		setPage(state, page){
			state.page = page;
		},
		setTotalPages(state, totalPages){
			state.totalPages = totalPages;
		},



	},
	actions: {

		async fetchPosts({state, commit}){
			try{
				// пишем коммит, так как работаем с экшеном,
				// значением берем функцию setLoading из мутаций, вторым параметром передаем то, что хотим присвоить
				commit('setIsPostsLoading', true);
				// this.isPostsLoading = true;
				setTimeout( async () => {
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							// пишем state.page потому что это просто значения, не функции мутаций
							_page: state.page,
							_limit: state.limit,
						}
					});
					// this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
					commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
					
					// this.posts = response.data;
					commit('setPosts', response.data);
					
					// this.isPostsLoading = false;
					commit('setIsPostsLoading', false);
				}, 1000 )
				
			} catch(e){
				console.log(e);
			} finally {}
		},

		async loadMorePosts({state, commit}){
			try{
				setTimeout( async () => {
					
					// this.page += 1;
					commit('setPage', state.page += 1);

					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: state.page,
							_limit: state.limit,
						}
					});
					// this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
					commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
					
					// this.posts = [...this.posts, ...response.data];
					commit('setPosts', [...state.posts, ...response.data] );
				}, 10 )
				
			} catch(e){
				// alert('Ошибка');
				console.log(e);
			} finally {}
		},

	},
	namespaced: true,
}