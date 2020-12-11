<template>
	<section class="row">
		<div class="col-sm-3 pr-1">
			<div
				class="article-tile"
				style="background-image: url(https://picsum.photos/300/500?random=13);"
			>
				<div class="content mb-5">
					<span
						class="tag-articles text-uppercase bg-dark p-1 rounded"
						>Lifestyle</span
					>
					<h3 class="title mt-3">
						Organize Your Life With 10 Simple rule
					</h3>
					<router-link to="" class="mt-2 btn btn-outline-light"
						>Read More</router-link
					>
				</div>
			</div>
		</div>
		<div class="col-sm-3 pl-1 pr-1">
			<div
				class="article-tile"
				style="background-image: url(https://picsum.photos/300/500?random=10);"
			>
				<div class="content mb-5">
					<span
						class="tag-articles text-uppercase bg-dark p-1 rounded"
						>Lifestyle</span
					>
					<h3 class="title mt-3">
						Organize Your Life With 10 Simple rule
					</h3>
					<router-link to="" class="mt-2 btn btn-outline-light"
						>Read More</router-link
					>
				</div>
			</div>
		</div>
		<div class="col-sm-3 pl-1 pr-1">
			<div
				class="article-tile"
				style="background-image: url(https://picsum.photos/300/500?random=11);"
			>
				<div class="content mb-5">
					<span
						class="tag-articles text-uppercase bg-dark p-1 rounded"
						>Lifestyle</span
					>
					<h3 class="title mt-3">
						Organize Your Life With 10 Simple rule
					</h3>
					<router-link to="" class="mt-2 btn btn-outline-light"
						>Read More</router-link
					>
				</div>
			</div>
		</div>
		<div class="col-sm-3 pl-1 d-flex">
			<div
				class="article-tile"
				style="background-image: url(https://picsum.photos/300/500?random=12);"
			>
				<div class="content mb-5">
					<span
						class="tag-articles text-uppercase bg-dark p-1 rounded"
						>Lifestyle</span
					>
					<h3 class="title mt-3">
						Organize Your Life With 10 Simple rule
					</h3>
					<router-link to="" class="mt-2 btn btn-outline-light"
						>Read More</router-link
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.article-tile {
	margin-bottom: 5em;
	position: relative;
	height: 500px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	color: white;
}
/* Extra Small Devices, Phones */
@media only screen and (max-width: 480px) {
	.col-sm-3 {
		padding: 0 !important;
	}
	.article-tile {
		margin-bottom: 1em;
		.content {
			padding-right: 1em;
		}
	}
}
</style>
