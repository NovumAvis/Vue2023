<template>
	<div class="mainContainer blockWrap">

		<Form @submit="onSubmit" :validation-schema="schema">
		
		<div class="contentWrap stepRegFirst" v-show="curStep == 1">

			
		
			<div class="topLine flexWrap">
				<span class="theButton leftButton buttonTransparent ghostWrap">Назад</span>
				<h1 class="theTitle alignCenter">Регистрация</h1>
				<button class="theButton rightButton buttonTransparent fontFamilyB">Далее</button>
			</div>

			<div class="contentSubWrap">

				<div class="titleLine">
					<h2 class="pageTitle alignCenter fontSize20 fontFamilyEB">Добро пожаловать в школу мам и пап</h2>
					<h2 class="pageSubtitle alignCenter fontSize32 fontFamilyEB">"Нежность"</h2>
				</div>
				<div class="formWrap">
						<label class="inputWrap">
							<span class="label">Введите email</span>
							<div class="inputBox">
								<Field name="email" />
							</div>
   					 	<ErrorMessage class="errorTitle" name="email" />
						</label>
						<label class="inputWrap">
							<span class="label">Введите пароль</span>
							<div class="inputBox">
								<Field name="password" :type="inputPassType" />
								<span class="theButton buttonShowPass" :class="{ active: this.inputPassType == 'text' }" @click="showPass"></span>
							</div>
							<ErrorMessage class="errorTitle" name="password" />
						</label>
						<label class="inputWrap">
							<span class="label">Повторите пароль</span>
							<div class="inputBox">
								<Field name="confirm_password" :type="inputPassType" />
								<span class="theButton buttonShowPass" :class="{ active: this.inputPassType == 'text' }" @click="showPass"></span>
							</div>
							<ErrorMessage class="errorTitle" name="confirm_password" />
						</label>
						<div class="infoWrap">
							<span class="theTitle">Есть аккаунт?</span>
							<span class="theButton buttonTransparent fontFamilyB marginB30 fontSize14" @click="this.setLogPage()">Войти</span>
							<p class="policy_text alignCenter fontSize12">Регистрируясь в приложении вы соглашаетесь с <a href="#" @click="nextStep">политикой обработки персональных данных</a></p>
						</div>
					<!-- </Form> -->
					<!-- <button class="theButton buttonPrimary buttonConfirm marginAuto" @click="onSubmit" >Отправить</button> -->
				</div>

			</div>


		</div>



		<div class="contentWrap stepRegSecond" v-show="curStep == 2">
		
			<div class="topLine flexWrap">
				<span class="theButton leftButton buttonTransparent" @click="prevStep">Назад</span>
				<h1 class="theTitle alignCenter">Прочтите соглашение</h1>
				<span class="theButton ghostWrap"></span>
			</div>

			<div class="contentSubWrap">
				<div class="infoWrap">
					<h2>Заголовок</h2>
					<h3>Подзаголовок</h3>
					<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.</p>
					<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.</p>
					<br>
					<h3>Подзаголовок</h3>
					<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.</p>
					<br>
					<h3>Подзаголовок</h3>
					<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.</p>
					<br>
					<h3>Подзаголовок</h3>
					<p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации.</p>
				</div>
				<span class="theButton buttonPrimary buttonConfirm" :class="{hiddenWrap: !this.formValues || Object.keys(this.formValues).length === 0 || !this.finishReg }" @click="confirmRegistr">Принять и продолжить</span>
				<span class="theButton buttonPrimary buttonConfirm" :class="{hiddenWrap: this.formValues && Object.keys(this.formValues).length !== 0 && this.finishReg }" @click="prevStep">Зарегистрироваться</span>
			</div>
			
		</div>




		<div class="contentWrap stepRegFinal" v-show="curStep == 3">
			<div class="contentSubWrap">
				<div class="infoWrap">
					<h2>Регистрация прошла успешно!</h2>
					<p class="confirmMessage">Для входа перейдите на страницу авторизации.</p>
					<span class="theButton buttonConfirm buttonPrimary" @click="this.setLogPage()">Войти</span>
					<!-- <button class="theButton buttonPrimary" @click="confirmReg">Войти</button> -->
				</div>
			</div>
		</div>

	</Form>
	</div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';
import { Form, Field, ErrorMessage, useField } from 'vee-validate';

import { object, string, ref } from 'yup';


export default {

	name: 'Registr',

	components: {
		// object,
		// string,
    Form,
    Field,
    ErrorMessage,
  },

	// Создаем переменные yup через setup, чтобы избежать ненужной реактивности
	setup(){
		const schema = object({
      email: string().required('Пожалуйста, заполните это поле').email('Пожалуйста, введите корректный email').typeError('Поле Email обязателен').label('Email'),
			// name: string().required('Поле обязательно на заполнение').label('Имя'),
      password: string().required('Пожалуйста, заполните это поле').min(8, 'Поле пароля должно содержать не менее 8 символов').label('Пароль'),
			confirm_password: string().label('Подтверждение пароля').required('Пожалуйста, заполните это поле').oneOf([ref('password'), null], 'Пароли должны совпадать'),
		});
    return {
      schema,
    };
	},
	data(){
		return{
			curStep: 1,
			finishReg: false,
			inputPassType: 'password',
			formValues: {},
			// regForm: {
			// 	email: '',
			// 	firstName: '',
			// 	password: '',
			// 	confirmPassword: '',
			// 	phone: '',
			// },
			
		}
	},

	methods:{

		// Мутации состояний из хранилища
		...mapMutations({
			setLogPage: 'setLogPage',
			setAuthIn: 'setAuthIn',
			setAuthOut: 'setAuthOut',
			setRegPage: 'setRegPage',
			// hiddenPopup: state => state.hiddenPopup, // какой-то старый не рабочий вариант подключения мутаций из vuex
		}),

		// Шаги, для регистрации
		nextStep(){
			this.curStep += 1;
			this.finishReg = false;
		},
		prevStep(){
			this.curStep -= 1;
			this.finishReg = false;
		},

		// Микс из мутации хранилища и локального метода
		// confirmReg(){
		// 	this.curStep = 1;
		// 	this.setLogPage();
		// },

		// Локальный метод для показа пароля в форме
		showPass(){
			if( this.inputPassType == 'password' ){
				this.inputPassType = 'text';
			}else{
				this.inputPassType = 'password';
			}
		},

		onSubmit(values){
			this.finishReg = true;
			this.formValues = values;
			this.curStep += 1;
		},

		confirmRegistr(){
			console.log(JSON.stringify(this.formValues, null, 2));
			this.curStep += 1;
			this.finishReg = false;
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

		&.stepRegSecond{
			margin-bottom: 80px;
			background-color: #FFF;
			.topLine{
				background-color: #ffffffa8;
				backdrop-filter: blur(5px);
				border-bottom: 1px solid rgba(35, 41, 45, 0.1);
			}
			.infoWrap{
				margin-bottom: 20px;
			}
			.buttonConfirm{
				margin: 0 auto;
			}
		}

		&.stepRegFinal{
			& *{
				text-align: center;
				margin-left: auto;
				margin-right: auto;
			}
			.infoWrap .confirmMessage{
				margin-bottom: 30px;
			}
		}

		.infoWrap{
			.policy_text{}
		}
	}
}


/* -------- @media ----------- */

@media screen and (max-width: 600px) {

	.mainContainer{
		.contentWrap{
			&.stepRegSecond{
				margin-bottom: 0px;
			}
		}
	}

}



</style>