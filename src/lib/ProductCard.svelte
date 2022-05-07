<script>
	export let photo;
	export let name;
	export let description;
	export let price;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap" rel="stylesheet">

<main class="flex flex-col p-6 bg-[#b88e4f] w-96 rounded-lg shadow-md">
	<div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
		<img class="rounded-lg mb-4" src={photo} alt={name} />
		<div class="absolute inset-0 z-10 rounded-lg mb-4 bg-gray-500 text-center flex flex-col items-center justify-center opacity-0 text-white text-6xl font-poppins hover:opacity-100 bg-opacity-50 duration-300">{price}</div>
	</div>
	
	<h3 class="text-2xl font-poppins font-semibold mb-2 text-white">
		{name}
	</h3>
	<p class="font-poppins text-stone-800">
		{description}
	</p>
	
</main>
