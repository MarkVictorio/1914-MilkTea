<script lang="ts">
	// TODO:
	// - Change color pallete
	// - Change fonts?
	// - Make the ContactUs section bigger
	// - Add Phone Number in ContactUs section
	// - Add Address content
	// - Add more "rustic" design elements
	// - Do the navbar

	import logo from "./assets/svelte.png";
	import headerPic from "./assets/milkTea1.png";
	import exteriorPic from "./assets/exterior.jpg";
	import backgroundPic from "./assets/milkteabg.png";
	import ProductCard from "./lib/ProductCard.svelte";
	import Counter from "./lib/Counter.svelte";
	import products from "./lib/products";
</script>

<main>
	<div id="wrapper w-full h-full">
		<nav class="h-10">lorem</nav>

		<section id="home" class="w-full h-fit px-5 py-12 bg-gray-500">
			<div class="container flex justify-center gap-x-12">
				<div class="flex p-12 bg-stone-50 w-fit h-fit shadow-md rounded-lg">
					<img
						src={headerPic}
						alt="milkTea"
						class="h-96 object-scale-down rounded-lg"
					/>
				</div>
				<div class="flex flex-col justify-center gap-y-4">
					<h1 class="text-white font-black text-5xl">1914 Milk Tea Shop</h1>
					<span class="leading-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis <br
						/>
						adipisci repudiandae, pariatur labore maxime laudantium similique
						<br />
						delectus, ipsa praesentium deleniti architecto, reprehenderit <br />
						voluptates error! Earum maxime iusto natus velit adipisci! <br />
					</span>
				</div>
			</div>
		</section>

		<section id="products" class="w-full h-fit px-20 py-12 bg-gray-400">
			<div class="flex flex-col w-full leading-6">
				<h2
					class="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white 
				after:inline-block after:relative after:align-middle after:w-1/4 
				before:bg-white before:inline-block before:relative before:align-middle 
				before:w-1/4 before:right-2 after:left-2 p-4 mb-10 font-bold text-3xl 
				italic text-white"
				>
					OUR PRODUCTS
				</h2>
				<div class="flex justify-center w-full">
					<div class="grid grid-cols-3 gap-24">
						{#each products as product}
							<ProductCard
								photo={product.image}
								name={product.name}
								description={product.description}
							/>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section
			id="address"
			class="w-full h-fit px-5 py-12 bg-gray-300 flex justify-center"
		>
			<div class="container bg-stone-600 flex justify-center p-12 gap-x-12">
				<div class="p-4 bg-gray-200 shadow-md">
					<img src={exteriorPic} alt="Storefront" class="h-96" />
				</div>
				<p class="text-white text-4xl font-poppins font-bold">
					Where to find us:
				</p>
			</div>
		</section>

		<section id="contact" class="w-full h-fit px-5 py-12 bg-gray-200">
			<div class="flex flex-col items-center gap-y-5">
				<h3 class="text-6xl">CONTACT US</h3>
				<p>Phone Numbers</p>
				<a href="mailto:example@gmail.com">
					<button
						class="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300"
						>Email Us</button
					>
				</a>
			</div>
		</section>
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
	*/

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
</style>
