<template>
	<div class="container-fluid mb-4 mt-4 text-center">
		<home-card />
	</div>
	<div class="container mt-4">
		<posts />
	</div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import HomeCard from '@/components/HomeCard.vue'

export default {
	name: 'Home',
	components: {
		Posts,
		HomeCard
	}
}
</script>
