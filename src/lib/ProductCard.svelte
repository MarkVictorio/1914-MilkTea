<script>
	export let photo;
	export let name;
	export let description;
</script>

<main class="flex flex-col p-6 bg-stone-50 w-96 rounded-lg">
	<img class="rounded-lg" src={photo} alt={name} />
	<h3 class="text-2xl font-medium font-poppins">
		{name}
	</h3>
	<p class="font-poppins">
		{description}
	</p>
</main>
