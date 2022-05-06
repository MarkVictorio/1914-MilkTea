<script>
	export let photo;
	export let name;
	export let description;
</script>

<main class="flex flex-col p-6 bg-stone-50 w-96 rounded-lg shadow-md">
	<img class="rounded-lg mb-4" src={photo} alt={name} />
	<h3 class="text-2xl font-medium font-poppins mb-2">
		{name}
	</h3>
	<p class="font-poppins">
		{description}
	</p>
</main>
