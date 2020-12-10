<template>
	<div class="navigation">
		<div class="logo">
			<img alt="Vue logo" src="../assets/logo.png" />
		</div>
		<div class="links">
			<router-link to="/"
				>Home
				<svg
					class="chevron-down"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/></svg
			></router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/Blog">Blog</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
