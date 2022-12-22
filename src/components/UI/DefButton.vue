<template>
	
	<button>
		<slot></slot>
	</button>

</template>

<script>
export default {
	name: 'def-button'
}
</script>

<style lang="scss">


button{
	flex-direction: column;
	display: flex;
	max-width: 320px;
	padding: 10px 15px;
	border: none;
	width: max-content;
	background-color: #333;
	color: #fff;
}


</style>