export default {
	props: {
		show: { 
			type: Boolean,
			default: false,
		}
	},
	methods: {
		hiddenPopup(){
			this.$emit('update:show', false)
		}
	},
	mounted(){
		console.log('Хук Mounted миксина сработает первый');
	},
}