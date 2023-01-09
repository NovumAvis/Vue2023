<template>
	
	<div class="main_container">

		<div class="top_line">
			<button class="the_button button_transparent ghost_wrap">Назад</button>
			<h1 class="the_title">Вход</h1>
			<button class="the_button button_transparent">Войти</button>
		</div>

		<div class="content_wrap">

			<div class="title_line"></div>
			<div class="form_wrap"></div>

		</div>
	</div>

</template>

<script>

import {mapState} from 'vuex';

export default {
	name: 'autoriz',

	components: {},

	data(){
		return{
			loginForm: {
				email: '',
				password: '',
			},
		}
	},

	
	methods:{

	},

	computed:{
		...mapState({
			isAuth: state => state.isAuth,
			newReg: state => state.newReg,
		})
	},

	
}


</script>

<style lang="scss">




</style>