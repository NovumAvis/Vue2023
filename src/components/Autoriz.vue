<template>
	
	<div class="mainContainer blockWrap">
		<Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="schema">
			<div class="contentWrap">
				<div class="topLine flexWrap">
					<span class="theButton leftButton buttonTransparent ghostWrap">Назад</span>
					<h1 class="theTitle alignCenter">Вход</h1>
					<button class="theButton rightButton buttonTransparent fontFamilyB">Войти</button>
				</div>

				<div class="contentSubWrap">

					<div class="titleLine">
						<h2 class="pageTitle fontSize20 alignCenter fontFamilyEB">Добро пожаловать в школу мам и пап</h2>
						<h2 class="pageSubtitle fontSize32 alignCenter fontFamilyEB">"Нежность"</h2>
					</div>
					<div class="formWrap">
						<label class="inputWrap" :class="{notValid: errors.email }">
							<span class="label">Введите email</span>
							<div class="inputBox">
								<Field name="email" />
							</div>
   					 	<ErrorMessage class="errorTitle" name="email" />
						</label>
						<label class="inputWrap" :class="{notValid: errors.password }">
							<span class="label">Введите пароль</span>
							<div class="inputBox">
								<Field name="password" :type="inputPassType" />
								<span class="theButton buttonShowPass" :class="{ active: this.inputPassType == 'text' }" @click="showPass"></span>
							</div>
							<ErrorMessage class="errorTitle" name="password" />
						</label>

						<div class="infoWrap">
							<span class="theButton buttonOptimal marginAuto buttonWhite fontFamilyB">Забыли пароль?</span>
							<span class="theTitle">Нет аккаунта?</span>
							<span class="theButton buttonOptimal marginAuto buttonTransparent fontFamilyB fontSize14" @click="this.setRegPage()">Зарегистрироваться</span>
						</div>
					</div>

				</div>

			</div>
		</Form>
	</div>

</template>

<script>

import {mapState, mapMutations} from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate';

import { object, string } from 'yup';

export default {
	name: 'autoriz',

	components: {
		Form,
    Field,
    ErrorMessage,
	},

	setup(){
		const schema = object({
      email: string().required('Пожалуйста, заполните это поле').email('Пожалуйста, введите корректный email').typeError('Поле Email обязателен').label('Email'),
      password: string().required('Пожалуйста, заполните это поле').label('Пароль'),
		});
    return {
      schema,
    };
	},

	data(){
		return{
			curStep: 1,
			inputPassType: 'password',
			// loginForm: {
			// 	email: '',
			// 	password: '',
			// },
		}
	},

	
	methods:{
		...mapMutations({
			setLogPage: 'setLogPage',
			setAuthIn: 'setAuthIn',
			setAuthOut: 'setAuthOut',
			setRegPage: 'setRegPage',
			// hiddenPopup: state => state.hiddenPopup, // какой-то старый не рабочий вариант подключения мутаций из vuex
		}),

		nextStep(){
			this.curStep += 1;
		},
		prevStep(){
			this.curStep -= 1;
		},

		showPass(){
			if( this.inputPassType == 'password' ){
				this.inputPassType = 'text';
			}else{
				this.inputPassType = 'password';
			}
		},

		onSubmit(values){
			console.log(JSON.stringify(values, null, 2));
			this.setAuthIn();
		},

	},

	computed:{
		...mapState({
			isAuth: state => state.isAuth,
			newReg: state => state.newReg,
		})
	},

	
}


</script>

<style lang="scss" scoped>


.mainContainer{
	.contentWrap{

		.topLine{
			background-color: #ffeaeba8;
			backdrop-filter: blur(5px);
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			padding: 0 16px;
			justify-content: space-between;
			z-index: 100;
			.theButton{
				width: 100%;
				max-width: max-content;
				min-width: 20%;
				&.rightButton{
					text-align: right;
				}
			}
			.theTitle{
				cursor: default;
				width: 100%;
				max-width: max-content;
				min-width: 60%;
				margin-top: 12px;
				margin-bottom: 12px;
				font-size: 16px;
			}
		}

		.contentSubWrap{
			position: relative;
			z-index: 10;
			width: 100%;
			padding-top: 80px;
			padding-bottom: 40px;
			.titleLine{
				margin-bottom: 32px;
			}
		}

		.formWrap{
			.submitWrap{
				margin-bottom: 0;
			}
			.infoWrap{
				margin-top: 52px;
				display: flex;
				flex-direction: column;
				.theButton{
					padding: 12px 16px;
					margin-bottom: 32px;
				}
				.theTitle{
					text-align: center;
					margin-bottom: 4px;
				}
			}
		}

	}
}



/* -------- @media ----------- */

@media screen and (max-width: 600px) {
	.stepRegSecond{
		margin-bottom: 0px;
	}
}




</style>