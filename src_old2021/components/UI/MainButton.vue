<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'main-button',
}
</script>

<style scoped>

.btn{
	margin-bottom: 5px;
	padding: 5px 10px;
	background: none;
	color: teal;
	border: 1px solid teal;
}

</style>