<template>
	<div class="popup" v-if="show" @click.stop="hiddenPopup">
		<div @click.stop class="popup_content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import togglePopup from "@/mixins/togglePopup";

export default {
	name: 'popup-container',
	mixins: [togglePopup],
	props: {
		// убрали, так как этот функционал перенесли в отдельный миксин
		// show: { 
		// 	type: Boolean,
		// 	default: false,
		// 	}

	},
	methods:{
		// убрали, так как этот функционал перенесли в отдельный миксин
		// hiddenPopup(){
		// 	this.$emit('update:show', false)
		// }
	},
	mounted(){
		console.log('Хук Mounted попапа сработает после миксина');
	}
}
</script>

<style>

.popup{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #00000075;
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup_content{
	min-width: 375px;
	min-height: 60px;
	position: relative;
	border-radius: 12px;
	background-color: #fff;
	padding: 20px;
	

	

}
</style>