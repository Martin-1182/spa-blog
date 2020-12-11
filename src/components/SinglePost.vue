<template>
	<article class="single-post">
		<div class="container-fluid text-center bg-warning p-5 mb-4">
			<h1>As a Designer, I Refuse To Call People 'Users'</h1>
		</div>
		<div class="container">
			<img
				@click="showMultiple"
				src="https://picsum.photos/1110/500?random=1"
				alt="Post image"
				class="img-fluid mb-4"
			/>
			<!-- all props & events -->
			<vue-easy-lightbox
				escDisabled
				moveDisabled
				:visible="visible"
				:imgs="imgs"
				:index="index"
				@hide="handleHide"
			></vue-easy-lightbox>
			<div class="post-content">
				<p class="post-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vel, ipsam nobis quam soluta sit itaque accusamus iusto
					porro corporis recusandae vero. Deleniti soluta ipsum sequi
					totam, itaque beatae nobis fugiat officia. Molestias
					necessitatibus corrupti ullam tempora voluptatum? Dolore
					quod provident, eaque iure fugiat velit exercitationem
					consectetur qui harum animi debitis nobis minus optio modi
					ducimus excepturi? Minima maiores dicta accusamus
					consequatur delectus fugit tempore corrupti cumque,
					quibusdam minus deserunt, libero quisquam obcaecati sunt
					doloribus commodi blanditiis vero omnis soluta aliquid ut
					dolores? Esse, totam iure. Aperiam fugit eligendi, quidem
					officiis unde, perferendis nam dolore culpa esse magnam
					autem reprehenderit nostrum reiciendis laudantium quis enim
					sunt ipsam molestias! Itaque sed sunt, repellat magni quo
					nisi, sapiente sit exercitationem, perferendis quos nulla
					tempore id commodi alias cupiditate culpa non voluptatum
					numquam doloribus harum provident impedit quas cumque
					labore. Voluptas nisi et autem molestiae consectetur
					exercitationem incidunt atque. Quos odit fugiat dolorum quam
					assumenda corporis, minima magni repudiandae animi
					reprehenderit fugit exercitationem quo modi id suscipit
					omnis voluptates molestiae non eius quaerat obcaecati facere
					quidem ut? Impedit obcaecati ab mollitia dolores nihil,
					optio excepturi, alias dignissimos autem id pariatur? Iste,
					ex harum nostrum ullam ratione repudiandae dolor? Quis iste
					qui doloremque aspernatur sequi.
				</p>
				<p class="post-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vel, ipsam nobis quam soluta sit itaque accusamus iusto
					porro corporis recusandae vero. Deleniti soluta ipsum sequi
					totam, itaque beatae nobis fugiat officia. Molestias
					necessitatibus corrupti ullam tempora voluptatum? Dolore
					quod provident, eaque iure fugiat velit exercitationem
					consectetur qui harum animi debitis nobis minus optio modi
					ducimus excepturi? Minima maiores dicta accusamus
					consequatur delectus fugit tempore corrupti cumque,
					quibusdam minus deserunt, libero quisquam obcaecati sunt
					doloribus commodi blanditiis vero omnis soluta aliquid ut
					dolores? Esse, totam iure. Aperiam fugit eligendi, quidem
					officiis unde, perferendis nam dolore culpa esse magnam
					autem reprehenderit nostrum reiciendis laudantium quis enim
					sunt ipsam molestias! Itaque sed sunt, repellat magni quo
					nisi, sapiente sit exercitationem, perferendis quos nulla
					tempore id commodi alias cupiditate culpa non voluptatum
					numquam doloribus harum provident impedit quas cumque
					labore. Voluptas nisi et autem molestiae consectetur
					exercitationem incidunt atque. Quos odit fugiat dolorum quam
					assumenda corporis, minima magni repudiandae animi
					reprehenderit fugit exercitationem quo modi id suscipit
					omnis voluptates molestiae non eius quaerat obcaecati facere
					quidem ut? Impedit obcaecati ab mollitia dolores nihil,
					optio excepturi, alias dignissimos autem id pariatur? Iste,
					ex harum nostrum ullam ratione repudiandae dolor? Quis iste
					qui doloremque aspernatur sequi.
				</p>
				<p class="post-text p-5 font-weight-bold bg-warning">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quam labore a quibusdam aliquid, repellat fugiat deleniti ad
					et beatae porro omnis itaque, facilis similique consectetur
					delectus ratione necessitatibus quaerat distinctio? Aliquam,
					eveniet doloribus ab quos quia, inventore qui impedit, non
					in expedita corrupti sunt itaque! Temporibus excepturi
					delectus enim quas voluptas harum eos incidunt. Tenetur
					officia blanditiis quam architecto rem consequuntur, nam
					recusandae atque odit labore, nobis consectetur voluptas
					maiores veritatis alias laudantium autem corporis ipsam!
					Ducimus distinctio alias, in impedit perspiciatis
					voluptatibus illo repellendus provident praesentium
					inventore aperiam qui omnis eveniet eos cum eius autem?
					Impedit dolor sunt aliquam!
				</p>
				<img
					@click="showSingle"
					src="https://picsum.photos/1110/500?random=2"
					alt="Post image"
					class="img-fluid mb-4"
				/>

				<!-- all props & events -->
				<vue-easy-lightbox
					escDisabled
					moveDisabled
					:visible="visible"
					:imgs="imgs"
					:index="index"
					@hide="handleHide"
				></vue-easy-lightbox>

				<p class="post-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vel, ipsam nobis quam soluta sit itaque accusamus iusto
					porro corporis recusandae vero. Deleniti soluta ipsum sequi
					totam, itaque beatae nobis fugiat officia. Molestias
					necessitatibus corrupti ullam tempora voluptatum? Dolore
					quod provident, eaque iure fugiat velit exercitationem
					consectetur qui harum animi debitis nobis minus optio modi
					ducimus excepturi? Minima maiores dicta accusamus
					consequatur delectus fugit tempore corrupti cumque,
					quibusdam minus deserunt, libero quisquam obcaecati sunt
					doloribus commodi blanditiis vero omnis soluta aliquid ut
					dolores? Esse, totam iure. Aperiam fugit eligendi, quidem
					officiis unde, perferendis nam dolore culpa esse magnam
					autem reprehenderit nostrum reiciendis laudantium quis enim
					sunt ipsam molestias! Itaque sed sunt, repellat magni quo
					nisi, sapiente sit exercitationem, perferendis quos nulla
					tempore id commodi alias cupiditate culpa non voluptatum
					numquam doloribus harum provident impedit quas cumque
					labore. Voluptas nisi et autem molestiae consectetur
					exercitationem incidunt atque. Quos odit fugiat dolorum quam
					assumenda corporis, minima magni repudiandae animi
					reprehenderit fugit exercitationem quo modi id suscipit
					omnis voluptates molestiae non eius quaerat obcaecati facere
					quidem ut? Impedit obcaecati ab mollitia dolores nihil,
					optio excepturi, alias dignissimos autem id pariatur? Iste,
					ex harum nostrum ullam ratione repudiandae dolor? Quis iste
					qui doloremque aspernatur sequi.
				</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	data() {
		return {
			imgs: '', // Img Url , string or Array of string
			visible: false,
			index: 0 // default: 0
		}
	},
	methods: {
		showSingle() {
			this.imgs = 'https://picsum.photos/1110/500?random=2'
			// or
			/* this.imgs = {
				title: 'this is a placeholder',
				src: 'http://via.placeholder.com/350x150'
			} */
			this.show()
		},
		showMultiple() {
			this.imgs = [
				'https://picsum.photos/1110/500?random=2',
				'https://picsum.photos/1110/500?random=1'
			]
			// or
			/* this.imgs = [
				{
					title: 'test img',
					src: 'https://picsum.photos/1110/500?random=2'
				},
				'https://picsum.photos/1110/500?random=2'
			] */
			// allow mixing

			this.index = 1 // index of imgList
			this.show()
		},
		show() {
			this.visible = true
		},
		handleHide() {
			this.visible = false
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	cursor: pointer;
}
</style>
