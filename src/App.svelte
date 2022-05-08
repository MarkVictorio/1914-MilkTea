<script lang="ts">
	// TODO:
	// - Change color pallete
	// - Change fonts?
	// - Make the ContactUs section bigger
	// - Add Phone Number in ContactUs section
	// - Add Address content
	// - Add more "rustic" design elements
	// - Do the navbar
	import woodPic from "./assets/woodBackground.jpg";
	import logo from "./assets/svelte.png";
	import headerPic from "./assets/milkTea1.png";
	import exteriorPic from "./assets/exterior.jpg";
	import ProductCard from "./lib/ProductCard.svelte";
	import Counter from "./lib/Counter.svelte";
	import products from "./lib/products";
	import Logo from "./assets/Logo.png";
	import Jay from "./assets/Jay.jpg";
	import Ed from "./assets/Ed.jpg";
	import Noah from "./assets/Noah.jpg";
	import TJ from "./assets/TJ.jpg";
	import Mark from "./assets/Mark.jpg";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&family=Tapestry&display=swap" rel="stylesheet">

<main>
	<div id="wrapper w-full h-full">
		<nav class="h-auto py-2 bg-white">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="/" class="flex items-center">
					<img src={Logo} class="mx-4 h-auto sm:h-9" alt="Logo" />
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black font-lobster">1914 Milk Tea - San Rafael</span>
				</a>
				<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
					<ul class="font-poppins flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
					  <li>
						<a href="/" class="block rounded-md py-2 pr-4 pl-3 hover:bg-[#aebfa0] duration-300 ">Home</a>
					  </li>
					  <li>
						<a href="#products" class="block rounded-md py-2 pr-4 pl-3 hover:bg-[#aebfa0] duration-300">Products</a>
					  </li>
					  <li>
						<a href="#address" class="block rounded-md py-2 pr-4 pl-3 hover:bg-[#aebfa0] duration-300">Address</a>
					  </li>
					  <li>
						<a href="#contact" class="block rounded-md py-2 pr-4 pl-3 hover:bg-[#aebfa0] duration-300">Contact</a>
					  </li>
					  <li>
						<a href="#about-dev" class="block rounded-md py-2 pr-4 pl-3 hover:bg-[#aebfa0] duration-300">About</a>
					  </li>
					</ul>
				  </div>
			</div>
		</nav>

		<section id="home" class="w-full h-fit px-5 py-12 bg-[#aebfa0]">
			<div class="container flex justify-center gap-x-12">
				<div class="flex p-12 bg-[#425a33] w-fit h-fit shadow-md rounded-lg">
					<img
						src={headerPic}
						alt="milkTea"
						class="h-96 object-scale-down rounded-lg"
					/>
				</div>
				<div class="flex flex-col justify-center gap-y-4">
					<h1 class="text-white font-black font-lobster text-7xl">1914 Milk Tea Shop</h1>
					<span class="leading-5 font-poppins">
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

		<section id="products" class="w-full h-fit px-20 py-12 bg-gradient-to-b from-stone-500 to-stone-800">
			<div class="flex flex-col w-full leading-6">
				<h2
					class="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-white 
				after:inline-block after:relative after:align-middle after:w-1/4 
				before:bg-white before:inline-block before:relative before:align-middle 
				before:w-1/4 before:right-2 after:left-2 p-4 mb-10 font-bold text-3xl 
			  text-white font-poppins"
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
								price={product.price}
							/>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section
			id="address"
			class="w-full h-fit px-5 py-12 bg-gray-300"
		>
			<div class="container bg-stone-600 flex justify-center p-12 gap-x-12">
				<div class="p-4 bg-gray-200 shadow-md rounded-lg">
					<img src={exteriorPic} alt="Storefront" class="h-96 rounded-lg" />
				</div>
				<div class="flex flex-col gap-y-4 justify-center">
					<h2 class="text-white text-5xl font-poppins font-bold">
						Where to find us:
					</h2>
					<span class="font-poppins text-2xl leading-4 text-white">JJJ Revita Bldg, MacArthur Hwy, Tarlac City, 2300 Tarlac</span>
				</div>
				
			</div>
		</section>

		<section id="contact" class="w-full h-fit px-5 py-12 bg-gray-200">
			<div class="flex flex-col items-center gap-y-5 font-poppins">
				<h3 class="text-6xl font-bold">CONTACT US</h3>
				<p class="font-poppins">Phone number: +639369419337</p>
				<a href="mailto:example@gmail.com">
					<button
						class="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300 font-poppins"
						>Email Us</button
					>
				</a>
			</div>
		</section>

		<section id="about-dev" class="w-full h-fit px-5 py-12 text-white bg-gray-900 font-poppins ">
			<div class="flex flex-col items-center">
				<h3 class="text-4xl font-bold">MEET THE DEVELOPERS</h3>
				<div class="grid grid-cols-5">
					<div class="flex flex-col items-center p-4 w-80 rounded-lg">
						<img class="rounded-lg object-scale-down h-60 w-40" src={Jay} alt="Jay" />
						<div class="flex flex-col m-6 text-center">
							<h3 class="text-2xl text-gray">Jeremias Bulanadi</h3>
							<h4 class="text-xl">CS - 401</h4>
							<h4 class="text-xl">Layout</h4>
						</div>
					</div>
					<div class="flex flex-col items-center p-4 w-80 rounded-lg">
						<img class="rounded-lg object-scale-down h-60 w-40" src={Ed} alt="Jay" />
						<div class="flex flex-col m-6 text-center">
							<h3 class="text-2xl text-gray">Edward Ruben Elegino</h3>
							<h4 class="text-xl">CS - 401</h4>
							<h4 class="text-xl">Design</h4>
						</div>
					</div>
					<div class="flex flex-col items-center p-4 w-80 rounded-lg">
						<img class="rounded-lg object-scale-down h-60 w-40" src={Noah} alt="Jay" />
						<div class="flex flex-col m-6 text-center">
							<h3 class="text-2xl text-gray">John Noah Jarry</h3>
							<h4 class="text-xl">CS - 401</h4>
							<h4 class="text-xl">Data</h4>
						</div>
					</div>
					<div class="flex flex-col items-center p-4 w-80 rounded-lg">
						<img class="rounded-lg object-scale-down h-60 w-40" src={TJ} alt="Jay" />
						<div class="flex flex-col m-6 text-center">
							<h3 class="text-2xl text-gray">Tristan Jerico Vasco</h3>
							<h4 class="text-xl">CS - 401</h4>
							<h4 class="text-xl">Documentation</h4>
						</div>
					</div>
					<div class="flex flex-col items-center p-4 w-80 rounded-lg">
						<img class="rounded-lg object-scale-down h-60 w-40" src={Mark} alt="Jay" />
						<div class="flex flex-col m-6 text-center">
							<h3 class="text-2xl text-gray">Mark Vincent Victorio</h3>
							<h4 class="text-xl">CS - 401</h4>
							<h4 class="text-xl">Functionality</h4>
						</div>
					</div>
				</div>
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
