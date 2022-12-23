<template>
	<div>
		<select v-model="modelValue" @change="changeOpions">
			<option disabled value="">Выберите из списка</option>
			<option 
				v-for="option in options" 
				:key="option.value" 
				:value="option.value"
				>
				{{ option.name }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'my-select',
	props: {
		themodelValue: {
			type: String,

		},
		options: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		changeOpions(event){
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style>

</style>