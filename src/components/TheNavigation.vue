<template>
	<nav
		class="navbar navbar-expand-lg navbar-light"
		v-bind:class="{ navbarOpen: show }"
	>
		<router-link class="navbar-brand" to="/">
			<img alt="Vue logo" src="../assets/logo.png" height="50" />
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
			@click.stop="toggleNavbar()"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="collapse navbar-collapse"
			id="navbarNavDropdown"
			v-bind:class="{ show: show }"
		>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item dropdown active">
					<router-link
						class="nav-link dropdown-toggle text-uppercase font-weight-bold"
						to="/"
						id="navbarDropdownMenuLink"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Home<span class="sr-only">(current)</span>
					</router-link>
					<div
						class="dropdown-menu"
						aria-labelledby="navbarDropdownMenuLink"
					>
						<router-link to="#">1</router-link>
						<router-link to="#">2</router-link>
						<router-link to="#">3</router-link>
					</div>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link text-uppercase font-weight-bold"
						to="/About"
						>About</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/blog"
						class="nav-link text-uppercase font-weight-bold"
						>Blog</router-link
					>
				</li>
				<li class="nav-item">
					<router-link
						to="/contact"
						class="nav-link text-uppercase font-weight-bold"
						>Contact</router-link
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			show: false
		}
	},
	methods: {
		toggleNavbar() {
			this.show = !this.show
		}
	},
}
</script>

<style lang="scss" scoped></style>
