<template>
	<div v-if="!isAuth" class="authContainer">
		<autoriz v-if="!newReg"></autoriz>
		<registr v-if="newReg"></registr>
	</div>
	<div v-if="isAuth" class="appContainer">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<!-- {{ curStep }}
		<button @click="nextStep">Добавить шаг</button> -->
		<router-view></router-view>
	</div>
</template>


<script>

// Импортирование компонентов 
import Autoriz from '@/components/Autoriz';
import Registr from '@/components/Registr';

import {mapState, mapMutations} from 'vuex';



export default {
	// Определяем компоненты
	components: { Autoriz, Registr, },

	data(){
		return{
			// curStep: 1,
		}
	},

	methods: {
		...mapMutations({
			// hiddenPopup: state => state.hiddenPopup,
			// hiddenSelectDropdown: 'hiddenSelectDropdown',
			// hiddenSelectDropdownMenu: 'hiddenSelectDropdownMenu',
		}),
		// nextStep(){
		// 	this.curStep += 1;
		// }
	},


	computed:{
	...mapState({
			// Определяем isAuth из хранилища, чтобы приложение смогло использовать его в работе на странице.
			isAuth: state => state.isAuth,
			newReg: state => state.newReg,
			// thePopup: state => state.thePopup,
		}),
	}

}

</script>

<style lang="scss">

@import '@/assets/main.css';

#app {
	overflow: hidden;
	padding: 0;
	position: relative;
	background: #FFEAEB;
	height: 100%;
	min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	&::before{
		z-index: 5;
		content: '';
		display: block;
		position: fixed;
		width: 36vh;
		height: 36vh;
		right: -18vh;
		top: 15vh;
		border-radius: 50%;
		background: #FEABB0;
		filter: blur(13vh);
	}
	&::after{
		z-index: 5;
		content: '';
		display: block;
		position: fixed;
		width: 60vh;
		height: 60vh;
		left: -30vh;
		bottom: 10vh;
		border-radius: 50%;
		background: #FEABB0;
		filter: blur(20vh);
	}
	.authContainer{
		z-index: 10;
		position: relative;
	}
	.appContainer{
		z-index: 10;
		position: relative;
	}
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


/* ------ @Media ------- */

@media screen and (max-width: 480px) {

#app {
	&::before{
		width: 36vh;
		height: 36vh;
		right: -22vh;
		top: 5vh;
		border-radius: 50%;
		background: #FEABB0;
		filter: blur(6vh);
	}
	&::after{
		width: 60vh;
		height: 60vh;
		left: -36vh;
		bottom: 5vh;
		border-radius: 50%;
		background: #FEABB0;
		filter: blur(12vh);
	}
}

}



</style>
